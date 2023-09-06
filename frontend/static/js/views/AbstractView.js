export default class {
    constructor(params) {
        this.params = params
    }

    setTitle(title) {
        document.title = title
    }

    // Contenu que je veux retourner à l'intérieur de mon div
    async getHtml() {
        return "";
    }
}