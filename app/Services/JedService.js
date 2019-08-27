import Value from "../Models/Game.js";

//Private
let _state = {
    game: []

}

//NOTE methods to run when a given property in state changes
let _subscribers = {
    game: []
}

function _setState(prop, data) {
    //NOTE add the data to the state
    _state[prop] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[prop].forEach(fn => fn());
}
let _jedApi = axios.create({
    baseURL: ""
})
//Public
export default class JedService {
    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(prop, fn) {
        _subscribers[prop].push(fn)
    }
    get Game() {
        return _state.game
    }
    getJed() {
        _jedApi.get()
            .then(res => {
                let gam = new Game(res.data)
                _setState("game", gam)
        }
    
}
}

