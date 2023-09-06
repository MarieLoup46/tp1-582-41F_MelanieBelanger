import Dogs from "./views/Dogs.js"
import DogView from "./views/DogView.js"
import Events from "./views/Events.js"
import Services from "./views/Services.js"
import Activities from "./views/Activities.js"

// Validation
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") +"$")

const getParams = match => {
    const values = match.result.slice(1)
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]]
    }))
}

// Router - Afficher le contenu de chaque page
const router = async () => {
    const routes = [
        {path: '/', view: Dogs},
        {path: '/dog-view/:id', view: DogView},
        {path: '/events', view: Events},
        {path: '/services', view: Services},
        {path: '/activities', view: Activities}
    ]

    // Match function 
    const potentialMatches = routes.map(route => {
        return{            
            route: route,            

            result: location.pathname.match(pathToRegex(route.path))   
        }    
    })

    let match = potentialMatches.find(potentialMatches => potentialMatches.result !== null)    
 
    if(!match) {        
        match = {            
            route: routes[0],            
            result:[location.pathname]        
        }    
    }

    const view = new match.route.view(getParams(match));    

    document.querySelector("#app").innerHTML = await view.getHtml()
}    
    
const navigateTo = url => {    
    history.pushState(null, null, url);    
    router(); 
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {    
    document.body.addEventListener("click", e => {        
        if (e.target.matches("[data-link]")) {            
            e.preventDefault();            
            navigateTo(e.target.href)        
        }    
    })    
    router(); 
});

