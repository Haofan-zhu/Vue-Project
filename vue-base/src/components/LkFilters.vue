<template>
  <div>
    <h3>格式化人民币</h3>
    <p>{{ money | moneyFormat }}</p>

    <!-- 格式化日期 -->
    <h1>格式化日期</h1>
    <p>{{time | timeFormat}}</p>
    <p>{{time | timeFormat('YYYY-MM-DD')}}</p>
    <p>{{time | timeFormat('HH:mm:ss')}}</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      money: 12345,
      time: new Date(),
    }
  }, filters: {
    moneyFormat (val) {
      return '￥' + Number(val).toFixed(2);
    },
    timeFormat (val, format = "YYYY-MM-DD HH:mm:ss") {
      return moment(val).format(format)
    }
  },
  mounted () {
    setInterval(() => {
      this.time = new Date()
    }, 1000)
  },
}
</script>

<style scoped>
</style>
