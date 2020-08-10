<template>
  <div id="app">
    <!-- <DealEvents></DealEvents> -->
    <!-- <LkFilters></LkFilters> -->
    <!-- <TransitionAndAnimate></TransitionAndAnimate> -->
    <!-- <TranistionAndAnimateTwo></TranistionAndAnimateTwo> -->
    <TranstionAndAnimateThree></TranstionAndAnimateThree>
  </div>
</template>

<script>
// import Demo from "./components/Demo"
// import DealEvents from "./components/DealEvents"
// import LkFilters from "./components/LkFilters"
// import TransitionAndAnimate from "./components/TransitionAndAnimate"

import TranistionAndAnimateTwo from "./components/TranistionAndAnimateTwo"
import TranstionAndAnimateThree from "./components/TranstionAndAnimateThree"

export default {
  name: 'App',
  components: {
    // Demo,
    // DealEvents
    // LkFilters,
    // TransitionAndAnimate,
    // TranistionAndAnimateTwo,
    TranstionAndAnimateThree
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
