import JedService from "../Services/JedService.js";

//Private
let _jedService = new JedService()
function _draw()
let elem = document.getElementById('games')
let games = _jedService.Games
let template = '<ul>'
games.forEach(g => {
    template += g.Tamplate

})
elem.innerHTML = template + '</ul'


//Public
export default class JedController {
    constructor() {
        //NOTE Register all subscribers
        _jedService.addSubscriber("game", _draw)
        _jedService.getJed()
        //NOTE Retrieve data
    }
}