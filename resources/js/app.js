require('./bootstrap');

import { createApp } from 'vue';

const app = createApp({})

import Dashboard from './components/Dashboard.vue';
import Home from './components/Home.vue';
import Weather from './components/Weather/Weather.vue';
import CityButtons from './components/Buttons/Cities.vue';
import Venues from './components/Venues/Venues.vue';

app.component('dashboard-component', Dashboard)
app.component('weather-component', Weather)
app.component('city-buttons', CityButtons)
app.component('venues-component', Venues)
app.component('home-component', Home)

app.mount('#app')


