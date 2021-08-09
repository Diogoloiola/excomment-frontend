import { URL_API } from './consts.js'

export function removeNumberFromString(string) {
    return string.replace(/[0-9]/g, '');
}

export function getDataWithAxios(url) {
    return axios.get(url)
}

function formatUrlToGet(typeUrl, id) {
    if (typeUrl === 1)
        return `${URL_API}/jsonHierarchical/${id}/database/with?flag=false`
    else if (typeUrl === 2)
        return `${URL_API}/jsonHierarchical/${id}/database/with?flag=true`
}

export function formatQuery(typeUrl, inputs) {

    let axiosConsult = []

    inputs.forEach(input => {
        const value = input.value
        const urlApi = formatUrlToGet(typeUrl, value)
        axiosConsult.push(getDataWithAxios(urlApi))
    })

    return axiosConsult
}


export function createLegendForTreeMap(idContainer) {
    const container = document.querySelector(idContainer)
    let colors = {
        "Dívida de arquitetura": "#332288",
        "Dívida de construção": "#117733",
        "Dívida de código": "#44AA99",
        "Dívida de código": "#88CCEE",
        "Dívida de desing": "#DDCC77",
        "Dívida de documentação": "#CC6677",
        "Dívida de pessoa": "#AA4499",
        "Dívida de requisitos": "#882255",
        "Dívida de teste": "#DFFF00"
    }

    for (let i in colors) {
        const flexIntens = document.createElement('div')

        const cube = document.createElement('div')
        const p = document.createElement('p')

        cube.classList.add('legend')
        cube.style.background = colors[i]
        p.innerHTML = i

        flexIntens.appendChild(cube)
        flexIntens.appendChild(p)

        container.appendChild(flexIntens)

    }
}