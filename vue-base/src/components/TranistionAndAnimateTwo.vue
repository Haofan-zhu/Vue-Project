<template>
  <div>
    <button @click="show = !show">切换</button>
    <p></p>
    <transition name="bounce">
      <img v-if="show"
           :src="pic">
    </transition>
  </div>
</template>

<script>
import pic from "../assets/1.jpg"
import animate from "animate.css"

export default {
  data () {
    return {
      pic: pic,
      show: false
    }
  }
}
</script>

<style scoped>
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

.bounce-enter-active {
  animation: bounce 0.5s;
}
.bounce-leave-active {
  animation: bounceClose 0.5s;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(0.25);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounceClose {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
