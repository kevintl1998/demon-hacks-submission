import React from "react";

function Stars(n){
    if (n < 0 || n > 5) {
        return NaN
    }

    var parent    = document.getElementById('images'),
    imagePath = 'http://www.placehold.it/400x100',
    img;

    for (var i = 0; i <= n; i++) {
        img = new Image();
        img.src = imagePath;
        parent.appendChild(img);
    }
    return(
        parent
    );
}