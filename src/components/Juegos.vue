<template>
    <div>
        <h3>Lista de Juegos</h3>
        <p>{{ games }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default{
    computed:{
        ...mapState(['games'])
    }
    
}
</script>