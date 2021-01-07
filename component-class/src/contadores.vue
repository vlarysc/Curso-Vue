<template>
    <div class="contadores">
        <app-contador v-for="c in 5" :key="c" />
    </div>
</template>

<script>
import contador from './contador.vue'
export default {
  components: { 'app-contador': contador },
    
}
</script>

<style>

</style>