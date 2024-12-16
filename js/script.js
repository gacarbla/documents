var db, schema;

if (window.location.href.endsWith("/index.html")) {
    let location = window.location.href.split(/\//g)
    location.pop()
    window.location = location.join("/")
}

document.addEventListener("DOMContentLoaded", function () {
    return new Promise(async resolve => {
        try {
            db = new IndexedDBManager('gacarbla', 1)
            schema = await require("json/schema.json", true)
            await db.init(schema)
            console.groupCollapsed("Base de datos cargada con éxito")
            console.log("✅ Base de datos iniciada satisfactoriamente")
        } catch (error) {
            console.groupCollapsed("Imposible cargar la base de datos")
            console.error("Error:", error)
        } finally {
            console.groupEnd()
        }
        try {
            new ElementImporterTest([
                {
                    name: 'projectbox',
                    style: `<style></style>`,
                    value: '<div><div class="image">$image</div><div class="title">$content</div></div>',
                }
            ])
        } catch (error) {
            console.groupCollapsed("Imposible cargar los elementos")
            console.error("Error:", error)
            console.groupEnd()
        }
    })
})

function require(url, canonical) {
    return new Promise(async (resolve, reject) => {
        var response
        if (window.location.href.startsWith("http://127.0.0.1:5500/")) {
            response = await fetch(`${canonical ? `http://127.0.0.1:5500/${url}` : `${url}`}`);
        } else {
            response = await fetch(`${canonical ? `${document.querySelector("link[rel='canonical']").getAttribute("href")}${url}` : `${url}`}`);
        }
        const json = await response.json();
        resolve(json)
    })
}

function read(value) {
    if (!window.location.href.split("?")[1]) return
    const values = window.location.href.split("?")[1].split(/;+/g)
    var devolver = ""
    values.forEach(element => {
        if (element.split("=")[0] == value) devolver = element.split("=")[1]
    })
    return devolver
}

async function language() {
    return new Promise(async (resolve, reject) => {
        const texts = await require(`json/lang/${lang}.json`, true)
        for (const x in texts) {
            try { document.getElementById(`${x}`).innerHTML = texts[x] } catch { }
        }
        resolve()
    })
}

function go(page, newTabBoolean) {
    if (page.startsWith(":") && window.location.href.startsWith("http://127.0.0.1:5500/")) page = page.replace(":", "http://127.0.0.1:5500/")
    if (page.startsWith(":")) page = page.replace(":", "https://gacarbla.github.io/")
    if (window.location.href.split("?")[1]) page = `${page}?${window.location.href.split("?")[1]}`
    if (newTabBoolean) {
        window.open(`${page}`, "GΛCΛRBLΛ", "width=1080, height=440")
    } else {
        window.location = `${page}`
    }
}
async function showlist(id) {
    if (document.getElementById(`${id}_list`)) {
        document.getElementById(id).removeChild(document.getElementById(`${id}_list`))
    } else {
        const lista = document.getElementById(id)
        if (!lista) return console.error("Esta lista no existe o no se encuentra disponible")
        const listasJSON = await require("json/windows/settings.json", true)
        if (!listasJSON) return console.log("No ha sido posible obtener la información de las listas")
        const listaArray = listasJSON.textos[id].options
        if (!listaArray) return console.error("No ha sido posible cargar la información de la lista")
        var options = []
        var finalList = []
        listaArray.forEach(option => {
            options.push(`<li id=\"${id}_opt_${option.value}\" ${option.enabled ? "" : "class=\"disabled\""}>${option.flag ? `<img src=\"${option.flag}\">` : ""}${option.name ? `<p>${option.name}</p>` : ""}</li>`)
            if (option.enabled) finalList.push(option)
        })
        document.getElementById(id).innerHTML = `${document.getElementById(id).innerHTML}<ul id=\"${id}_list\">%%options%%</ul>`.replace("%%options%%", options.join(""))
        finalList.forEach(option => {
            if (id == "langSelector") {
                document.getElementById(`${id}_opt_${option.value}`).addEventListener("click", function () {
                    data.establecer("idioma", option.value)
                    lang = option.value
                    refreshNavigationBar()
                    language()
                })
            } else if (id == "modoColorSelector") {
                document.getElementById(`${id}_opt_${option.value}`).addEventListener("click", function () {
                    document.getElementById("body").classList.remove(data.obtener("colorMode"))
                    data.establecer("colorMode", option.value)
                    document.getElementById("body").classList.add(option.value)
                })
            }
        })
    }
}