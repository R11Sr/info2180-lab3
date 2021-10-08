

document.addEventListener("DOMContentLoaded", function(event) {
    let allsquares = document.getElementById('board');
    let children = allsquares.childNodes;
    // console.log(allsquares.childNodes);


    [...children].forEach((e) =>{e.className = 'square';});
    // children.forEach( function (obj){
    //     this.className = 'square';
    // });
});


// window.onload = function(){
//     let e = document.getElementById('#board');
//     console.log(e);
// }


