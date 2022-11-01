   fetch("https://api.npoint.io/b2649a9dc1217bcf7e93").then((data)=>{
        //console.log(data);
        return data.json();

    }).then((complete_data)=>{
        let data1="";
        complete_data.map((values)=>{
            data1= `<div class="post">
      <img class="img" src="../res/images/me.png" alt="icon" width="40" height="40">${values.Ptime}
      <img class="img1" src=${values.img} alt="img" width="400" height="400">
      <p>${values.texto}</p>
      <img class="img" src="../res/images/like.svg" alt="img" width="60" height="40"><br>
    </div>-->`

        });
        document.getElementById("posts").innerHTML=data1;
    }).catch((err)=>{
        console.log(err);

    })