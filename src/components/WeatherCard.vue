<script setup lang="ts">
import { temperatureConverter, Temperature } from "../utils/temperature-converter";

const props = defineProps<{
  weather: {
    city: { name: string; id: string };
    temperature: {
      value: number;
      description: string;
      icon: string;
      unit: string;
    };
  };
}>();

const handleClick = () => {
  const url = `https://openweathermap.org/city/${props.weather.city.id}`;
  window.open(url, "_blank");
};
</script>

<template>
  <div
    @click="handleClick"
    class="flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded"
  >
    <div>
      <div class="font-semibold text-lg">{{ weather.city.name }}</div>
      <div class="text-sm">
        {{
          temperatureConverter(
            weather.temperature.value,
            Temperature.Kelvin,
            Temperature.Celsius,
          )
        }}
      </div>
    </div>
    <div class="flex items-center gap-2">
      <span class="capitalize">{{ weather.temperature.description }}</span>
      <img
        :src="weather.temperature.icon"
        :alt="weather.temperature.description"
        class="w-8 h-8"
      />
    </div>
  </div>
</template>
