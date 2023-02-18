<template>
  <div id="map">
  </div>
  <button type="button" @click="increment">increment</button>
  <div class="log">
    {{ count }}
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
const count = computed(() => {
  return store.getters.count
})
const increment = () => {
  store.commit('increment')
}

onMounted(async() => {
  await nextTick()

  // Initialize the map
  var _map = map('map', {
    crs: CRS.Simple,
    scrollWheelZoom: false,

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
  height: 70vh;
}
.log{
  width: auto;
  height: 25vh;
}
</style>
