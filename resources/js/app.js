require('./bootstrap');

import { createApp } from 'vue';

const app = createApp({})

import CityButtons from './components/Buttons/Cities.vue';
import Dashboard from './components/Dashboard.vue';
import Home from './components/Home.vue';
import Weather from './components/Weather/Weather.vue';
import Venues from './components/Venues/Venues.vue';

app.component('city-buttons', CityButtons)
app.component('dashboard-component', Dashboard)
app.component('home-component', Home)
app.component('weather-component', Weather)
app.component('venues-component', Venues)

app.mount('#app')


