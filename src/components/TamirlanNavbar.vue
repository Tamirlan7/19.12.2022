<template>
    <div id="navbar">
        <div><h3>Tamirlan</h3></div>
        <div class="navbar__btns">
            <button @click="$router.push('/tamirlan')">Информация</button>
            <button @click="$router.push('/')">Товары</button>
            <button @click="$router.push('/basket')">Корзина</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
 #navbar {
    height: 50px;
    background-color: lightblue;
    box-shadow: -3px 3px 4px 1px #000;
    display: flex;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
 }

 h3 {
    color: #fff;
 }

 .navbar__btns > button:hover {
    box-shadow: none;
 }

 .navbar__btns > button:not(:last-child) {
    margin-right: 10px;
 }
</style>