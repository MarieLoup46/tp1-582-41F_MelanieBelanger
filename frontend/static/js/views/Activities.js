import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        // Pour qu'on puisse accéder au parent AbstractView
        super(params)
        
        this.setTitle('Services')
    }

    // Contenu de la page HTML
    async getHtml() {
        return `
            <h1>Activities</h1>

            <h2>Mount Royal Park</h2>

            <p>Mount Royal Park in Montreal is dog-friendly. The park features a popular trail that's a perfect nature escape from city life. The trail stretches for miles around the area, giving you and your pooch plenty to explore. Dogs must be on leash at all times, and owners must pick up after their pet.</p>

            <p>Call (514) 843-8240 for more information.</p>

            <h2>Parc Sir-Wilfrid-Laurier Dog Park</h2>

            <p>Parc Sir-Wilfrid-Laurier Dog Park is located within Sir Wilfrid Laurier Parc in Montreal, QC. This fenced-in area is perfect for dogs to run and play. There's also a drinking fountain for fresh water.</p>

            <p>Website: <a href="https://montreal.ca/lieux/parc-chiens-du-parc-sir-wilfrid-laurier" data-link>https://montreal.ca/lieux/parc-chiens-du-parc-sir-wilfrid-laurier</a></p>

            <h2>Parc de la Promenade-Bellerive</h2>

            <p>Parc de la Promenade-Bellerive in Montreal, QC is pet-friendly. This is the perfect place for you and your pup to escape city life. There is a path that you can walk along the river, as well as a number of small beaches. In the summer, it is host to social activities and outdoor shows. Dogs must be leashed while enjoying this Montreal spot. Dog owners are reminded to clean up any mess that is left behind.</p>

            <p>Website: <a href="https://www.bonjourquebec.com/en-us/listing/to-see-and-do/parc-de-la-promenade-bellerive/0q3y" data-link>https://www.bonjourquebec.com/en-us/listing/to-see-and-do/parc-de-la-promenade-bellerive/0q3y</a></p>

            <h2>La Fontaine Park</h2>

            <p>La Fontaine Park is dog-friendly. This park is beautiful during all seasons, offering respite from the urban bustle with charming lanscape, plants, facilities and recreational opportunities. Leashed dogs are welcome to join you around the park as you explore the pretty areas via the trails. The park is open every day of the week from 6am until 12am.</p>

            <p>Website: <a href="https://espacelafontaine.com/" data-link>https://espacelafontaine.com/</a></p>

        `
    }
}