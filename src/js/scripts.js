/* eslint-disable */

// $(document)(function(){
//     console.log('test')
//     function initMap() {
//         // The location of oishii
//         const oishii = { lat: 42.343349, lng: -71.066010 };
//         // The map, centered at oishii
//         const map = new google.maps.Map(
//         document.getElementById('map'), { zoom: 15, center: oishii },
//         );
//         // The marker, positioned at oishii
//     const marker = new google.maps.Marker({ position: oishii, map });
//   }
// })

/* eslint-disable */
import {GoogleMap} from '@googlemaps/map-loader';

/*
 * Set your API key here.
 * For more information on generating API keys,
 * see https://goo.gle/gmp-generate-api-key-video
 */
const googleMapsAPIKey = "AIzaSyBVizxDTK9ovtbn2UZeZ69xDvTO0IY5pJg";

/*
 * Options for how the map should initially render.
 * For more information on available options,
 * see https://goo.gle/maps-js-api-map-options
 */
const mapOptions = {
  center: {
    lat: 47.649196,
    lng: -122.350384
  },
  zoom: 12
}

/*
 * Options for loading the Maps JS API.
 */
const apiOptions = {
  version: 'weekly',
  libraries: ['places']
}

/*
 * Set ID of the div where the map will be loaded,
 * and whether to append to that div.
 */
const mapLoaderOptions = {
  apiKey: googleMapsAPIKey,
  divId: 'google_map',
  append: true, // Appends to divId. Set to false to init in divId.
  mapOptions: mapOptions,
  apiOptions: apiOptions
};

// Instantiate map loader
const mapLoader = new GoogleMap();

// Load the map
mapLoader
  .initMap(mapLoaderOptions)
  .then(googleMap => {
    console.log('map: ', googleMap)
    return googleMap
  });
