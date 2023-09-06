const express = require('express')
const path = require('path')
const app = express()

// Créer une exception pour le chemin du css
app.use("/static", express.static(path.resolve(__dirname, 'frontend', 'static')))

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html")) // Règle le chemin absolu
})

app.listen(8081, () => console.log("server is running.."))