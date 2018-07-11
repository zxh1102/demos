function greeter(person) {
  return 'Hello, ' + person
}

let user = 'Jane User'

document.body.innerHTML = greeter(user)

// tsc greeter.ts
// tsc 文件名 编译
