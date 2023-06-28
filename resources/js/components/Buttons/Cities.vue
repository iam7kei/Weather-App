<template>
    <button  class="btn" :class="{'btn-dark': city === current_city}" v-on:click="handleClick(city)">{{ city }}</button>
</template>

<script>

export default {
    name: 'CityButtons',
    props: ["city", "current_city"],
    methods: {
        handleClick(selectedCity) {
            let cities = this.$parent.cities;
            if(cities.includes(selectedCity) && selectedCity != this.$parent.city) this.$parent.city = selectedCity;
            this.$parent.fetchData();
        }
    }
}

</script>
