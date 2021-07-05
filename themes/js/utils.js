export function removeNumberFromString(string){
    return string.replace(/[0-9]/g, '');
}

export function getDataWithAxios(url){
    return axios.get(url)
}

function formatUrlToGetTheAmountTD(attribute, id){
    if(attribute === 'with-heuristics')
        return `http://localhost:3000/dt/project/${id}/database/with`
    return `http://localhost:3000/dt/project/${id}/database/without`
}

export function formatQueryTheAmountTD(inputs){

    let axiosConsult = []

    inputs.forEach(input=>{
        const typeRepository = input.getAttribute('type-repository')
        const value = input.value
        const urlApi = formatUrlToGetTheAmountTD(typeRepository, value)
        axiosConsult.push(getDataWithAxios(urlApi))
    })

    return axiosConsult
}