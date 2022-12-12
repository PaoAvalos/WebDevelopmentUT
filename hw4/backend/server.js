const express = require('express');
const pool = require('./database');
const cors = require('cors')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());
app.use(cookieParser());
//JWT TOKEN CREATION
const secret = "97dd4cc2b6ef051a0dc62a2f2c200277673c5d81762bea6448faa507ab1eacfe14d624bb0db431a8bc951bdee76672c91d777b83b44430445c442ba965acc656";
// Obtained with require('crypto').randomBytes(64).toString('hex')
const refresh_secret = "5125505625158c249f98679fd6e9b64e25ef858b3de39da28d9bedec3cea5550bbe78f216ef4db18023bcecb5b3f1d71703ca73871b88e784cc274cd415e82b4";
const maxAge = 60 * 60; //unlike cookies, the expiresIn in jwt token is calculated by seconds not milliseconds
const generateJWT = (id) => {
    return jwt.sign({ id }, secret )
    //{ expiresIn: maxAge } later i will add this, when i am refreshing it

    //jwt.sign(payload, secret, [options, callback]), and it returns the JWT as string
}


app.post('/api/posts', async(req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posttable(body, time) values ($1, $2)    RETURNING*", [post.body, post.time]
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
});


app.get('/api/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");  
        const posts = await pool.query(
            "SELECT * FROM posttable"
        );
        res.json(posts.rows);

    } catch (err) {
        console.error(err.message);
    }
});


app.get('/api/posts/:id', async(req, res) => {
    try {
        console.log("get a post with route parameter  request has arrived");
        const { id } = req.params;
        const posts = await pool.query(
            "SELECT * FROM posttable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put('/api/posts/:id', async(req, res) => {

    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE posttable SET body = $2 WHERE id = $1", [id, post.body]
        );
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});



app.delete('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM posttable WHERE id = $1", [id]
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/api/posts', async(req, res) => {
    try {
        console.log("delete all posts request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM posttable"
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});

//AUTHENTICATION 
// is used to check whether a user is AUTH.

// is used to check whether a user is authinticated
app.get('/api/authenticate', async(req, res) => {
    console.log('authentication request has been arrived');
    const token = req.cookies.jwt; // assign the token named jwt to the token const
    console.log("token " + token);
    let authenticated = false; // a user is not authenticated until proven the opposite
    try {
        if (token) { //checks if the token exists
            //jwt.verify(token, secretOrPublicKey, [options, callback]) verify a token
            await jwt.verify(token, secret, (err) => { //token exists, now we try to verify it
                if (err) { // not verified, redirect to login page
                    console.log(err.message);
                    console.log('token is not verified');
                    res.send({ "authenticated": authenticated }); // authenticated = false
                } else { // token exists and it is verified 
                    console.log('author is authenticated');
                    authenticated = true;
                    res.send({ "authenticated": authenticated }); // authenticated = true
                }
            })
        } else { //applies when the token does not exist
            console.log('no token');
            res.send({ "authenticated": authenticated }); // authenticated = false
        }
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

// signup a user
app.post('/api/signup', async(req, res) => {
    try {
        console.log("a signup request has arrived");
        //console.log(req.body);
        const { email, password } = req.body;

        const salt = await bcrypt.genSalt(); //  generates the salt, i.e., a random string
        const bcryptPassword = await bcrypt.hash(password, salt) // hash the password and the salt 
        const authUser = await pool.query( // insert the user and the hashed password into the database
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
        );
        console.log(authUser.rows[0].id);
        const token = await generateJWT(authUser.rows[0].id); // generates a JWT by taking the user id as an input (payload)
        console.log(token);
        //res.cookie("isAuthorized", true, { maxAge: 1000 * 60, httpOnly: true });
        //res.cookie('jwt', token, { maxAge: 6000000, httpOnly: true });
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: authUser.rows[0].id })
            .send;
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

app.post('/api/login', async(req, res) => {
    try {
        console.log("a login request has arrived");
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });

        /* 
        To authenticate users, you will need to compare the password they provide with the one in the database. 
        bcrypt.compare() accepts the plain text password and the hash that you stored, along with a callback function. 
        That callback supplies an object containing any errors that occurred, and the overall result from the comparison. 
        If the password matches the hash, the result is true.
        bcrypt.compare method takes the first argument as a plain text and the second argument as a hash password. 
        If both are equal then it returns true else returns false.
        */

        //Checking if the password is correct
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        //console.log("validPassword:" + validPassword);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

        const token = await generateJWT(user.rows[0].id);
        console.log(token);
        res
            .status(201)
            .cookie("jwt", token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id })
            .send;
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

//logout a user = deletes the jwt
app.get('/api/logout', (req, res) => {
    console.log('delete jwt request arrived');
    res.status(202).clearCookie('jwt').json({ "Msg": "cookie cleared" }).send
});
