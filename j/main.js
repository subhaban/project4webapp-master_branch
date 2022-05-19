/*===================================================
                      OSM  LAYER               
===================================================*/

var map = L.map('map').setView([40.91, -96.63], 4);
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

/*===================================================
                      MARKER               
===================================================*/

// var singleMarker = L.marker([28.25255,83.97669]);
// singleMarker.addTo(map);
// var popup = singleMarker.bindPopup('This is a popup')
// popup.addTo(map);

/*===================================================
                     TILE LAYER               
===================================================*/

var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
});
CartoDB_DarkMatter.addTo(map);

// Google Map Layer

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
googleStreets.addTo(map);

// Satelite Layer
googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
googleSat.addTo(map);

var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 1,
  maxZoom: 16,
  ext: 'jpg'
});
Stamen_Watercolor.addTo(map);


/*===================================================
                      GEOJSON               
===================================================*/

// var linedata = L.geoJSON(lineJSON).addTo(map);
// var pointdata = L.geoJSON(pointJSON).addTo(map);
// var nepalData = L.geoJSON(nepaldataa).addTo(map);
// var polygondata = L.geoJSON(polygonJSON,{
//     onEachFeature: function(feature,layer){
//         layer.bindPopup('<b>This is a </b>' + feature.properties.name);
//     },
//     style:{
//         fillColor: 'red',
//         fillOpacity:1,
//         color: 'green'
//     }
// }).addTo(map);

/*===================================================
                      LAYER CONTROL               
===================================================*/


var baseLayers = {
  "Satellite": googleSat,
  "Google Map": googleStreets,
  "Water Color": Stamen_Watercolor,
  "OpenStreetMap": osm,
};

var FlagIcon = L.Icon.extend({
  options: {
    iconSize: [25, 25],
    iconAnchor: [0, 0]
  }
});

var fl1 = new FlagIcon({
    iconUrl: 'i/flags/alabama-flag-icon-64.png'
  }),
  fl2 = new FlagIcon({
    iconUrl: 'i/flags/alaska-flag-icon-64.png'
  }),
  fl3 = new FlagIcon({
    iconUrl: 'i/flags/arizona-flag-icon-64.png'
  }),
  fl4 = new FlagIcon({
    iconUrl: 'i/flags/arkansas-flag-icon-64.png'
  }),
  fl5 = new FlagIcon({
    iconUrl: 'i/flags/california-flag-icon-64.png'
  }),
  fl6 = new FlagIcon({
    iconUrl: 'i/flags/colorado-flag-icon-64.png'
  }),
  fl7 = new FlagIcon({
    iconUrl: 'i/flags/connecticut-flag-icon-64.png'
  });
fl8 = new FlagIcon({
  iconUrl: 'i/flags/delaware-flag-icon-64.png'
});
fl9 = new FlagIcon({
  iconUrl: 'i/flags/florida-flag-icon-64.png'
});
fl10 = new FlagIcon({
  iconUrl: 'i/flags/hawaii-flag-icon-64.png'
});
fl11 = new FlagIcon({
  iconUrl: 'i/flags/hawaii-flag-icon-64.png'
});
fl12 = new FlagIcon({
  iconUrl: 'i/flags/idaho-flag-icon-64.png'
});
fl13 = new FlagIcon({
  iconUrl: 'i/flags/illinois-flag-icon-64.png'
});
fl14 = new FlagIcon({
  iconUrl: 'i/flags/iowa-flag-icon-64.png'
});
fl15 = new FlagIcon({
  iconUrl: 'i/flags/kansas-flag-icon-64.png'
});
fl16 = new FlagIcon({
  iconUrl: 'i/flags/louisiana-flag-icon-64.png'
});
fl17 = new FlagIcon({
  iconUrl: 'i/flags/maine-flag-icon-64.png'
});
fl18 = new FlagIcon({
  iconUrl: 'i/flags/maryland-flag-icon-64.png'
});
fl19 = new FlagIcon({
  iconUrl: 'i/flags/massachusetts-flag-icon-64.png'
});
fl20 = new FlagIcon({
  iconUrl: 'i/flags/michigan-flag-icon-64.png'
});
fl21 = new FlagIcon({
  iconUrl: 'i/flags/minnesota-flag-icon-64.png'
});
fl22 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl23 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl24 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl25 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl26 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl27 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl28 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl29 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl30 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl31 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl32 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl33 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl34 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});
fl35 = new FlagIcon({
  iconUrl: 'i/flags/kentucky-flag-icon-64.png'
});





