const ElementImporterTest = class {
    constructor(elementConfigs) {
        this.importContainer = document.querySelector('el-import');
        if (!this.importContainer) {
            console.error("No se encontró el elemento 'el-import'");
            return;
        }
        this.elementConfigs = elementConfigs;
        this.insertStyles();
        this.replaceElements();
    }
    insertStyles() {
        if (!this.importContainer) return;
        const styles = this.elementConfigs.map(config => config.style).join('');
        this.importContainer.innerHTML = styles;
    }
    replaceElements() {
        const variableRegEx = /\(.*?\)/;
        if (!this.importContainer) return;
        this.elementConfigs.forEach(config => {
            const elements = document.querySelectorAll(config.name);
            elements.forEach(originalElement => {
                if (config.beforeCreate) config.beforeCreate(originalElement);
                const newElement = document.createElement('div');
                newElement.innerHTML = config.value;
                const replacementElement = newElement.firstElementChild;
                replacementElement.classList.add(config.name);
                if (replacementElement) {
                    Array.from(originalElement.attributes).forEach(attr => {
                        if (variableRegEx.test(attr.name)) {
                            console.log(attr)
                            let variable = attr.name.slice(1, -1);
                            if (config.value.includes(`$${variable}`)) replacementElement.innerHTML.replace(`$${variable}`, attr.value)
                        } else {
                            replacementElement.setAttribute(attr.name, attr.value);
                        }
                    });
                    if (config.value.includes('$content')) {
                        replacementElement.innerHTML = replacementElement.innerHTML.replace('$content', originalElement.innerHTML);
                    } else {
                        replacementElement.innerHTML = originalElement.innerHTML;
                    }
                    if (config.onClick) {
                        replacementElement.addEventListener('click', () => config.onClick(replacementElement));
                    }
                    if (config.onInput && replacementElement.tagName.toLowerCase() === 'input') {
                        replacementElement.addEventListener('input', () => config.onInput(replacementElement));
                    }
                    originalElement.replaceWith(replacementElement);
                    if (config.afterCreate) config.afterCreate(replacementElement);
                }
            });
        });
    }
}