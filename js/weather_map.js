
//Initialize page with default settings (san antonio)
    initializeMap(-98.48753, 29.42172);
    initializeMarker(-98.48753, 29.42172);
// updateCityName("San Antonio, Texas, United States");

    var map;
    function initializeMap(long,lat){
        // Creates weather maps
        mapboxgl.accessToken = mapboxToken;

        map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        zoom: 8,
        center: [long, lat]
        });
    }

//Default Initial forecast using center location
    updateForecast(29.42172,-98.48753);


//Creates a draggable marker
//https://docs.mapbox.com/mapbox-gl-js/example/drag-a-marker/
    function initializeMarker(long, lat){
        marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([long, lat])
            .addTo(map);
    }


function updateMarker(long, lat) {
    // Change the marker location
    initializeMap(long,lat);
    initializeMarker(long,lat);
}


//function that using the marker and updates the lat and long
    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;

    //Call UpdateForcast function and pass it the lat and long(in that order) to update the weather on the cards
    updateForecast(lngLat.lat,lngLat.lng);
}

    marker.on('dragend', onDragEnd);



//Create an array of objects that holds the condition and url to the icon
    var weatherIcons = [
        {
            condition: "clear-day",
            url: "./img/clearday.png"
        },
        {
            condition: "clear-night",
            url: "./img/clearnight.png"
        },
        {
            condition: "rain",
            url: "./img/rain.png"
        },
        {
            condition: "snow",
            url: "./img/snow.png"
        },
        {
            condition: "sleet",
            url: "./img/storm.png"
        },
        {
            condition: "wind",
            url: "./img/wind.png"
        },
        {
            condition: "fog",
            url: "./img/fog.png"
        },
        {
            condition: "cloudy",
            url: "./img/cloudy.png"
        },
        {
            condition: "partly-cloudy-day",
            url: "./img/partlycloudy.png"
        },
        {
            condition: "partly-cloudy-night",
            url: "./img/cloudynight.png"
        }
    ];


//main function to update the forecast
    function updateForecast(lat, long) {
        console.log(lat);
        console.log(long);

    //for the loading gif
    $('#today-iconloading').attr('src', '../img/loader.gif').toggleClass("loading");
    $('#tommorrow-iconloading').attr('src', '../img/loader.gif').toggleClass("loading");
    $('#next-iconloading').attr('src', '../img/loader.gif').toggleClass("loading");



    //For the darksky api to work we need us a proxy server which is the "cors-anywhere.herokuapp" url
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat + "," + long).done(function (response) {
        console.log(response);
        console.log(response.daily.data);
        console.log(Math.floor(response.daily.data[0].temperatureHigh));


 //current day
        //Current Day Temps

            //math.floor rounds the tempature down
            // "&#176;" adds the degrees symbol
        $("#today-temp").html("<h4>" + Math.floor(response.daily.data[0].temperatureHigh) + "&#176;" + "/" + Math.floor(response.daily.data[0].temperatureLow) + "&#176;" + "</h4>");

        //Current Day Icon
        var todayIconFromDarkSky = response.currently.icon;
        weatherIcons.forEach(function (weatherIcon) {
            if (weatherIcon.condition === todayIconFromDarkSky) {
                $("#today-icon").html('<img id=todayIcon src="' + weatherIcon.url + '" alt="' + weatherIcon.condition + '" >');
            }
        });


        //Append html with the data from dark sky. For Current Day
        $("#today-forecast").html(response.currently.summary);
        $("#today-humidity").html(response.currently.humidity * 100  + " %");
        $("#today-precipitation").html(response.currently.precipProbability  * 100 + " %");
        $("#today-winds").html(response.currently.windSpeed + " mph");

//Tomorrow
        //tomorrow temps

        //math.floor rounds the tempature down
        // "&#176;" adds the degrees symbol
        $("#tomorrow-temp").html("<h4>" + Math.floor(response.daily.data[1].temperatureHigh) + "&#176;" + "/" + Math.floor(response.daily.data[1].temperatureLow) + "&#176;" + "</h4>");

        //tomorrow icon
        var tomorrowIconFromDarkSky = response.daily.data[1].icon;
        weatherIcons.forEach(function (weatherIcon) {
            if (weatherIcon.condition === tomorrowIconFromDarkSky) {
                $("#tomorrow-icon").html('<img id=tomorrowIcon src="' + weatherIcon.url + '" alt="' + weatherIcon.condition + '" >');
            }
        });

        //append html with the data from dark sky for tomorrow
        $("#tomorrow-forecast").html(response.daily.data[1].summary);
        $("#tomorrow-humidity").html(response.daily.data[1].humidity * 100  + " %");
        $("#tomorrow-precipitation").html(response.daily.data[1].precipProbability  * 100 + " %");
        $("#tomorrow-winds").html(response.daily.data[1].windSpeed + " mph");
    });


//next day
    //Day After Tomorrow
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat + "," + long).done(function (response) {
        //next temps
            //math.floor rounds the tempature down
            // "&#176;" adds the degrees symbol
        $("#next-temp").html("<h4>" + Math.floor(response.daily.data[2].temperatureHigh) + "&#176;" + "/" + Math.floor(response.daily.data[2].temperatureLow) + "&#176;" + "</h4>");

        //next day icon
        var nextIconFromDarkSky = response.daily.data[2].icon;
        weatherIcons.forEach(function (weatherIcon) {
            if (weatherIcon.condition === nextIconFromDarkSky) {
                $("#next-icon").html('<img id=nextIcon src="' + weatherIcon.url + '" alt="' + weatherIcon.condition + '" >');
            }
        });

        //append html with the data from dark sky for next day
        $("#next-forecast").html(response.daily.data[2].summary);
        $("#next-humidity").html(response.daily.data[2].humidity * 100 + " %");
        $("#next-precipitation").html(response.daily.data[2].precipProbability  * 100 + " %");
        $("#next-winds").html(response.daily.data[2].windSpeed + " mph");
    });

}



//function that searches what the user is inputting
    $("#search-button").click(function () {
        var city =  $("#city").val();
        //call geocode function so that it will update the marker,map,forecast
        geocode(city);

    });

//function to update the city name at the top
    function updateCityName(city){
        $('#current-city').html("<h2>"+ city + "</h2>");
    }


    function geocode(search) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + mapboxToken)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                //console.log(data.features[0].geometry.coordinates);
                var coor = data.features[0].geometry.coordinates;

                updateForecast(coor[1],coor[0]);
                //updates where the marker is
                updateMarker(coor[0],coor[1]);
                //updated the citys name
                updateCityName(data.features[0].place_name)

            });

    }

    function reverseGeocode(coordinates) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + mapboxToken)
            .then(function(res) {
                return res.json();
            })
            // to get all the data from the request, comment out the following three lines...
            .then(function(data) {
                return data.features[0].place_name;
            });
    }









