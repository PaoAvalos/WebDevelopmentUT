export default {
    user: { authenticated: true },
    authenticated: async function() {
        await fetch("http://localhost:3000/api/authenticate", {
                credentials: 'include',
            })
            .then((response) => response.json())
            .then((data) => {
                this.user.authenticated = data.authenticated;
            })
            .catch((e) => {
                console.log(e);
            });
        return this.user.authenticated;
    }
}