<template>
  <section>
    <!-- click事件 -->
    <div class="demo demo5">
      <!-- 阻止单击事件继续传播 组织组件冒泡 -->
      <a v-on:click.stop="doThis">@click.stop</a>

      <!-- 提交事件不再重载页面 -->
      <form v-on:submit.prevent="onSubmit">@submit.preven</form>

      <!-- 修饰符可以串联 -->
      <!-- <a v-on:click.stop.prevent="doThat">@click.stop.prevent</a> -->

      <!-- 只有修饰符 -->
      <!-- <form v-on:submit.prevent>@submit.prevent</form> -->

      <!-- 添加事件监听器时使用事件捕获模式 -->
      <!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
      <!-- <div v-on:click.capture="doThis">@click.capture="doThis"</div> -->

      <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
      <!-- 即事件不是从内部元素触发的 -->
      <!-- <div v-on:click.self="doThat">...</div> -->
    </div>

    <div class="demo demo4">
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input v-model="newTodoText" id="new-todo" placeholder="todo list">
        <button>添加</button>
      </form>
      <!-- 实现了模板的循环 -->
      <ul>
        <todo-item v-for="(todo, index) in todos" :key="todo.id" :title="todo.title" @remove="todos.splice(index, 1)"></todo-item>
      </ul>
    </div>
    <!-- 显示过滤/排序结果
    1.可以创建返回过滤或排序数组的计算属性
      <li v-for="n in evenNumbers">{{ n }}</li>
      data: {
        numbers: [ 1, 2, 3, 4, 5 ]
      },
      computed: {
        evenNumbers: function () {
          return this.numbers.filter(function (number) {
            return number % 2 === 0
          })
        }
      }
    2.在计算属性不适用的情况下
      <li v-for="n in even(numbers)">{{ n }}</li>
      data: {
        numbers: [ 1, 2, 3, 4, 5 ]
      },
      methods: {
        even: function (numbers) {
          return numbers.filter(function (number) {
            return number % 2 === 0
          })
        }
      }
    -->
    <ul class="demo demo1">
      <li v-for="(n,index) in even(number)" :key="'demo1'+index">{{n}}</li>
    </ul>
    <!-- v-for 也可以取整数。 -->
    <ul class="demo demo2">
      <li v-for="(n,index) in 10" :key="'demo2'+index" v-if="isSingular(n)">{{n}}</li>
    </ul>
    <!-- v-for with v-if -->
    <ul class="demo demo3">
      <li v-for="(todo, index) in todoss" :key="'todo'+index" v-if="!todo.isComplet">{{todo.count}}</li>
    </ul>
  </section>
</template>

<script>
import todoItem from '../../components/todoItem'
export default {
  components: { 'todo-item': todoItem },
  data () {
    return {
      number: [1, 2, 3, 4, 5],
      todoss: [
        { isComplet: false, count: 1 },
        { isComplet: false, count: 2 },
        { isComplet: false, count: 3 },
        { isComplet: false, count: 4 },
        { isComplet: false, count: 5 },
        { isComplet: true, count: 6 },
        { isComplet: false, count: 7 }
      ],
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'title1'
        },
        {
          id: 2,
          title: 'title2'
        },
        {
          id: 3,
          title: 'title3'
        }
      ],
      nextTodoId: 4,
      num: 1
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return (number % 2 === 0)
      })
    },
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    },
    doThis: function () {
      console.log('阻止单击事件继续传播')
    },
    onSubmit: function () { }
  },
  computed: {
    isSingular: function (num) {
      return (num) => !(num % 2 === 0)
      // 箭头函数
      // (参数，参数) => {语句1;语句2}
      // 不需要参数或者多个参数的时候用“()”代替
      // 参数 => 返回的结果（一句）
      //
      // var f = v => v;
      // 上面的箭头函数等同于：
      // var f = function(v) {
      // return v;
      // };
      // 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
      // var f = () => 5;
      //  等同于
      // var f = function () { return 5 };
      // var sum = (num1, num2) => num1 + num2;
      //  等同于
      // var sum = function(num1, num2) {
      // return num1 + num2;
      // };
      //
      // 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号
      // 总之，箭头函数是返回一个（{对象}）或者{值}
    }
  }
}
</script>

<style scoped lang="scss">
$color1: #333;
$color2: red;
.demo {
  margin: 50px;
  border: 10px solid brown;
  border-radius: 10px;
  padding: 20px;
}
li {
  font-size: 30px;
  line-height: 2;
  border-radius: 12px;
  margin: 20px;
  text-align: center;
}
.demo1 li {
  color: $color1;
  border: 1px solid $color1;
}
.demo2 li {
  color: $color2;
  border: 1px solid $color2;
}
.divider {
  color: #fff;
  background-color: #333;
}
</style>
