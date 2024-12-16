/**
 * 
 * **Oh oh..**
 * 
 * Esta clase no consta de ninguna función o variable estáticos
 */
class Encryption {
    #key
    #displacement
    #_valid_types = ["ascii", "binary", "text"]

    /**
     * 
     * -----
     * 
     * Gracias a esta clase podrás crear funciones de codificación y descodificación que
     * compartan características para que no sea necesario repetir constantemente la
     * contraseña al encriptar un elevado número de elementos.
     * 
     * -----
     * 
     * @param {string} pssw Campo: Contraseña
     * @param {integer} displacement Campo: Desplazamiento de caracteres
     * @example
     * var crp = new Encryption("Contraseña", 123)
     * crp.encrypt("Texto que quieres encriptar", "text")
     * crp.encrypt("Otro texto que quieres encriptar", "text")
     * crp.encrypt("Y otro más", "text")
     */
    constructor(pssw, displacement) {
        console.groupCollapsed("#️⃣ Creación de objeto de encriptación")
        try {
            if (!validate.stringMinLength(pssw, 3)) throw new Error("Invalid password")
            if (!validate.intMin(displacement, 0)) throw new Error("Invalid displacement")
            this.#key = pssw
            this.#displacement = displacement
            console.log("✅ Objeto creado correctamente")
        } catch (e) {
            console.groupCollapsed("❌ No ha sido posible crear el objeto")
            console.error(e)
            console.groupEnd()
        } finally {
            console.groupEnd()
        }
    }

    #math = {
        encrypt: (letter, key, displacement, n) => Math.floor((letter + key.charCodeAt(n & key.length) + displacement) * (key.length - (n % key.length))),
        decrypt: (letter, key, displacement, n) => Math.floor((letter / (key.length - (n % key.length))) - key.charCodeAt(n % key.length) - displacement)
    }

    /**
     * Función para encriptar determinado texto con la contraseña y desplazamiento indicados
     * con anterioridad en el constructor.
     * 
     * -----
     * 
     * **ANTES DE USARLO**
     * 
     * > Recuerda crear un objeto `Encryption` para configurar la contraseña y desplazamiento
     * de caracteres que deben ser empleados.
     * > ```js
     * var crp = new Encryption("Contraseña", 123)
     * crp.encrypt("Texto", "text")
     * > ```
     * 
     * -----
     * 
     * @param {string} text 
     * @param {"ascii"|"binary"|"text"} format 
     * @return {{ascii: string, binary: string, text: string} | null}
     */
    encrypt(text, format) {
        console.groupCollapsed("#️⃣ Función de encriptación")
        var encr = [];
        try {
            if (!validate.isFilledString(text)) throw new Error("El valor texto no es tipo string o no contiene caracteres.")
            if (!validate.isFilledString(format)) throw new Error("Es necesario especificar el nombre de un formato.")
            format = format.toLowerCase()
            if (!validate.encrypt.validFormat(format)) throw new Error("El formato introducido no es reconocido.")
            console.log("✅ Los valores introducidos son correctos y válidos")
            let n = 0;
            this.#convertToAscii(text, format).forEach(
                letter => encr.push(this.#math.encrypt(letter, this.#key, this.#displacement, n))
            )
            console.log("✅ Aplicación de la fórmula matemática necesaria")
            console.groupCollapsed("#️⃣ Convirtiendo resultado...")
            let toLogOut = {
                text: this.#convertFromAscii(encr, "text"),
                binary: this.#convertFromAscii(encr, "binary"),
                ascii: this.#convertFromAscii(encr, "ascii"),
            }
            console.groupEnd()
            console.groupEnd()
            return toLogOut
        } catch (e) {
            console.groupCollapsed("❌ No ha sido posible ejecutar la función correctamente")
            console.error(e)
            console.groupEnd()
            console.groupEnd()
            return null
        }
    }

    /**
     * 
     * @param {string} text 
     * @param {"ascii"|"binary"|"text"} format
     * @return {{ascii: string, binary: string, text: string} | null}
     */
    decrypt(text, format) {
        console.groupCollapsed("#️⃣ Función de desencriptado")
        try {
            if (!validate.isFilledString(text)) throw new Error("El valor texto no es tipo string o no contiene caracteres.")
            if (!validate.isFilledString(format)) throw new Error("Es necesario especificar el nombre de un formato.")
            format = format.toLowerCase()
            if (!validate.encrypt.validFormat(format)) throw new Error("El formato introducido no es reconocido.")
            console.log("✅ Los valores introducidos son correctos y válidos")
            var encr = [];
            var n = 0;
            this.#convertToAscii(text, format).forEach(
                letter => encr.push(this.#math.decrypt(letter, this.#key, this.#displacement, n))
            )
            console.log("✅ Aplicación de la fórmula matemática necesaria")
            console.groupCollapsed("#️⃣ Convirtiendo resultado...")
            let toLogOut = {
                text: this.#convertFromAscii(encr, "text"),
                binary: this.#convertFromAscii(encr, "binary"),
                ascii: this.#convertFromAscii(encr, "ascii"),
            }
            console.groupEnd()
            console.groupEnd()
            return toLogOut
        } catch (e) {
            console.groupCollapsed("❌ No ha sido posible ejecutar la función correctamente")
            console.error(e)
            console.groupEnd()
            console.groupEnd()
            return null
        }
    }

    /**
     * @param {string} text 
     * @param {"ascii"|"binary"|"text"} type 
     * @returns {integer[] | null}
     */
    #convertToAscii(text, type) {
        console.groupCollapsed("#️⃣ Iniciando conversión a array ASCII")
        try{
            if (!validate.isFilledString(text)) throw new Error("El valor introducido no es tipo string o no contiene caracteres.")
            var base = [];
            console.log("*️⃣ Tipo de texto reconocido como: \""+type+"\"")
            switch (type) {
                case "ascii":
                    text.trim().split(/ +/g).forEach(function (letter) { base.push(parseInt(letter)); });
                    break;
                case "binary":
                    text.trim().split(/ +/g).forEach(function (letter) { base.push(parseInt("".concat(parseInt(letter)), 2)) });
                    break;
                case "text":
                    text.trim().split("").forEach(function (letter) { base.push(letter.charCodeAt(0)); });
                    break;
            }
            console.log("✅ Coversión finalizada exitosamente")
            console.groupEnd()
            return base
        } catch (e) {
            console.groupCollapsed("❌ No ha sido posible realizar la conversión")
            console.error(e)
            console.groupEnd()
            console.groupEnd()
            return null
        }
    }

    /**
     * 
     * @param {integer[]} text 
     * @param {"ascii"|"binary"|"text"} type 
     * @returns {string | null}
     */
    #convertFromAscii(text, type) {
        console.groupCollapsed("#️⃣ Iniciando conversión desde array ASCII")
        try {
            var result
            console.log("*️⃣ Tipo de texto reconocido como: \""+type+"\"")
            switch (type) {
                case "ascii":
                    result = text.join(" ");
                    break;
                case "binary":
                    var text_array = [];
                    text.forEach(function (letter) { text_array.push("".concat(parseInt((letter >>> 0).toString(2)))); });
                    result = text_array.join(" ");
                    break;
                case "text":
                    var text_array = [];
                    text.forEach(function (letter) { text_array.push(String.fromCharCode(letter)); });
                    result = text_array.join("");
                    break
            }
            console.log("✅ Coversión finalizada exitosamente")
            console.groupEnd()
            return result;
        } catch (e) {
            console.groupCollapsed("❌ No ha sido posible realizar la conversión")
            console.error(e)
            console.groupEnd()
            console.groupEnd()
            return null
        }
    }
}