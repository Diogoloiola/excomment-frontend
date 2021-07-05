import {factoryDataBarChart, technicalDebtForIndex} from './utils.js'
import {chartBarData} from './globalVariables.js'

export let chart = {
    typeGraphic(key, data, inputs){
        switch (key) {
            case 1:
                this.drawBarChart(data,inputs)
            break;
        }
    },
    drawBarChart(debtsFromRepositories, inputs){
        debtsFromRepositories.forEach(({data})=>{
           for(let i in data){
               chartBarData[technicalDebtForIndex(i)].data.push(data[i])
           }
        })
        Highcharts.chart('chart', factoryDataBarChart(chartBarData))
    }
}