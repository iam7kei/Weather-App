<template>
        <button  class="btn" :class="{'btn-dark': city === this.$parent.city}" v-on:click="handleClick(city)">{{ city }}</button>
</template>

<script>

export default {
    name: 'WeatherButtons',
    props: ["city"],
    methods: {
        handleClick(selectedCity) {
            let cities = this.$parent.cities;
            if(cities.includes(selectedCity) && selectedCity != this.$parent.city) this.$parent.city = selectedCity;
            this.$parent.fetchData();
        }
    }
}

</script>
