<template>
  <div id="app">
    <!-- <DealEvents></DealEvents> -->
    <LkFilters></LkFilters>
  </div>
</template>

<script>
// import Demo from "./components/Demo"
// import DealEvents from "./components/DealEvents"
import LkFilters from "./components/LkFilters"

export default {
  name: 'App',
  components: {
    // Demo,
    // DealEvents
    LkFilters
  }
}
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
