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


export function technicalDebtForIndex(tdType){
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

export function factoryDataBarChart(data){
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