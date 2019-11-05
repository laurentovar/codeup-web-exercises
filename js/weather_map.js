
//weather maps
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-98.48753, 29.42172]
});

//function that shows your postion
var lat= position.coords.latitude;
var long = position.coords.latitudel;

function showPosition(position) {
    var lat= position.coords.latitude;
    var long = position.coords.latitudel
}
//function that cant find your position
function positionNotFound() {
    alert("Unable to retrieve your location.")
}
var darkSky = "https://api.darksky.net/forecast/1441981f17b80ddabcad6ec5ea8f21ff/37.8267,-122.4233";
var latlng = lat + "," + long ;

//to get where the weather is (the name)
$.get(darkSky, function (data) {
    var arr_address = data.results[0].address_components
    arr_address.forEach(function (val) {
        if (val.types[0] === "locality"){
            cityName = val.long_name;
        }
        if (val.types[0] === "country"){
            countryCode = val.short_name;
            countryName = val.long_name
        }
    })
})