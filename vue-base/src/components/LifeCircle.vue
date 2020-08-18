<template>
  <div>
    <button @click="()=>{count++}"> 当前的数据为： {{count}}</button>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    console.log('beforCreate 开始');
  },
  created () {
    console.log('create 开始');
  },
  beforeMount () {
    console.log('beforeMount');
  },
  mounted () {
    console.log('mounted');
  },
  beforeUpdate () {
    console.log('beforeUpdate');
  },
  updated () {
    console.log('updated');
  },
  beforeDestroy () {
    console.log('beforeDestroy');
  },
  destroyed () {
    console.log('destroyed');
  },
  data () {
    return {
      count: 0,
    }
  },
}
</script>

<style scoped>
</style>
