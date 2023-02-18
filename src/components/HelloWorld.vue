<template>
  <div id="map">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<script setup>
import { nextTick, onMounted } from '@vue/runtime-core';
import { tileLayer, map, CRS } from 'leaflet'
// import { tileLayer, latLng, control, marker, icon, divIcon, LatLngBounds, Map, MapOptions } from 'leaflet'

onMounted(async() => {
  await nextTick()

  // Initialize the map
  var _map = map('map', {
    crs: CRS.Simple,
  });

  // Set the position and zoom level of the map
  // _map.setView([47.70, 13.35], 7);
  _map.setView([0, 0], 1);

  // Initialize the base layer
  tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(_map);
})
</script>

<style scoped>
@import url('leaflet/dist/leaflet.css');

#map
{
    width: auto;
    height: 90vh;
}
</style>
