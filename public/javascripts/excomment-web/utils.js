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