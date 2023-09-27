<template>
  <div id="app">
  <button @click="count++">{{ count }}</button>
  <button @click="function1">test</button>
</div>
</template>

<script>
import {  ref,onMounted  } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const count = ref(0)

    const function1 = function(){
console.log('hai')
    }

    onMounted(()=>{
      function1()
    })
    // expose to template and other options API hooks
    return {
      count,
      function1,
  
    }
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
