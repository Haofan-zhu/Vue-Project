<template>
  <div>
    <button @click="show = !show">切换</button>
    <transition name="fatd">
      <div v-if="show"
           class="box">张三</div>
    </transition>
  </div>

</template>

<script>
export default {
  data () {
    return {
      show: false,
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
div {
  margin: auto;
}
.box {
  width: 200px;
  height: 200px;
  background-color: aqua;
  color: black;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fatd-enter,
.fatd-levae-to {
  opacity: 0;
  transform: translateX(200px);
}
.fatd-enter-active,
.fatd-leave-active {
  transition: all 2s ease-in-out;
}
</style>
