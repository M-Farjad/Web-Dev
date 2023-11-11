// function func1() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log('Function: Your promise has been resolved')
//                 resolve();
//             } else {
//                 console.log('Function: Your promise has not been resolved')
//                 reject('Sorry not fulfilled');
//             }
//         }, 2000)
//     })
// }

// func1().then(function() {
//     console.log("Farjad: Thanks for resolving")
// }).catch(function(error) {
//     console.log("Farjad: Very bad bro. Reason: " + error)
// })

function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                // Mark on the map
                new mapboxgl.Marker({
                        draggable: true,
                        color: "red"
                    })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}
updateMap();