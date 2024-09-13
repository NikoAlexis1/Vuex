import { createStore } from "vuex";
import juegos from "../../juegos.json"

const juegosModificados = juegos.map((juego) => ({...juego, stock: parseInt(juego.stock)}));
export default createStore({
    state: {
        games: juegosModificados
    },
    mutations: {
        incrementarStock(state, { codigo, amount }) {
            const juego = state.games.find(game => game.codigo === codigo);
            if (juego) {
                juego.stock += amount;
            }
        },
        disminuir(state, { codigo, amount }) {
            const juego = state.games.find(game => game.codigo === codigo);
            if (juego && juego.stock > 0) {
                juego.stock -= amount;
            }
        }
    },
    actions: {
        accionIncrementar({ commit }, codigo) {
            commit("incrementarStock", { codigo, amount: 1 });
        },
        accionDisminuir({ commit }, codigo) {
            commit("disminuir", { codigo, amount: 1 });
        }
    }
});