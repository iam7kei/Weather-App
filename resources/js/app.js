require('./bootstrap');

import { createApp } from 'vue';

const app = createApp({})

import Weather from './components/Weather/Weather.vue';

app.component('weather-component', Weather)

app.mount('#app')


