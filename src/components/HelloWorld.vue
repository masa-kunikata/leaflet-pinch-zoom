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
import { tileLayer, map } from 'leaflet'
// import { tileLayer, latLng, control, marker, icon, divIcon, LatLngBounds, Map, MapOptions } from 'leaflet'

onMounted(async() => {
  await nextTick()

  // Initialize the map
  var _map = map('map', {
    scrollWheelZoom: false
  });

  // Set the position and zoom level of the map
  _map.setView([47.70, 13.35], 7);

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
    height: 500px;
}
</style>
