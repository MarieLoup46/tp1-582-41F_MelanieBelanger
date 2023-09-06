import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Viewing Dog')
    }

    async getHtml() {
        // L'id qui est envoyé est un string, on doit le convertir en integer.
        const numero = Number(this.params.id)

        async function getData(url) {
            const response = await fetch(url)
            return response.json()
        }

        // Lien de l'API avec le numéro de l'id recherché
        const data = await getData('https://api.thedogapi.com/v1/breeds/'+numero)

        return `
            <h1>Breed name: `+data.name+`</h1>
            <p><strong>Weight (metric): </strong>`+data.weight.metric+`<br>
            <strong>Height (metric): </strong>`+data.height.metric+`<br>
            <strong>Breed group: </strong>`+data.breed_group+`<br>
            <strong>Life span: </strong>`+data.life_span+`<br>
            <strong>Temperament: </strong>`+data.temperament+`</p>
        `
    }
}