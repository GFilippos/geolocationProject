// user geolocation
if('geolocation' in navigator) {
    console.log("geolocation available");
    navigator.geolocation.getCurrentPosition(position => {
        //testing purposes
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const accuracy = position.coords.accuracy
        console.log(position)
        document.getElementById('lat').textContent = lat
        document.getElementById('lon').textContent = lon
        // document.getElementById('latF').textContent = lat
        // document.getElementById('lonF').textContent = lon
        //document.forms[0].submit()
        //create marker
        const data = [lat, lon]
        const marker = L.marker([lat, lon], {icon:myIcon, draggable:true})
        const featureGroup = L.featureGroup([marker]).addTo(mymap)
        mymap.fitBounds(featureGroup.getBounds())
        // L.marker([lat, lon], {icon:myIcon, draggable:true}).addTo(mymap);
        //send user position data to python
        const user_pos = JSON.stringify(data)
        //print the json user position
        console.log(user_pos)
        // $.post("/handleData", {
        //     javascript_data: user_pos 
        // })
    })
} else {
    console.log("geolocation not available")
}
