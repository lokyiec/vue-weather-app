<script setup lang="ts">
import { ref, onMounted } from "vue";
import WeatherCard from "../components/WeatherCard.vue";
import weatherService from "../services/weather.service";

const cities = ref([
  { name: "Warsaw", id: "756135" },
  { name: "London", id: "2643743" },
  { name: "New York", id: "5128581" },
]);

const weatherData = ref([]);

onMounted(async () => {
  weatherData.value = await weatherService.getWeatherForCities(cities.value);
});
</script>

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
