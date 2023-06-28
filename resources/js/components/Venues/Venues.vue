<template>
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
    <div class="card">
        <div class="card-body">
            <div class="card-title mb-4">
                <venue-item :renderedVenueData="renderedVenueData"></venue-item>
            </div>
        </div>
    </div>
</template>

<script>
import CityButtons from '../Buttons/Cities.vue'
import VenueItem from './VenueItem.vue'
export default {
    name: 'Venues',
    components: {
        CityButtons,
        VenueItem
    },
    data () {
        return {
            city: 'Tokyo',
            cities: [
                'Tokyo',
                'Yokohama',
                'Kyoto',
                'Osaka',
                'Sapporo',
                'Nagoya'
            ],
            openWeatherMapApiUrl:
                'https://api.openweathermap.org/geo/1.0/direct?',
            openWeatherMapApiAppId: '12693bcdf2f6aea4d586bf28fa32beb8',
            fourSquareApiUrl: 'https://api.foursquare.com/v3/places/search?',
            fourSquareAppId: 'fsq3Xj61+W5HvR7IT3/ZKjc5WvrNO7zxCHG7CjDnOKNWUok=',
            currentDate: new Date(),
            venueData: [],
            renderedVenueData: []
        }
    },
    mounted () {
        this.fetchData()
    },
    methods: {
        fetchCoordinates () {
            return fetch(
                `${this.openWeatherMapApiUrl}q=${this.city}&appid=${this.openWeatherMapApiAppId}&raduis=10000`
            )
                .then(res => res.json())
                .then(data => {
                    return { lat: data[0].lat, lon: data[0].lon }
                })
                .catch(err => console.log(err))
        },
        fetchData () {
            this.fetchCoordinates().then(data => {
                const LAT = data.lat
                const LON = data.lon
                const API_KEY = this.fourSquareAppId
                fetch(`${this.fourSquareApiUrl}ll=${LAT}%2C${LON}&radius=100`, {
                    headers: new Headers({ Authorization: API_KEY })
                })
                    .then(res => res.json())
                    .then(data => {
                        this.venueData = data.results
                        this.filterData()
                    })
                    .catch(err => console.log(err))
            })
        },
        filterData () {
            let venueData = this.venueData
            this.renderedVenueData = []
            venueData.forEach(row => {
                const address = row.location.formatted_address
                const address_split = address.split(' ')
                const address_joined = address_split.join('+')
                const coordinates = `${row.geocodes.main.latitude},${row.geocodes.main.longitude}`
                const formatted_url = `https://www.google.com/maps/place/${address_joined}/@${coordinates}`

                this.renderedVenueData.push([
                    {
                        id: row.fsq_id,
                        name: row.name,
                        category_name: row.categories[0].name,
                        formatted_address: row.location.formatted_address,
                        distance: row.distance,
                        formatted_url: formatted_url
                    }
                ])
            })
            console.log(this.renderedVenueData)
        }
    }
}
</script>
