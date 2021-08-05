import { removeNumberFromString } from './utils.js'
import { URL_API } from './consts.js'

export let repository = {
    getData() {
        Promise.all([this.getDataWithHeuristics()])
            .then(results => {
                this.listData(results[0], 'with-heuristics')
            });
    },
    getDataWithHeuristics() {
        return axios.get(`${URL_API}/projects/with`)
    },
    getDataWithoutHeuristics() {
        return axios.get(`${URL_API}/projects/without`)
    },
    listData(info, id) {

        let container = document.getElementById(id)

        const { data } = info


        for (let i in data) {
            let containerForm = document.createElement('div')
            let input = document.createElement('input')
            let label = document.createElement('label')

            containerForm.classList.add('form-check')
            input.value = data[i].id
            input.setAttribute('type-repository', id)
            input.type = "checkbox"
            input.classList.add('form-check-input')
            label.innerHTML = removeNumberFromString(data[i].name)

            containerForm.appendChild(input)
            containerForm.appendChild(label)

            container.appendChild(containerForm)
        }
    }
}