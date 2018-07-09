<template>
  <section>
    <form>
      <p>姓名<input type="text" v-model="name"></p>
      <p>电话号码<input type="tel" v-model="phone"></p>
      <p>富文本
        <textarea v-model="textareaText" placeholder="add multiple lines"></textarea>
      </p>
      <p>复选框
        <!-- 值绑定 -->
        <input type="checkbox" id="jack" value="第一个值" v-model="checkedNames" true-value="yes" false-value="no">
        <!-- 当选中时 vm.checkedNames === 'yes'; 当没有选中时 vm.checkedNames === 'no -->
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
      </p>
      <p>单选框
        <input type="radio" id="one" v-bind:value="a" v-model="picked">
        <!-- 当选中时 vm.picked === vm.a -->
        <label for="one">One</label>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
      </p>
      <p>下拉菜单
        <!-- ios的兼容性问题，推荐提供一个值为空的禁用选项 -->
        <select v-model="selected">
          <option disabled value="">请选择</option>
          <!-- 当选中时 typeof vm.selected ('object') vm.selected.number(123) -->
          <option v-bind:value="{ number: 123 }">A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <select v-model="selected">
          <option disabled value=" ">请选择</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </p>
      <!-- 修饰符 -->
      <p>
        <!-- 在“change”时而非“input”时更新 -->
        v-model.lazy<input v-model.lazy="msg">
        <!-- 自动将用户的输入值转为数值类型,因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串 -->
        <br/> v-model.number
        <input v-model.number="age" type="number">
        <!-- 如果要自动过滤用户输入的首尾空白字符,可以与v-model.lazy的输入值进行对比 -->
        <br/>v-model.trim
        <input v-model.trim="msg">
      </p>
      <p class="show ">
        <span>已经输入的表单信息：</span><br/>
        <span>姓名{{this.name}}</span><br/>
        <span>手机号{{this.phone}}</span><br/>
        <span>富文本信息{{this.textareaText}}</span><br/>
        <span>复选框已选中的项{{ checkedNames }}</span><br/>
        <span>单选框已选中的项{{ picked }}</span><br/>
        <span>下拉菜单选中的项{{selected}}</span><br/>
        <span>修饰符部分</span><br/>
        <span>(.lazy){{msg}}</span><br/>
        <span>(.number){{age}}</span><br/>
        <span>(.trim){{msg}}</span><br/>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  // 所有的值，如果是多个值就需要用数组存储
  data () {
    return {
      name: '',
      textareaText: '',
      phone: '',
      checkedNames: [],
      picked: '',
      selected: [],
      a: 'one',
      msg: '',
      age: ''
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
