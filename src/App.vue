<template> 
    <div id="main__block">
      <TamirlanNavbarVue />
      <router-view></router-view>
    </div>
</template>

<script>
  import TamirlanNavbarVue from './components/TamirlanNavbar.vue';

  export default {
    components: {
      TamirlanNavbarVue,
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', 'sans-serif';
    overflow-x: hidden;
  }

  button {
    background-color: #fff;
    color: teal;
    border: 1px solid teal;
    padding: 10px 30px;
    font-family: 'Montserrat', 'sans-serif';
  }

  button:hover {
    transition: ease .5s;
    background-color: teal;
    color: #fff;
    border: 1px solid lightblue;
    box-shadow: 0 3px 4px 1px #000;    
  }
</style>