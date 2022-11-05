import React from 'react'

function explore() {
    return (
        <body>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
                integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=" crossOrigin=""/>
            <link rel="stylesheet" href="Explore.css"></link>
            <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
                integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
                    crossOrigin=""></script>
            <div id="map"></div>
        </body>
    )
}