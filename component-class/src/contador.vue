<template>
    <div class="contador">
        <h1 class="h1">{{ contador }}</h1>
        <button class="btn" @click="aumentar">+</button>
        <button class="btn" @click="diminuir">-</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            contador: 0
        }
    },
    methods: {
        aumentar() {
            this.contador++
        },
        diminuir() {
            this.contador--
        }
    }
}
</script>

<style>
.contador {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: gray;
}

.btn {
    width: 50px;    
    height: 50px;
    font-size: 40px;
    background-color: brown;
    color: white;
    border-radius: 20px;
    margin-left: 15px;
    outline: none;
}

.h1{
    display: flex;
    font-size: 50px;
    margin-top: 0px;
    background-color: gray;
}

</style>