import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        // Pour qu'on puisse accéder au parent AbstractView
        super(params)
        
        this.setTitle('Dogs')
    }

    async getHtml() {

        async function getData(url) {
            const response = await fetch(url)
            return response.json()
        }

        // URL de l'API avec l'API_KEY
        const data = await getData('https://api.thedogapi.com/v1/images/search?limit=30&api_key=live_oe4mlfzNFs8TSiGzOWWgLP94YsWAQQ1VAcEGib6bFGchmMcyf3MQ2DgGMal02p5r');

        let listDogs = "<article>"
        for(let i in data) {
            if(data[i]['breeds'][0]) {
                listDogs +=
                "<ul>"+
                    "<li><img src="+data[i]['url']+"></li>"+
                    "<li><a href='/dog-view/"+data[i]['breeds'][0]['id']+"' data-link><h2>"+data[i]['breeds'][0]['name']+"</h2></a></li>"+
                "</ul>"
            }
        }
        listDogs +="</article>"

        // Retourne le contenu de la page HTML
        return `
            <h1>Dogs</h1>
        `+listDogs
    }
}