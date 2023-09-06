import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        // Pour qu'on puisse accéder au parent AbstractView
        super(params)
        
        this.setTitle('Events')
    }

    // Contenu de la page HTML
    async getHtml() {
        return `
            <h1>Events</h1>

            <h2>Salon National des Animaux de Compagnie</h2>   
            
            <p>Olympic Stadium<br>
            November 4 – 5, 2023<br>
            Montréal, Québec</p>

            <p>If you’re passionate about animals, you’re going to love the Salon National des Animaux de Compagnie! Featuring cats, dogs and lots of exotic species too, SNAC’s wide variety of animals and one-of-a-kind activities set it apart from other pet expos. Enjoy outstanding shows and competitions you can find only in Quebec. La Flying Team, Dogs show ! at show and tips on taking care of your furry and not-so-furry friends, SNAC is the event of the year for the entire family!</p>

            <h2>Bark in the Park TO</h2>

            <p>Woodbine Park<br>
            September 1 to 4, 2023<br>
            Toronto, Ontario</p>

            <p>Bark in the Park TO is a four-day event celebrating all things dog (and pet). Huge marketplace of dog product vendors will be on site along with activities you can participate in with your dog: an obstacle course, lure course, doggy play zone, cool off splash pad, specialized photo ops and best dog trick competition. </p>

            <h2>Bark-toberfest</h2>

            <p>Woodbine Park<br>
            September 24, 2023, 2023<br>
            Grand Bend, Ontario</p>

            <p>Join people and pups at the Pinery Market during Bark-toberfest for craft beer, cider, wine and shopping at local vendors, eating at food trucks, and enjoying music – all with your dog. Vendors 9 am to 4 pm. Licensed serving area open 10 am to 5 pm.</p>

            <h2>Ottawa Pet Expo</h2>

            <p>EY Centre<br>
            October 14 & 15, 2023<br>
            Ottawa, Ontario</p>

            <p>Ottawa’s largest pet-friendly event is the Ottawa Pet Expo with over 200 exhibitors representing all types of pets. TICA cat show, fly ball competitions and expert vets and breeders onsite.</p>
            
            <h2>Howloween Pooch Party</h2>

            <p>Gaukel Street<br>
            October 29, 2023<br>
            Kitchener, Ontario</p>

            <p>The third annual Howloween Pooch Party allowing dogs to interact, but not on extendable leashes, please. 12 to 5 pm.</p>
        `
    }
}