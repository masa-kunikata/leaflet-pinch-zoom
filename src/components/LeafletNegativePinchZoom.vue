<template>
  <div id="map">
  </div>
  <div class="info">
    zoom: {{ currentZoom }}
  </div>
</template>

<script>
export default {
  name: 'LeafletNegativePinchZoom',
}
</script>

<script setup>
import { ref, nextTick, onMounted } from '@vue/runtime-core';
import { tileLayer, map, CRS } from 'leaflet'

const currentZoom = ref(0)

onMounted(async() => {
  await nextTick()

  const maxBounds = [
    [0, 0],
    [-256, 256],
  ]

  // Initialize the map
  const _map = map('map', {
    crs: CRS.Simple,
    maxBounds,
    
    touchZoom: true,
    scrollWheelZoom: false,
  })

  // Initialize the base layer
  tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 5,
    minZoom: -0.8,
    attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(_map)

  _map.on("zoomend", () => {
    currentZoom.value = _map.getZoom() 
  })

  // Set the initial position
  _map.fitBounds(maxBounds)
})
</script>

<style scoped>
@import url('leaflet/dist/leaflet.css');

#map
{
  width: auto;
  height: 70vh;
}
.info{
  width: auto;
  height: 25vh;
  overflow-y: scroll;
}
</style>
