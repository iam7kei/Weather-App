<template>
    <div v-for="data in renderedVenueData" class="card mb-4">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <div class="venue-details">
                    <h3>{{data[0].name}}</h3>
                    <p>Category: {{ data[0].category_name}}</p>
                    <p>Address: {{data[0].formatted_address }}</p>
                    <a class="icon-link" :href="data[0].formatted_url" target="_blank"><button class="btn btn-link">Open Map</button></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "VenueItem",
    props: ["renderedVenueData"],
    data() {
        return {}
    },
    mounted() {

    },
    methods: {
    }
}
</script>
