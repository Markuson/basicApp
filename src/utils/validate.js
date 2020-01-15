const validate = {
    arguments(args) {
        args.forEach(({ name, value, type, notEmpty, optional }) => {
            if (value != undefined) {
                if (typeof value !== type) throw Error(`${name} ${value} no es un ${type}`)

                if (notEmpty)
                    if (type === 'string') {
                        if (!value.trim().length) throw new Error(`El campo ${name} está vacío`)
                    } else if (type === 'object')
                        if (!Object.keys(value).length) throw new Error(`El campo ${name} está vacío`)
            } else if (!optional) throw new Error(`El campo ${name} no es opcional`)
        })
    },

    email(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(String(email))) throw new Error(`email no válido`)
    },

    password(password) {
        const re = /(?=.{8,})/;
        if (!re.test(String(password))) throw new Error(`El password debe de ser mínimo de 8 caracteres`)
    },

    url(url) {
        const re = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

        if (!re.test(String(url))) throw new Error(`url no válida`)
    }
}

export default validate
