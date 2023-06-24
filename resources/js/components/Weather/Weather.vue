<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="d-flex justify-content-around btn-group flex-wrap mb-3" role="group">
                    <weather-buttons v-for="city in this.cities" :city="city" :key="city"/>
                </div>

                <div class="card">
                    <div class="card-body" v-cloak="renderedWeatherData">
                        <div class="card-title mb-4">
                            <h2>{{ city }}</h2>
                        </div>
                        <div v-for="data in renderedWeatherData" class="card mb-4">
                            <div class="card-body">


                                <div class="d-flex justify-content-between">
                                   <div class="temp-details">
                                       <h3>{{ data.hour }}:00</h3>
                                       <p class="my-1">Temp: {{ data.main.temp}}°c</p>
                                       <p class="my-1">Temp: (Min): {{ data.main.temp_min}}°c</p>
                                       <p class="my-1">Temp: (Max): {{ data.main.temp_max}}°c</p>
                                   </div>
                                    <div>
                                        <img :src="data.img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import WeatherButtons from './Buttons.vue';
    export default {
        components: {
            WeatherButtons
        },
        data() {
            return {
                city: "Tokyo",
                cities: [ "Tokyo", "Yokohama", "Kyoto", "Osaka", "Sapporo", "Nagoya"],
                coordinatesUrl: "https://api.openweathermap.org/geo/1.0/direct?",
                forecastUrl: "https://api.openweathermap.org/data/2.5/forecast?",
                appid: "12693bcdf2f6aea4d586bf28fa32beb8",
                currentDate: new Date(),
                weatherData: {},
                renderedWeatherData: {},
            }
        },
        mounted() {
            this.fetchData();
        },
        methods: {
            fetchCoordinates() {
                return fetch(`${this.coordinatesUrl}q=${this.city}&appid=${this.appid}`)
                    .then(res => res.json())
                    .then(data => {
                        return {lat :data[0].lat, lon: data[0].lon};
                    })
                    .catch(err => console.log(err));
            },
            fetchData() {
                    this.fetchCoordinates().then((data) => {
                        const LAT = data.lat;
                        const LON = data.lon;
                        const API_KEY = this.appid;
                        fetch(`${this.forecastUrl}lat=${LAT}&lon=${LON}&units=metric&cnt=12&appid=${API_KEY}`)
                            .then(res => res.json())
                            .then(data => {
                                this.weatherData = data.list;
                                for(let i = 0; i < this.weatherData.length;i++){
                                    this.weatherData[i].hour = new Date(this.weatherData[i].dt * 1000).getHours();
                                    this.weatherData[i].img = ` https://openweathermap.org/img/wn/${this.weatherData[i].weather[0].icon}@4x.png`;
                                }
                                this.renderWeatherData();
                            })
                            .catch(err => console.log(err));
                    });

            },
            renderWeatherData() {
                let weatherData = this.weatherData;
                this.renderedWeatherData = [];
                weatherData.forEach((row)=>{
                    let date = new Date(row.dt * 1000);
                    if (date.getDate() === this.currentDate.getDate()){
                        this.renderedWeatherData.push(row);
                    }
                })
            }

        }
    }
</script>
