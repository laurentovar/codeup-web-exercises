
// Creates weather maps
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 8,
    center: [-98.48753, 29.42172]

});

//Default Initial forcast using center location
updateForcast(29.42172,-98.48753);
// updateForcastTomorrow(29.42172,-98.48753);


//Creates a draggable marker
//https://docs.mapbox.com/mapbox-gl-js/example/drag-a-marker/
var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.48753, 29.42172])
    .addTo(map);

function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;

    //Call UpdateForcast function and pass it the lat and long(in that order)
    updateForcast(lngLat.lat,lngLat.lng);
    // updateForcastTomorrow(lngLat.lat,lngLat.lng)
}

marker.on('dragend', onDragEnd);



//Create an array of objects that holds the condition and url to the icon
var weatherIcons = [
    {
        condition: "clear-day",
        url: "./Icons/Sun.svg"
    },
    {
        condition: "clear-night",
        url: "./icons/Moon.svg"
    },
    {
        condition: "rain",
        url: "./icons/Cloud-Rain.svg"
    },
    {
        condition: "snow",
        url: "./icons/Snowflake.svg"
    },
    {
        condition: "sleet",
        url: "./icons/Cloud-Hail.svg"
    },
    {
        condition: "wind",
        url: "./icons/Wind.svg"
    },
    {
        condition: "fog",
        url: "./icons/Cloud-Fog.svg"
    },
    {
        condition: "cloudy",
        url: "./icons/Cloud.svg"
    },
    {
        condition: "partly-cloudy-day",
        url: "./icons/Cloud-Sun.svg"
    },
    {
        condition: "partly-cloudy-night",
        url: "./icons/Cloud-Moon.svg"
    }
];






function updateForcast(lat, long) {
    console.log(lat);
    console.log(long);

    $("#search-button").click(function () {
        var lat =  $("#latitude").val();
        var long = $("#longitude").val();
    });

    //For the darksky api to work we need us a proxy server which is the "cors-anywhere.herokuapp" url
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat + "," + long).done(function (response) {
        console.log(response);
        console.log(response.daily.data);
        console.log(response.daily.data[0].temperatureHigh);

        //Current Day Temps
        $("#today-temp").html("<h4>" + response.daily.data[0].temperatureHigh + "/" + response.daily.data[0].temperatureLow + "</h4>");

        //Current Day Icon
        var todayIconFromDarkSky = response.currently.icon;
        weatherIcons.forEach(function (weatherIcon) {
            if (weatherIcon.condition === todayIconFromDarkSky) {
                $("#today-icon").html('<img id=todayIcon src="' + weatherIcon.url + '" alt="' + weatherIcon.condition + '" >');
            }
        });


        //Append html with the data from dark sky. For Current Day
        $("#today-clouds").html(response.currently.summary);
        $("#today-humidity").html(response.currently.humidity * 100);
        $("#today-winds").html(response.currently.windSpeed);
        $("#today-pressure").html(response.currently.pressure);

        //tomorrow temps
        $("#tomorrow-temp").html("<h4>" + response.daily.data[1].temperatureHigh + "/" + response.daily.data[1].temperatureLow + "</h4>");

        var tomorrowIconFromDarkSky = response.daily.data[1].icon;
        weatherIcons.forEach(function (weatherIcon) {
            if (weatherIcon.condition === tomorrowIconFromDarkSky) {
                $("#tomorrow-icon").html('<img id=tomorrowIcon src="' + weatherIcon.url + '" alt="' + weatherIcon.condition + '" >');
            }
        });

        $("#tomorrow-clouds").html(response.daily.data[1].summary);
        $("#tomorrow-humidity").html(response.daily.data[1].humidity * 100);
        $("#tomorrow-winds").html(response.daily.data[1].windSpeed);
        $("#tomorrow-pressure").html(response.daily.data[1].pressure);
    });

    //Tomorrow
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat + "," + long).done(function (response) {
        console.log(response);
        console.log(response.daily.data);
        console.log(response.daily.data[1].temperatureHigh);

        //tomorrow temps
        $("#tomorrow-temp").html("<h4>" + response.daily.data[1].temperatureHigh + "/" + response.daily.data[1].temperatureLow + "</h4>");

        var tomorrowIconFromDarkSky = response.daily.data[1].icon;
        weatherIcons.forEach(function (weatherIcon) {
            if (weatherIcon.condition === tomorrowIconFromDarkSky) {
                $("#tomorrow-icon").html('<img id=tomorrowIcon src="' + weatherIcon.url + '" alt="' + weatherIcon.condition + '" >');
            }
        });

        $("#tomorrow-clouds").html(response.daily.data[1].summary);
        $("#tomorrow-humidity").html(response.daily.data[1].humidity * 100);
        $("#tomorrow-winds").html(response.daily.data[1].windSpeed);
        $("#tomorrow-pressure").html(response.daily.data[1].pressure);
    });

    //Day After Tomorrow
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat + "," + long).done(function (response) {

        //next temps
        $("#next-temp").html("<h4>" + response.daily.data[2].temperatureHigh + "/" + response.daily.data[2].temperatureLow + "</h4>");

        var nextIconFromDarkSky = response.daily.data[2].icon;
        weatherIcons.forEach(function (weatherIcon) {
            if (weatherIcon.condition === nextIconFromDarkSky) {
                $("#next-icon").html('<img id=nextIcon src="' + weatherIcon.url + '" alt="' + weatherIcon.condition + '" >');
            }
        });

        $("#next-clouds").html(response.daily.data[2].summary);
        $("#next-humidity").html(response.daily.data[2].humidity * 100);
        $("#next-winds").html(response.daily.data[2].windSpeed);
        $("#next-pressure").html(response.daily.data[2].pressure);
    });

}










