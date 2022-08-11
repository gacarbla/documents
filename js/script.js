var warned = false;

const navigation = {
    "0": {
        name: "Inicio",
        vector: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H3l9-9 9 9h-2"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path></svg>`,
        class: "pagina",
        onclick: "go(':', false)",
        title: "Vuelve a la página de inicio",
        disabled: false
    },
    "1": {
        name: "Herramientas",
        vector: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h4L20 8a2.829 2.829 0 0 0-4-4L3 17v4Z"></path><path d="m14.5 5.5 4 4"></path><path d="M12 8 7 3 3 7l5 5"></path><path d="M7 8 5.5 9.5"></path><path d="m16 12 5 5-4 4-5-5"></path><path d="m16 17-1.5 1.5"></path></svg>`,
        class: "separador"
    },
    "2": {
        name: "Timestamp",
        vector: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path d="M12 7v5l3 3"></path></svg>`,
        class: "pagina",
        onclick: "go(':herramientas/timestamp', false)",
        title: "Discord Timestamp Generator",
        disabled: true
    },
    "3": {
        name: "Codificador",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 11H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z"></path><path d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>',
        class: "pagina",
        onclick: "go(':herramientas/codificador', false)",
        title: "Codificador simple de textos",
        disabled: true
    },
    "4": {
        name: "GitHub",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21h6Z"></path><path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path></svg>',
        class: "separador",
    },
    "5": {
        name: "Perfil",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 8V6a2 2 0 0 1 2-2h2"></path><path d="M4 16v2a2 2 0 0 0 2 2h2"></path><path d="M16 4h2a2 2 0 0 1 2 2v2"></path><path d="M16 20h2a2 2 0 0 0 2-2v-2"></path><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path></svg>',
        class: "pagina",
        onclick: "go('https://github.com/gacarbla', true)",
        title: "Accede al perfil de GitHub de gacarbla",
        disabled: false
    },
    "6": {
        name: "gacarbla.github.io",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 4-2 14.5-6 2-6-2L4 4h16Z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5-2.5.75-2.5-.75-.1-.5"></path></svg>',
        class: "pagina",
        onclick: "go('https://github.com/gacarbla/gacarbla.github.io', true)",
        title: "Accede al repositorio",
        disabled: false
    },
    "7": {
        name: "Dori",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 4-2 14.5-6 2-6-2L4 4h16Z"></path><path d="M7.5 8h3v8l-2-1"></path><path d="M16.5 8H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5"></path></svg>',
        class: "pagina",
        onclick: "go('https://github.com/gacarbla/Dori', true)",
        title: "Accede al repositorio",
        disabled: false
    },
    "8": {
        name: "NewsBot",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 4-2 14.5-6 2-6-2L4 4h16Z"></path><path d="M7.5 8h3v8l-2-1"></path><path d="M16.5 8H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5"></path></svg>',
        class: "pagina",
        onclick: "go('https://github.com/gacarbla/NewsBot', true)",
        title: "Accede al repositorio",
        disabled: false
    },
    "9": {
        name: "Computer analyzer",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3"></path><path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3"></path><path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4"></path><path d="M11 6v.01"></path><path d="M13 18v.01"></path></svg>',
        class: "pagina",
        onclick: "go('https://github.com/gacarbla/computerAnalyzer', true)",
        title: "Accede al repositorio",
        disabled: false
    },
    "10": {
        name: "Redes",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M12 7v4"></path><path d="m6.7 17.797 2.8-2"></path><path d="m17.3 17.797-2.8-2"></path></svg>',
        class: "separador",
    },
    "11": {
        name: "Instagram",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Z"></path><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M16.5 7.5v.001"></path></svg>',
        class: "pagina",
        onclick: "go('https://www.instagram.com/gacarbla/', true)",
        title: "Instagram personal",
        disabled: false
    },
    "12": {
        name: "Twitter",
        class: "pagina",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4.009c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.322 12 7.999v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c-.002-.249 1.51-2.772 1.818-4.013v.001Z"></path></svg>',
        onclick: "go('https://twitter.com/gacarbla', true)",
        title: "Twitter personal",
        disabled: false
    },
    "13": {
        name: "LinkedIn",
        class: "pagina",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path><path d="M8 11v5"></path><path d="M8 8v.01"></path><path d="M12 16v-5"></path><path d="M16 16v-3a2 2 0 0 0-4 0"></path></svg>',
        onclick: "go('https://www.linkedin.com/in/gabriel-carro-blanco-866b99247/', true)",
        title: "LinkedIn",
        disabled: false
    },
    "14": {
        name: "Spotify",
        class: "pagina",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path><path d="M8 11.97c2.5-1.473 5.5-.973 7.5.527"></path><path d="M9 15.002c1.5-1 4-1 5 .5"></path><path d="M7 8.999c2-1 6-2 10 .5"></path></svg>',
        onclick: "go('https://open.spotify.com/user/31k2xuzibkfcpzhuottq6kgpigpy?si=9a158eccac6f478c', true)",
        title: "Spotify",
        disabled: false
    },
    "15": {
        name: "Tinder",
        class: "pagina",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.918 8.174c2.56 4.982.5 11.656-5.38 12.626C5.836 22.487.698 13.084 6.484 7.571 6.793 7.266 7.644 6.476 8 6.222c0 .528.27 3.475 1 3.167 3 0 4-4.222 3.587-7.389 2.7 1.411 4.987 3.376 6.33 6.174v0Z"></path></svg>',
        onclick: "rickroleo()",
        disabled: false
    },
    "16": {
        name: "Página",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path><path d="M6 8h.01"></path><path d="M9 8h.01"></path></svg>',
        class: "separador",
    },
    "17": {
        name: "Ajustes",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M4 6h8"></path><path d="M16 6h4"></path><path d="M8 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M4 12h2"></path><path d="M10 12h10"></path><path d="M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M4 18h11"></path><path d="M19 18h1"></path></svg>',
        class: "pagina",
        onclick: "newWindow('settings')",
        title: "Modifica el aspecto de la página a tu gusto",
        disabled: false
    },
    "18": {
        name: "Cookies",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 13v.01"></path><path d="M12 17v.01"></path><path d="M12 12v.01"></path><path d="M16 14v.01"></path><path d="M11 8v.01"></path><path d="m13.148 3.478 2.667 1.104a4 4 0 0 0 4.656 6.14l.053.132a3 3 0 0 1 0 2.296c-.497.786-.838 1.404-1.024 1.852-.189.456-.409 1.194-.66 2.216a3 3 0 0 1-1.624 1.623c-1.048.263-1.787.483-2.216.661-.475.197-1.092.538-1.852 1.024a3 3 0 0 1-2.296 0c-.802-.503-1.419-.844-1.852-1.024-.47-.195-1.21-.415-2.216-.66a3 3 0 0 1-1.623-1.624c-.265-1.052-.485-1.79-.66-2.216-.199-.479-.54-1.096-1.025-1.852a3 3 0 0 1 0-2.296c.48-.744.82-1.36 1.024-1.852.171-.413.391-1.152.66-2.216a3 3 0 0 1 1.624-1.623c1.032-.256 1.77-.476 2.216-.66.458-.19 1.075-.532 1.852-1.025a3 3 0 0 1 2.296 0v0Z"></path></svg>',
        class: "pagina",
        onclick: "newWindow('cookies')",
        title: "Modifica el uso de Cookies a tu gusto",
        disabled: false
    },
    "19": {
        name: "Ajustes dev",
        vector: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h6"></path><path d="M12 9v6"></path><path d="M6 19a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2"></path><path d="M18 19a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2"></path></svg>',
        class: "pagina",
        onclick: "newWindow('devSettings')",
        title: "Herramientas avanzadas para desarrolladores",
        disabled: false,
        hidden: CookiesValue("devModeStatus") == "on" ? false : true,
    }
}

const windowsList = {
    "devSettings": {
        title: "Ajustes para desarrolladores",
        content: `<p class="intro">Aquí dispondrás de múltiples herramientas útiles para explorar el código de la página y activar todas sus funciones como desarrollador web.<br>Se recomienda mantener las <span onclick="newWindow('cookies')">cookies de ajustes de desarrollador</span> activadas.</p><div class="options"><div class="option"><label for="selectCheck">Habilitar selección</label><input type="checkbox" id="selectCheck"></div><div class="option"><label for="rightClickCheck">Habilitar click derecho</label><input type="checkbox" id="rightClickCheck"></div><div class="option"><label for="commandGuideCheck">Habilitar guía de comandos</label><input type="checkbox" id="commandGuideCheck" disabled></div></div>`
    },
    "settings": {
        title: "Ajustes",
        content: `<div class="apartado"><div class="opciones"><div class="opcion"><div class="ajuste"><p class="etiqueta izquierda">Modo claro <span style="font-size: 12px; opacity: .5;">BETA</span></p><label class="switch dereita"><input type="checkbox"id="modoColorCheck"><span class="slider round"></span></label></div><div class="ajuste"><p class="etiqueta izquierda">Modo desarrollador</p><label class="switch dereita"><input type="checkbox" id="devModeCheck"><span class="slider round"></span></label></div></div></div></div>`
    },
    "cookies": {
        title: "Cookies",
        content: `<p class="intro">Esta página no almacena cookies con datos de carácter personal, privado o identificativo. Todas nuestras cookies son de configuración de la página.<br>Algunos buscadores no permiten el uso de Cookies.</p><div class="options"><div class="option"><label for="cookiesEsenciales">Cookies esenciales</label><input type="checkbox" id="cookiesEsenciales" checked="true" disabled></div><div class="option"><label for="cookiesConfig">Ajustes generales</label><input type="checkbox" id="cookiesConfig"></div><div class="option"><label for="cookiesDev">Ajustes de desarrollador</label><input type="checkbox" id="cookiesDev"></div><div class="option"><button onclick="CookiesRemove(true)">Reiniciar todas las cookies</button></div></div>`
    }
}

function load() {

    if (CookiesValue("rightClick") == "true") {
        document.oncontextmenu = function () { }
    } else {
        document.oncontextmenu = function () { return false }
    }
    if (CookiesValue("select") == "true") {
        document.getElementById("body").classList.add("select");
    } else {
        document.getElementById("body").classList.remove("select");
    }
    if (CookiesValue("colorMode") == "claro") {
        document.getElementById("body").className = "claro"
    }
    if (CookiesValue("colorMode") == "oscuro") {
        document.getElementById("body").className = "oscuro"
    }

    let headerMenu = [];
    var x = 0;
    for (x = 0; x < (Object.keys(navigation)).length; x++) {
        if (navigation[`${x}`].hidden) {

        } else if (navigation[`${x}`].class == "separador") {

            headerMenu[x] = `
            <div class="separador">
                <div class="vector">
                    ${navigation[`${x}`].vector}
                </div>
                <div class="nombre">
                    <p>${navigation[`${x}`].name}</p>
                </div>
                <div class="line"></div>
            </div>`

        } else if (navigation[`${x}`].class == "pagina") {
            if ((navigation[`${x}`].name == "Cookies" || navigation[`${x}`].name == "Ajustes" || navigation[`${x}`].name == "Ajustes dev") && warned) {
                headerMenu[x] = `
                    <div class="pagina disabled" title="El navegador no permite utilizar esta herramienta">
                        <div class="vector">
                            ${navigation[`${x}`].vector}
                        </div>
                        <div class="nombre">
                            <p>${navigation[`${x}`].name}</p>
                        </div>
                    </div>`
            } else if (navigation[`${x}`].disabled) {
                headerMenu[x] = `
                    <div class="pagina disabled" title="Página deshabilitada por el desarrollador">
                        <div class="vector">
                            ${navigation[`${x}`].vector}
                        </div>
                        <div class="nombre">
                            <p>${navigation[`${x}`].name}</p>
                        </div>
                    </div>`
            } else {
                headerMenu[x] = `
                    <div class="pagina" onclick="${navigation[`${x}`].onclick}" title="${navigation[`${x}`].title}">
                        <div class="vector">
                            ${navigation[`${x}`].vector}
                        </div>
                        <div class="nombre">
                            <p>${navigation[`${x}`].name}</p>
                        </div>
                    </div>`
            }
        }
    }
    document.getElementById("header").innerHTML = `
    <div class="btn" id="mobilemenubutton">
        <svg id="off" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16"></path>\n<path d="M4 12h16"></path>
            <path d="M4 18h16"></path>\n</svg>\n<svg id="on" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6 6 18"></path>\n<path d="m6 6 12 12"></path>
        </svg>
    </div>
    <div class="menu">
    ${headerMenu.join("\n")}
    </div>
    <footer>
        <div class="vector">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m7 8-4 4 4 4"></path>
                <path d="m17 8 4 4-4 4"></path>
                <path d="m14 4-4 16"></path>
            </svg>
        </div>
        <div class="nombre">
            <p class="p">GΛCΛRBLΛ</p>
            <p class="s">Gabriel Carro Blanco</p>
        </div>
    </footer>`
    var mmb = document.getElementById("mobilemenubutton")
    mmb.addEventListener("click", function () {
        document.getElementById("header").classList.toggle("active")
    })
}



/* ELEMENTAL FUNCTIONS */

function go(page, newTabBoolean) {
    if (page.startsWith(":")) page = page.replace(":", "https://gacarbla.github.io/")
    if (newTabBoolean) {
        window.open(`${page}`, "GΛCΛRBLΛ", "width=1080, height=440")
    } else {
        window.location = `${page}`
    }
}

function rickroleo() {
    const audio = new Audio("../media/audio/rickroll.mp3")
    audio.play()
}


/* PAGE WINDOWS */

const checkWindowsStatus = () => { if (!document.getElementById("windows")) return location.reload() }

function newWindow(name) {
    checkWindowsStatus();
    if (!name) {
        return console.error("No se ha especificado el nombre de la ventana")
    }
    if (document.getElementById(name)) return console.error("La venta ya se encuentra abierta")
    if (!windowsList[`${name}`]) return "No se ha encontrado ninguna ventana con este nombre"
    var divVentanas = document.getElementById("windows")
    divVentanas.innerHTML = `<div class="window" id="${name}"><svg class="close" onclick="closeWindow('${name}')" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg><div class="title"><p>${windowsList[`${name}`].title}</p></div><div class="caja">${windowsList[`${name}`].content}</div></div>`
    if (name == "devSettings") {
        const rightClickCheck = document.getElementById("rightClickCheck")
        const selectCheck = document.getElementById("selectCheck")
        if (CookiesValue("rightClick") == "true") {
            rightClickCheck.checked = true
        } else {
            rightClickCheck.checked = false
        }
        if (CookiesValue("select") == "true") {
            selectCheck.checked = true
        } else {
            selectCheck.checked = false
        }
        selectCheck.addEventListener("change", function () {
            if (selectCheck.checked) {
                document.getElementById("body").classList.add("select");
                CookiesAdd("select", "true", "cookiesDev")
            } else {
                document.getElementById("body").classList.remove("select");
                CookiesAdd("select", "false", "cookiesDev")
            }
        })
        rightClickCheck.addEventListener("change", function () {
            if (rightClickCheck.checked) {
                document.oncontextmenu = function () { }
                CookiesAdd("rightClick", "true", "cookiesDev")
            } else {
                document.oncontextmenu = function () { return false }
                CookiesAdd("rightClick", "false", "cookiesDev")
            }
        })
    } else if (name == "cookies") {
        const config = document.getElementById("cookiesConfig")
        const devConfig = document.getElementById("cookiesDev")
        if (CookiesValue("cookiesConfig") == "true") {
            config.checked = true
        } else {
            config.checked = false
        }
        if (CookiesValue("cookiesDev") == "true") {
            devConfig.checked = true
        } else {
            devConfig.checked = false
        }
        devConfig.addEventListener("change", function () {
            if (devConfig.checked) {
                CookiesAdd("cookiesDev", "true", "essentials")
            } else {
                CookiesAdd("cookiesDev", "false", "essentials")
            }
        })
        config.addEventListener("change", function () {
            if (config.checked) {
                CookiesAdd("cookiesConfig", "true", "essentials")
            } else {
                document.oncontextmenu = function () { return false }
                CookiesAdd("cookiesConfig", "false", "essentials")
            }
        })
    } else if (name == "settings") {
        const modoColor = document.getElementById("modoColorCheck")
        if (document.getElementById("body").className == "claro") {
            modoColor.checked = true
        }
        modoColor.addEventListener("change", function () {
            if (modoColor.checked) {
                CookiesAdd("colorMode", "claro", "cookiesConfig")
                document.getElementById("body").className = "claro"
            } else {
                CookiesAdd("colorMode", "oscuro", "cookiesConfig")
                document.getElementById("body").className = "oscuro"
            }
        })
        const modoDev = document.getElementById("devModeCheck")
        if (CookiesValue("devModeStatus") == "on") {
            modoDev.checked = true
        }
        modoDev.addEventListener("change", function () {
            if (modoDev.checked) {
                CookiesAdd("devModeStatus", "on", "essential")
            } else {
                CookiesAdd("devModeStatus", "off", "essential")
            }
            window.alert("La página se recargará de forma automática con los nuevos ajustes.")
            location.reload()
        })
    }
}

function closeWindow(name) {
    checkWindowsStatus();
    const windows = document.getElementById("windows");
    if (!name) return console.error("No se ha especificado el nombre de la ventana")
    const window = document.getElementById(`${name}`)
    if (!window) return console.error("Esta ventana no se encuentra abierta actualmente")
    windows.removeChild(window)
}

function modifyWindow() {
    checkWindowsStatus();
    window.alert("Estoy trabajando en esto")
}





/* COOKIES */

function checkEssentialCookies() {
    if (!CookiesValue("cookiesConfig")) { document.cookie = `cookiesConfig=true; secure; max-age=604800}` }
    if (!CookiesValue("cookiesDev")) { document.cookie = `cookiesDev=true; secure; max-age=604800}` }
}

function CookiesAdd(ruta, valor, type) {
    checkEssentialCookies();
    if (Object.keys(CookiesComprobar()) < 1) {
        if (!warned) {
            warned = true
            window.alert("Se ha detectado que su navegador no permite el almacenamiento de Cookies esenciales.\nDe forma automática, todas las funciones de almacenamiento de datos, cookies y otra información se ve paralizada y deshabilitada.")
        }
    } else if ((CookiesValue("cookiesDev") == "false" && type == "cookiesDev") || (CookiesValue("cookiesConfig") == "false" && type == "cookiesConfig")) {
        CookiesRemove(ruta)
        return console.info(`No se ha guardado la cookie ${ruta} con valor ${valor} debido a la configuración de cookies`)
    } else {
        document.cookie = `${ruta.trimStart()}=${valor}; secure; max-age=604800}`
        return document.cookie
    }
}

function CookiesValue(ruta) {
    let cookies = {}
    let LocalCookies = (document.cookie).split(/;+/g)
    LocalCookies.forEach(cookie => {
        cookies[`${cookie.split(/=+/g)[0]}`] = cookie.split(/=+/g)[1]
    })
    return cookies[`${ruta}`] || cookies[` ${ruta}`]
}

function CookiesRemove(ruta) {
    checkEssentialCookies()
    if (ruta == true) {
        let LocalCookies = (document.cookie).split(/;+/g)
        LocalCookies.forEach(cookie => {
            document.cookie = `"${cookie.trim().split(/=+/g)[0]}"=;max-age=0;path="/"`;
            document.cookie = `'${cookie.trim().split(/=+/g)[0]}'=;max-age=0;path="/"`;
            document.cookie = `${cookie.trim().split(/=+/g)[0]}=;max-age=0;path="/"`;
        })
        window.alert("Todas las cookies han sido reiniciadas.\n¡Es necesario recargar la página!\nPulsa \"Aceptar\" para proceder.")
        location.reload()
    } else {
        document.cookie = `"${ruta}"=;max-age=0;path="/"`;
        document.cookie = `'${ruta}'=;max-age=0;path="/"`;
        document.cookie = `${ruta}=;max-age=0;path="/"`;
        return document.cookie
    }
}

function CookiesComprobar() {
    checkEssentialCookies()
    let cookies = {}
    let LocalCookies = (document.cookie).split(/;+/g)
    LocalCookies.forEach(cookie => {
        cookies[`${cookie.trim().split(/=+/g)[0]}`] = cookie.split(/=+/g)[1]
    })
    return cookies
}