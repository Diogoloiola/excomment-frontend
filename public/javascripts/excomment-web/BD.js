import {formatQueryTheAmountTD} from './utils.js'
import {chart} from './chart.js'

export let BD = {
    btnSearch: document.querySelector('#search-repository'),
    searchTheAmountTD(){
       const inputs = document.querySelectorAll('input:checked')
       const promisesConsults = formatQueryTheAmountTD(inputs)
       
       Promise.all(promisesConsults)
        .then((results)=> {
            chart.typeGraphic(1, results, inputs)
        });


    },
    load(){
        this.btnSearch.onclick = this.searchTheAmountTD.bind(this)
    }
}