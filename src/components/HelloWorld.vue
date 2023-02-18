<template>
  <div id="map">
  </div>
  <div class="log">
    <div v-for="(aLog, idx) in logs" :key="idx">
      {{ idx }}, {{ aLog }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"
import { nextTick, onMounted } from '@vue/runtime-core';
import { tileLayer, map, CRS } from 'leaflet'
// import { tileLayer, latLng, control, marker, icon, divIcon, LatLngBounds, Map, MapOptions } from 'leaflet'

const store = useStore()
const logs = computed(() => {
  return store.getters.logs
})

onMounted(async() => {
  await nextTick()

  // Initialize the map
  var _map = map('map', {
    crs: CRS.Simple,
    scrollWheelZoom: false,
    minZoom: -0.8,

    touchZoom: false,
    touchZoom_custom: true,
  });

  // Set the position and zoom level of the map
  _map.setView([0, 0], 1);

  console.log({touchZoomHandlerEnabled: _map.touchZoom.enabled()})
  console.log({touchZoom_customHandler: _map.touchZoom_custom.enabled()})
  // _map.touchZoom.disable() // dynamic toggle
  // _map.touchZoom.enable() // dynamic toggle
  // console.log({touchZoomHandlerEnabled: _map.touchZoom.enabled()})


  // Initialize the base layer
  tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 3,
    minZoom: -0.8,
    attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(_map);
})
</script>

<style scoped>
@import url('leaflet/dist/leaflet.css');

#map
{
  width: auto;
  height: 70vh;
}
.log{
  width: auto;
  height: 25vh;
}
</style>
