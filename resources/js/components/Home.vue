<template>
    <div class="row justify-content-center">
        <div
            class="d-flex justify-content-around btn-group flex-wrap mb-3"
            role="group"
        >
            <city-buttons
                v-for="city in this.cities"
                :city="city"
                :current_city="this.city"
                :key="city"
            />
        </div>
        <div class="col-md-9">
            <Venues />
        </div>
        <div class="col-md-3">
            <Weather />
        </div>
    </div>
</template>

<script>
import CityButtons from './Buttons/Cities.vue'
import Weather from './Weather/Weather.vue'
import Venues from './Venues/Venues.vue'
export default {
    name: 'Home',
    components: {
        CityButtons,
        Venues,
        Weather
    },
    data () {
        return {
            city: 'Tokyo',
            cities: ['Tokyo', 'Yokohama', 'Kyoto', 'Osaka', 'Sapporo', 'Nagoya']
        }
    }
}
</script>
