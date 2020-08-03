<template>
  <div>
    <button @click="clickBtn('12',$event)">23</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    clickBtn (args, event) {
      console.log(args, event);
    }
  },
  components: {

  }
}
</script>

<style scoped>
</style>
