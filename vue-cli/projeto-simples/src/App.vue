<template>
  <div id="app"> {{ titulo }} 
    <button @click="titulo += '#$#'">Alterar</button>
  </div>
  
</template>

<script>
export default {
  data: function (){
    return {
      titulo: 'Testando Vue.js'
    }
  }
}
</script>

<style>
#app {
  background-color: chocolate;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 50px;
}
</style>