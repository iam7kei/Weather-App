<template>
        <div class="row justify-content-center">
            <div class="d-flex justify-content-around btn-group flex-wrap mb-3" role="group">
                <city-buttons v-for="city in this.cities" :city="city" :current_city="this.city" :key="city"/>
            </div>
            <div class="col-md-9">
                <Venues/>
            </div>
            <div class="col-md-3">
                <Weather/>
            </div>
        </div>
</template>

<script>

import Home from './Home.vue';
import Venues from "./Venues/Venues.vue";
import Weather from "./Weather/Weather.vue";

export default {
    name: 'Dashboard',
    components: {
        Weather, Venues,
        Home
    }
}

</script>
