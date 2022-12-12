function readJSON() {
    // fetch("https://api.npoint.io/b2649a9dc1217bcf7e93")
    fetch('../res/json/objects.json')
        .then((response) => {
            return response.json();
        })

        .then((json) => {
            let posts = json;
            posts.map(function (onePost) {
                let post = document.createElement('div');
                post.setAttribute('class', 'post');
                if(onePost.hasOwnProperty('img')) {
                    post.innerHTML = `
                        <img class="img" src="../res/images/me.png" alt="icon" width="40" height="40">${onePost.Ptime}
                        <img class="img1" src=${onePost.img} alt="img" width="400" height="400">
                        <p>${onePost.name}: ${onePost.texto}</p>
                        <img class="img" src="../res/images/like.svg" alt="img" width="60" height="40"><br>
                    `;
                } else {
                    post.innerHTML = `
                        <img class="img" src="../res/images/me.png" alt="icon" width="40" height="40">${onePost.Ptime}
                        <p>${onePost.name}: ${onePost.texto}</p>
                        <img class="img" src="../res/images/like.svg" alt="img" width="60" height="40"><br>
                    `;
                }
                document.getElementById('posts').appendChild(post);

            });
        })
}
readJSON()
