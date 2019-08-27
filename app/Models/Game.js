export default class Game {
    constructor(data) {
        this.title = data.title
        this.category = data.category
        this.question = data.question
        this.answer = data.answer
        this.gameImage = data.gameImage
    }

    get Template() {
        return `
        <div class="card">
        <div class="card-img-top" src="${this.gameImage}" alt="Jed Card Game">
            <div class="card-body">
                <h43 class="card-title">${this.title}</h3>
                <h4 class="card-category">${this.category}</h4>
                <p class="card-text">${this.question}</p>
            </div>
        </div>
    </div>
        `

    }
}