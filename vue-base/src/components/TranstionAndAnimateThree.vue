
<template>
  <div>
    <button @click="show = !show">切换</button>
    <p></p>
    <transition enter-active-class="animated roolIn"
                leave-active-class="animated roolOut"
      <img v-if="show"
           :src="pic">
    </transition>
  </div>
</template>

<script>
import pic from "../assets/1.jpg"

// 导入了animate.css
import animate from "animate.css"

export default {
  data () {
    return {
      pic: pic,
      show: false,
    }
  },
}
</script>

<style scoped>
</style>
