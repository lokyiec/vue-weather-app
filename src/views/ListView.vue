<template>
  <section class="max-w-3xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Weather App</h1>
    <div class="flex flex-col gap-4">
      <WeatherCard
        v-for="(weather, index) in weatherData"
        :key="index"
        :weather="weather"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeatherCard from '../components/WeatherCard.vue'

const weatherData = ref([
  {
    city: { name: 'London', id: '2643743' },
    temperature: {
      value: 12,
      description: 'clear sky',
      icon: 'http://openweathermap.org/img/w/01d.png',
    },
  },
  {
    city: { name: 'Berlin', id: '2950159' },
    temperature: {
      value: 7,
      description: 'few clouds',
      icon: 'http://openweathermap.org/img/w/02d.png',
    },
  },
  {
    city: { name: 'New York', id: '5128581' },
    temperature: {
      value: 16,
      description: 'scattered clouds',
      icon: 'http://openweathermap.org/img/w/03d.png',
    },
  },
])
</script>
