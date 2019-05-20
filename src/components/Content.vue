<template>
  <div>
    <h3>{{ msg }}</h3>
    <span id="error-message"></span>
    <div class="weather-card">
      <template v-if="isDoneLoading">
        <h4>{{weather_data.name}}, {{weather_data.sys.country}}</h4>
        <div>
          <img class="weather-icon" :src="url" alt="weather icon">
        </div>
        <h3 class="temperature">{{Math.round(weather_data.main.temp)}}&#8451;</h3>
        <p>{{weather_data.weather[0].description}}</p>
      </template>
    </div>
  </div>
</template>

<script>
import { getWeatherData } from '../requests.js';
export default {
  name: 'Content',
  props: {
    msg: String
  },
  mounted() {
    this.getLocation();
  },
  computed: {
    url() {
      if (this.isDoneLoading) {
        return `http://openweathermap.org/img/w/${
          this.weather_data.weather[0].icon
        }.png`;
      }
      return '';
    }
  },

  data() {
    return {
      isDoneLoading: false,
      weather_data: {}
    };
  },
  methods: {
    getLocation() {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.loadData,
          this.locationError,
          options
        );
      }
    },
    loadData(pos) {
      getWeatherData(pos)
        .then(data => {
          this.isDoneLoading = true;
          this.weather_data = data;
        })
        .catch(err => {
          console.error(err);
        });
    },

    locationError(err) {
      document.getElementById('error-message').textContent = err.message;
      console.error(`error code -${err.code}: ${err.message}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather-card {
  width: 90%;
  margin: auto;
  margin-top: 10px;
  height: 250px;
  box-shadow: 0px 0px 8px #cacaca;
  border-radius: 10px;
  text-align: center;
  padding: 2.5rem;
}
.weather-icon {
  padding: 1.3rem;
}
.temperature {
  padding: 0.5rem;
}
#error-message {
  color: rgb(255, 15, 15);
}
@media screen and (min-width: 768px) {
  .weather-card {
    width: 60%;
  }
}
</style>
