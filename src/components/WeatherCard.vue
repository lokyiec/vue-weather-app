<template>
  <div
    @click="handleClick"
    class="flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded"
  >
    <div>
      <div class="font-semibold text-lg">{{ weather.city.name }}</div>
      <div class="text-sm">{{ weather.temperature.value }} °C</div>
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

<script setup lang="ts">
const props = defineProps<{
  weather: {
    city: { name: string; id: string };
    temperature: { value: number; description: string; icon: string };
  };
}>();

const handleClick = () => {
  const url = `https://openweathermap.org/find?q=${props.weather.city.name}`;
  window.open(url, '_blank');
};
</script>
