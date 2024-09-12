import { createStore } from "vuex";
import juegos from "../../juegos.json"
export default createStore(
    {
        state:{
            games: juegos
        },
        actions:{

        }
    }
)