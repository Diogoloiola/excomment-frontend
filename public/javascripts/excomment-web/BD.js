import { formatQuery } from './utils.js'
import { chart } from './chart.js'

export let BD = {
    btnSearch: document.querySelector('#search-repository'),
    search() {
        const chartType = document.querySelector('#graphic-options').selectedIndex

        if (chartType !== 0) {
            const inputs = document.querySelectorAll('input:checked')
            if (chartType < 6 && inputs.length > 1) {
                alert('Selecione apenas um repositório')
            } else {
                const promisesConsults = formatQuery(chartType, inputs)

                const container = document.querySelector('#exampleModal');
                const modal = bootstrap.Modal.getInstance(container);
                Promise.all(promisesConsults)
                    .then((results) => {
                        chart.typeGraphic(chartType, results)
                        modal.hide()
                    });
            }
        } else {
            alert('O tipo do gráfico não foi informado')
        }
    },
    load() {
        this.btnSearch.onclick = this.search.bind(this)
    }
}