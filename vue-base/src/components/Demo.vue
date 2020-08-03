<template>
  <div id="app">
    <fieldset>
      <legend>指令小练习</legend>
      <div>
        <span>姓名:</span>
        <input type="text"
               placeholder="请输入姓名"
               v-model="newPerson.name">
      </div>
      <div>
        <span>性别:</span>
        <select v-model="newPerson.sex">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <div>
        <span>年龄:</span>
        <input type="text"
               placeholder="请输入年龄"
               v-model="newPerson.age">
      </div>
      <div>
        <span>手机:</span>
        <input type="text"
               placeholder="请输入手机"
               v-model="newPerson.phone">
      </div>
      <button @click="createNewPerson">创建新用户</button>
    </fieldset>
    <table>
      <thead>
        <tr>
          <td>姓名</td>
          <td>性别</td>
          <td>年龄</td>
          <td>手机</td>
          <td>删除</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p,index in persons">
          <td>{{p.name}}</td>
          <td>{{p.sex}}</td>
          <td>{{p.age}}</td>
          <td>{{p.phone}}</td>
          <td><button @click="delPerson(index)">删除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      persons: [
        { name: "张三", sex: "男", age: 17, phone: "1777777777" },
        { name: "赵五", sex: "男", age: 12, phone: "2424224242" },
        { name: "李九", sex: "女", age: 10, phone: "23232422424" },
        { name: "韩信", sex: "男", age: 19, phone: "242424242" }
      ],
      newPerson: { name: '', sex: "男", age: 0, phone: "" }
    }
  },
  methods: {
    createNewPerson () {
      let { name, age, sex, phone } = this.newPerson;
      if (name === '') {
        alert("姓名不能为空")
      } else {
        if (age <= 0) {
          alert("年龄不能为0")
        } else {
          if (phone.lenght < 13) {
            console.log("手机号码不能为0");
          } else {
            this.persons.unshift(this.newPerson);
            this.newPerson = { name: '', sex: "男", age: 0, phone: "" }
          }
        }
      }
    },
    delPerson (index) {
      var r = confirm("您确定要删除吗")
      if (r) {
        this.persons.splice(index, 1);
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>
fieldset,
table {
  width: 500px;
  margin: auto;
}
input {
  height: 30px;
}
td {
  width: 125px;
  height: 50px;
  background-color: aqua;
}
</style>
