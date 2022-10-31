fetch("https://api.npoint.io/b4c72af2537e4c2744c1").then((data)=>{
    //console.log(data);
    return data.json();

}).then((complete_data)=>{
    let data1="";
    complete_data.map((values)=>{
        data1= `<div class="post">
      <img src=${values.image} alt="img" width="400" height="400" class="img">
      <p>${values.text}</p>
      
      <img class="img" src="../res/images/like.svg" alt="img" width="60" height="40"><br>
    </div>`

    });
    document.getElementById("post").innerHTML=data1;
}).catch((err)=>{
    console.log(err);

})