import { removeNumberFromString } from './utils.js'
import { URL_API } from './consts.js'

export const repository = {
    getData() {
        Promise.all([this.getDataWithHeuristics()])
            .then(results => {
                this.listData(results[0].data, 'with-heuristics')
            });
    },
    getDataWithHeuristics() {
        return axios.get(`${URL_API}/projects`)
    },
    listData(data, id) {

        const container = document.getElementById(id)

        const { projects } = data;

        for (let i in projects) {
            const containerForm = document.createElement('div')
            const input = document.createElement('input')
            const label = document.createElement('label')

            containerForm.classList.add('form-check')
            input.value = projects[i].id
            input.setAttribute('type-repository', id)
            input.setAttribute('name-reposittory', projects[i].name)
            input.type = "checkbox"
            input.name = "input"
            input.classList.add('form-check-input')
            label.innerHTML = removeNumberFromString(projects[i].name)

            containerForm.appendChild(input)
            containerForm.appendChild(label)

            container.appendChild(containerForm)
        }
    }
}