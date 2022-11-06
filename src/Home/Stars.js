import React from "react";

function Stars(i){
    var parent    = document.getElementById('images'),
    imagePath = 'http://www.placehold.it/400x100',
    img;

    for (var i = 0; i <= 5; i++) {
        img = new Image();
        img.src = imagePath;
        parent.appendChild(img);
    }
    return(
        parent
    );
}