var fl1marker = L.marker([32.361538, -86.279118], {
  icon: fl1
});
var fl2marker = L.marker([64.2008, -149.4937], {
  icon: fl2
});
var fl3marker = L.marker([33.448457, -112.073844], {
  icon: fl3
});
var fl4marker = L.marker([34.736009, -92.331122], {
  icon: fl4
});
var fl5marker = L.marker([34.736009, -92.331122], {
  icon: fl5
});
var fl6marker = L.marker([34.736009, -92.331122], {
  icon: fl6
});
var fl7marker = L.marker([34.736009, -92.331122], {
  icon: fl7
});
var fl8marker = L.marker([34.736009, -92.331122], {
  icon: fl8
});
var fl9marker = L.marker([34.736009, -92.331122], {
  icon: fl9
});
var fl10marker = L.marker([34.736009, -92.331122], {
  icon: fl10
});

///----Point of Interest--////

var LeafletIcon = L.Icon.extend({
  options: {
    iconSize: [30, 30],
    iconAnchor: [0, 0],
  }
})

var poi1Icon = new LeafletIcon({
    iconUrl: 'i/poi/statueof Liberty.png'
  }),
  poi2Icon = new LeafletIcon({
    iconUrl: 'i/poi/mtrushmore.png'
  }),
  poi3Icon = new LeafletIcon({
    iconUrl: 'i/poi/grandcanyon.png'
  }),
  poi4Icon = new LeafletIcon({
    iconUrl: 'i/poi/naigra_falls.png'
  }),
  poi5Icon = new LeafletIcon({
    iconUrl: 'i/poi/yellowstone.png'
  }),
  poi6Icon = new LeafletIcon({
    iconUrl: 'i/poi/hawaii.png'
  }),
  poi7Icon = new LeafletIcon({
    iconUrl: 'i/poi/utah.png'
  }),
  poi8Icon = new LeafletIcon({
    iconUrl: 'i/poi/goldengate.png'
  })
  poi9Icon = new LeafletIcon({
    iconUrl: 'i/poi/illunious.png'
  })
  poi10Icon = new LeafletIcon({
    iconUrl: 'i/poi/alaska.png'
  })


var p1Marker = L.marker([40.7128, -74.0060], {
  icon: poi1Icon
})
p2Marker = L.marker([43.8791, -103.4591], {
  icon: poi2Icon
})
p3Marker = L.marker([36.0544, -112.1401], {
  icon: poi3Icon
})
p4Marker = L.marker([43.0962, -79.0377], {
  icon: poi4Icon
})
p5Marker = L.marker([44.4280, -110.5885], {
  icon: poi5Icon
})
p6Marker = L.marker([20.798363, -156.331924], {
  icon: poi6Icon
})
p7Marker = L.marker([39.3210, -111.0937], {
  icon: poi7Icon
})
p8Marker = L.marker([37.7749,-122.4194], {
  icon: poi8Icon
})
p9Marker = L.marker([40.6331, -89.3985], {
  icon: poi9Icon
})
p10Marker = L.marker([64.2008, -149.4937], {
  icon: poi10Icon
})








var ptMarker = L.layerGroup([p1Marker, p2Marker, p3Marker, p4Marker, p5Marker, p6Marker, p7Marker,p8Marker,p9Marker,p10Marker])
var stateFlags = L.layerGroup([fl1marker, fl2marker, fl3marker, fl4marker, fl5marker, fl6marker, fl7marker, fl8marker, fl9marker, fl10marker]);


// L.control.layers(baseLayers, overlays).addTo(map);
var overlayMaps = {
  "Point of Interest": ptMarker,
  "State Flags": stateFlags,
};

//L.control.layers(baseMaps, overlayMaps).addTo(map);*/

L.control.layers(baseLayers, overlayMaps).addTo(map);


/*===================================================
                      SEARCH BUTTON               
===================================================*/

L.Control.geocoder().addTo(map);


/*===================================================
                      Choropleth Map               
===================================================*/

L.geoJSON(statesData).addTo(map);


function getColor(d) {
  // return d > 1000 ? '#032C10' :
  //        d > 500  ? '#05471A' :
  //        d > 200  ? '#15903A' :
  //        d > 100  ? '#1CB95A' :
  //        d > 50   ? '#3CE77F' :
  //        d > 20   ? '#82FBB1' :
  //        d > 10   ? '#BBE8CC' :
  //                   '#E0FEEB';
  return d > 1000 ? '#020004' :
    d > 500 ? '#2C084F' :
    d > 200 ? '#4C1780' :
    d > 100 ? '#7C48AE' :
    d > 50 ? '#AA76DD' :
    d > 20 ? '#CCA5F3' :
    d > 10 ? '#DED1E4' :
    '#F4E3FD';
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
}

L.geoJson(statesData, {
  style: style
}).addTo(map);

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }

  info.update(layer.feature.properties);
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

