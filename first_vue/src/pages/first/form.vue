<template>
  <section>
    <form>
      <p>姓名<input type="text" v-model="name"></p>
      <p>电话号码<input type="tel" v-model="phone"></p>
      <p>富文本
        <textarea v-model="textareaText" placeholder="add multiple lines"></textarea>
      </p>
      <p>复选框
        <input type="checkbox" id="jack" value="第一个值" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
      </p>
      <p>单选框
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
      </p>
      <p class="show">
        <span>已经输入的表单信息：</span><br/>
        <span>姓名{{this.name}}</span><br/>
        <span>手机号{{this.phone}}</span><br/>
        <span>富文本信息{{this.textareaText}}</span><br/>
        <span>复选框已选中的项{{ checkedNames }}</span><br/>
        <span>单选框已选中的项{{ picked }}</span><br>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      textareaText: '',
      phone: '',
      checkedNames: [],
      picked: ''
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  vertical-align: top;
}
form {
  border: 10px solid brown;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}
.show {
  border: 3px solid pink;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
}
</style>
