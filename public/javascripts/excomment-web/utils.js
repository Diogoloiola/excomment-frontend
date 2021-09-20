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
    else if (typeUrl === 3)
        return `${URL_API}/jsonHierarchical/${id}/database/with?flag=true&colors=true`
    else if (typeUrl === 4)
        return `${URL_API}/jsonHierarchical/${id}/database/with?flag=false&type=2`
    else if (typeUrl === 5)
        return `${URL_API}/dt/project/${id}/database/with`
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


export function createLegendForGraphic(idContainer) {
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

export function factoryDataBarChart(data) {
    return {
        chart: {
            type: 'column'
        },
        xAxis: {
            categories: ['', 'DT1', 'DT2', 'DT3', 'DT4', 'DT4', 'DT5', 'DT6', 'DT7', 'DT8', 'DT9']
        },
        title: {
            text: ''
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Quantidade de dividas Apache Ant'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        legend: {
            align: 'center',
            x: 0,
            verticalAlign: 'bottom',
            y: 10,
            floating: true,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: data
    };
}

export function technicalDebtForIndex(tdType) {
    switch (tdType) {
        case 'architecture debt':
            return 0
            break;
        case 'build debt':
            return 1;
            break;
        case 'code debt':
            return 2;
            break;
        case 'requirement debt':
            return 3
            break;
        case 'defect debt':
            return 4
            break;
        case 'design debt':
            return 5;
            break;
        case 'documentation debt':
            return 6;
            break;
        case 'test debt':
            return 7;
            break;
    }
}