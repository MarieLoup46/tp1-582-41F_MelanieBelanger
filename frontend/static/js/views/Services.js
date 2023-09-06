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
            <h1>Services</h1>

            <h2>Pet Sitters & Dog Walkers in Montreal</h2>

            <h3>Leash Up Dog Walking</h3>

            <p>I provide private walks on weekdays for the dogs of downtown Montreal and Westmount. Put your mind at ease knowing your dog is not home alone all day.</p>
            
            <p>Call 438-777-6054 or email leashupdogwalking@gmail.com</p>

            <h3>Wiggle Dog Walks</h3>

            <p>Wiggle Dog Walks is a family owned business. They are offer dog walking and they use relationship-based training. It is a method that puts the human-canine relationship at the center of everything.</p>

            <p>Call 514-444-8152 or email wiggledogwalks@gmail.com</p>

            <h2>Life in Focus Photography</h2>

            <p>Life in Focus Photography is a Montreal-based photography studio who specializes in dog and cat photography. Your photo session will take place either at your location (home or outdoors), or in their fully equipped studio. Alexandra Draghici is an award-winning Montreal-based photographer who specializes in dog and cat photography as well as family, portraits and special events. With a Bachelor's degree in Fine Arts and numerous years of experience as a professional photographer, Alexandra will create for you not only a personalized photo session, but a unique experience. She will bring to life a visual memory particular only to you and capture the organic relationship between you and your family members, be they two or four-legged.</p>

            <p>Website: <a href="https://lifeinfocus.ca" data-link>https://lifeinfocus.ca/</a></p>

            <h2>Doggieville Mtl</h2>

            <p>Doggieville Mtl is the first luxury resort for doggies in Canada, a one stop solution for all your pooch's needs! They offer many different services such as grooming, daycare, boarding, hydrotherapy, a pet store and a lovely coffee shop!</p>

            <p>Website: <a href="https://www.doggievillemtl.com/" data-link>https://www.doggievillemtl.com/</a></p>

            <h2>Montreal Puppy Party Planner</h2>

            <p>Our ultimate Birthday Party Planning for your Puppy includes everything you need for your favorite fido. Celebrating your puppy's actual birthday, adoption day or just welcoming him to the family, a puppy party is what you've been searching for. Our Puppy Birthday Party theme is the ultimate chance for your pet's best friends or their mommies and daddies (you) to get together and have fun. We have everything you need to pull off an original and amazing event for all of your four legged and two legged guests.</p>

            <p>Call 514-781-0351 or email montrealpuppyparty@gmail.com</p>
        `
    }
}