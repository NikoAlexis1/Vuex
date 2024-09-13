<template>
    <div>
        <h3>Lista de Juegos</h3>
        <p>{{ $store.state.games.codigo }}</p>
        <table>
            <thead>
                <tr>
                    <th v-for="(game, i) in games[0]">{{ i }}</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(game, i) in games">
                    <td>{{ game.codigo }}</td>
                    <td>{{ game.nombre }}</td>
                    <td>{{ game.stock }}</td>
                    <td>${{ game.precio }}</td>
                    <td>{{ game.color }}</td>
                    <td>
                        <button @click="accionIncrementar(game.codigo)">+</button>
                        <button @click="accionDisminuir(game.codigo)">-</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default{
    computed:{
        ...mapState(['games']),
    },
    methods:{
        ...mapActions(['accionIncrementar', 'accionDisminuir'])
        
    },
    
}
</script>