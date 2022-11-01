window.onload = function () {
    fetch('../json/desc_obj.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json)
            for (const jsonElement of json) {
                let div = document.createElement("h1")
                let post = document.getElementsByClassName(".post")
                let name = document.createElement("name")
                let paragraph = document.createElement("p")
                let image = document.createElement("img")
                let time = document.createElement("time")
                div.className = "post"
                time.innerText =jsonElement.time
                name.innerHTML = jsonElement.name
                paragraph.innerText=jsonElement.text
                image.innerHTML = jsonElement.image
                div.appendChild(name)
                div.appendChild(paragraph)
                div.appendChild(time)
                div.appendChild(image)
                document.body.appendChild(div)
            }
        }).catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
    }).finally(() => {
        let footer = document.createElement("footer");
        footer.innerText = "Footer"
        document.body.appendChild(footer);
    })
}