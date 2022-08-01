<template>
  <div id="app">
    <h1>TV Shows</h1>
    <hr />
    <SearchBar @search="setSearch"/>
    <ShowsList
      v-bind:shows="shows"
    />
  </div>
</template>

<script>
import ShowsList from './components/ShowsList.vue';
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App',
  components: {
    ShowsList,
    SearchBar,
  },
  data() {
    return {
      shows: [],
    };
  },
  methods: {
    getShows(showName) {
      fetch(`https://api.tvmaze.com/search/shows?q=${showName}`)
        .then((response) => response.json())
        .then((json) => {
          const improvedJson = json;
          if (improvedJson.length > 12) improvedJson.length = 12;
          this.shows = improvedJson;
        });
    },
    setSearch(searchValue) {
      if (searchValue) {
        this.getShows(searchValue);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