var geojson;
// ... our listeners
geojson = L.geoJson(statesData);

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature
  });
}

geojson = L.geoJson(statesData, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map);

var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  this.update();
  return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
  this._div.innerHTML = '<h4>US Population Density</h4>' + (props ?
    '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>' :
    'Hover over a state');
};

info.addTo(map);

var legend = L.control({
  position: 'bottomright'
});

legend.onAdd = function (map) {

  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    labels = [];


  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
      grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }

  return div;
};

legend.addTo(map);


///////////////////////////////////////////////////////////////////////////////////////////////////////
const apiKey = 'eb380ce293c80acb396c9d71258f3d32';

// add marker with popup
async function addMarkers() {
  removeMarkers();

  var states = await fetchStates();

  for (var i = 0; i < states.length; i++) {

    var weatherResult = await fetchWeather(apiKey, states[i].state_name);

    var Icon = L.Icon.extend({
        options: {
          shadowUrl: "",
          iconSize: [30, 85],
          shadowSize: [50, 64],
          iconAnchor: [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor: [-3, -76]
        }
      }),
      loc = [weatherResult.coord.lat, weatherResult.coord.lon],
      html = states[i].state_name + "<br>" + "<b>Lon:</b>  " + weatherResult.coord.lat + "<br>" +
      "<b>Lat:</b> " + weatherResult.coord.lon + "<br>" + "<b>Temp:</b> " + weatherResult.main.temp + "°C" + "<br>" + "<b>Humidity:</b> " + weatherResult.main.humidity + "%",
      marker = L.marker(loc, {
        icon: new Icon({
          iconUrl: "http://leafletjs.com/examples/custom-icons/" +
            getRandomItemFromArray()
        }),
        // title: "tweet " + i,
        title: states[i].state_name,
        // title: "Temp: " + weatherResult.main.temp + "°C",
        // title: states[i].state_name + "/" + "Temp: " + weatherResult.main.temp + "°C",
        alt: "state " + i,
        riseOnHover: true
      }).bindPopup(html /* ,{autoClose:false} */ );
    marker.isRandom = true; // just to differenciate from any other markers available in the map
    // add just marker/ marker with popup/ just popup
    marker.addTo(map); // map.addLayer(marker); .openPopup();
  }
}

async function removeMarkers() {
  map.eachLayer(function (layer) {
    if (
      layer instanceof L.Marker &&
      layer.isRandom /* ensure that we are not removing any other markers available in the map, see how the marker is added to the map */
    ) {
      layer.remove(); // layer.removeFrom(map); map.removeLayer(layer);
    }
  });
}

function getRandomIntBetween(max, min = 1) {
  // Math.random() returns 0<=random number<1
  // Math.floor() returns a int downward to its nearest int
  // 1 to max
  // Math.floor(Math.random() * max + 1);
  // min to max
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItemFromArray(
  // ar = ["leaf-green.png", "leaf-red.png", "leaf-orange.png"]
  ar = ["leaf-orange.png"]


) {
  return ar[getRandomIntBetween(ar.length - 1, 0)];
}

async function fetchStates() {
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('api-token', 'D5ZOKr2VHZcCJfb4_tCeHI5VTXpoP-fvoTLyIy8hGIrVqsgFZThkIO9x-dEnt2wvOIg');
  headers.append('user-email', 'arannya.karak@gmail.com');
  try {
    let response1 = await fetch(`https://www.universal-tutorial.com/api/getaccesstoken`, {
      // mode: 'no-cors',
      // credentials: 'include',
      method: 'GET',
      headers: headers
    });
    // let response = await fetch(`https://api.waqi.info/feed/${city}/?token=c3d00f04680ed6402e8567a9314b1df8073cae74`);
    let data1 = await response1.json();
    console.log("START");
    console.log(data1.auth_token);
    console.log("END");
    // } catch (err1) {
    //     //this only runs if an error occurs in above process
    //     console.log('Oops!', err1);
    // }

    ////////

    let tkn = "Bearer " + data1.auth_token;


    let headers2 = new Headers();

    headers2.append('Content-Type', 'application/json');
    headers2.append('Accept', 'application/json');
    headers2.append('Authorization', tkn);
    //   try {
    let response2 = await fetch(`https://www.universal-tutorial.com/api/states/United%20States`, {
      method: 'GET',
      headers: headers2
    });
    let data2 = await response2.json();
    //   console.log("START");
    //   console.log(data2);
    // for(let i = 0; i < data2.length; i++){
    //     console.log(data2[i].state_name);
    // }
    //   console.log("END");
    return data2;
  } catch (err1) {
    //this only runs if an error occurs in above process
    console.log('Oops!', err1);
  }

  /////
}

async function fetchWeather(key, city) {

  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
  let data = response.json();
  return data;
}

// capital popup
async function getCapitals() {

  let states = await fetch('./data/capital.json');
  let capitalNames = states.json();
  console.log(states);
  console.log(capitalNames);
  return capitalNames;
}

async function addPopups() {
  removePopups();

  var list = await getCapitals();

  let states = list.states;
  console.log(states);
  for (var i = 0; i < states.length; i++) {

    var data = states[i].capital;
    console.log(data);

    var Icon = L.Icon.extend({
        options: {
          shadowUrl: "",
          iconSize: [40, 40],
          shadowSize: [0, 0],
          iconAnchor: [10, 10],
          shadowAnchor: [0, 0],
          popupAnchor: [0, 0]
        }
      }),
      location = [states[i].lat, states[i].long];
    city = states[i].capital;
    //console.log(cap);
    html = '<b>Capital:</b>' + `<b> ${city} </b>`,
      marker = L.marker(location, {
        icon: new Icon({
          iconUrl: "i/marker.svg"
        }),
        //title: "tweet " + i,
        // title: location,
        // title: "Temp: " + weatherResult.main.temp + "°C",
        title: `${states[i].name} /Capital: ${states[i].capital}`,
        alt: "capital " + i,
        riseOnHover: true
      }).bindPopup(html /* ,{autoClose:false} */ );
    marker.isRandom = false; // just to differenciate from any other markers available in the map
    // add just marker/ marker with popup/ just popup
    marker.addTo(map); // map.addLayer(marker); .openPopup();
  }

}

async function removePopups() {
  map.eachLayer(function (layer) {
    if (
      layer instanceof L.Marker &&
      layer.isRandom == false /* ensure that we are not removing any other popups available in the map, see how the popup is added to the map */
    ) {
      layer.remove(); // layer.removeFrom(map); map.removeLayer(layer);
    }
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// heading info
let i = 0;

const randomizeText = () => {
  const phrase = document.querySelector('.random-word');
  const compStyles = window.getComputedStyle(phrase);
  const animation = compStyles.getPropertyValue('animation');
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;

  const phrases = ['State', 'Capital', 'Population ', 'Weather', 'Latitude', 'longitude'];

  i = randomNum(i, phrases.length);
  const newPhrase = phrases[i];

  setTimeout(() => {
    phrase.textContent = newPhrase;
  }, 300); // time to allow opacity to hit 0 before changing word
};

const randomNum = (num, max) => {
  let j = Math.floor(Math.random() * max);

  // ensure diff num every time
  if (num === j) {
    return randomNum(i, max);
  } else {
    return j;
  }
};

const getAnimationTime = () => {
  const phrase = document.querySelector('.random-word');
  const compStyles = window.getComputedStyle(phrase);
  let animation = compStyles.getPropertyValue('animation');

  // firefox support for non-shorthand property
  animation != "" ? animation : animation = compStyles.getPropertyValue('-moz-animation-duration');

  // webkit support for non-shorthand property
  animation != "" ? animation : animation = compStyles.getPropertyValue('-webkit-animation-duration');


  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  return animationTime;
};

randomizeText();
setInterval(randomizeText, getAnimationTime());

///////////////////////////////////////////////////////////////////////////////////////

///adding layers///



///-----function for point of interest/////

/*function testFunction1(){
  layerGroup.clearLayers();
  map.closePopup();
  marker = L.marker([40.743, -73.822]).addTo(layerGroup);
  marker.bindPopup(`Statue of Libertry,New York`).openPopup();
}

function testFunction2(){
 layerGroup.clearLayers();
 map.closePopup();
 marker = L.marker([36.0544, -112.1401]).addTo(layerGroup);
 marker.bindPopup(`Grand Canyon,Arizona`).openPopup();
 }
 function testFunction3(){
 layerGroup.clearLayers();
 map.closePopup();
 marker = L.marker([39.9526, -75.1652]).addTo(layerGroup);
 marker.bindPopup(`Independence Hall,Philadelphia`);
 }

 function testFunction4(){
 layerGroup.clearLayers();
 map.closePopup();
 marker = L.marker([36.7783, -119.4179]).addTo(layerGroup);
 marker.bindPopup(`Redwood National Park,California`).openPopup();
 }

 function testFunction5(){
 layerGroup.clearLayers();
 map.closePopup();
 marker = L.marker([64.2008, -149.4937]).addTo(layerGroup);
 marker.bindPopup(`Mendenhall Glacier,Alaska`).openPopup();
 }
 function testFunction6(){
 layerGroup.clearLayers();
 map.closePopup();
 marker = L.marker([28.7041, 77.1025]).addTo(layerGroup);
 marker.bindPopup("Taj Maha,New Delhi,India").openPopup();
 }*/