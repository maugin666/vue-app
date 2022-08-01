<template>
  <div id="app">
    <h1>TV Shows</h1>
    <SearchBar @search="setSearch"/>
    <ShowsList
      v-bind:shows="shows"
    />
  </div>
</template>

<script>
import ShowsList from './components/ShowsList.vue';
import SearchBar from './components/SearchBar.vue';
import getShows from '../api/getShows';

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
    getShows,
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
