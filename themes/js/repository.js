export let repository = {
    getData(){
        Promise.all([this.getDataWithHeuristics(), this.getDataWithoutHeuristics()])
        .then(results=> {
            this.listData(results[0],'with-heuristics')
            this.listData(results[1],'without-heuristics')
        });
    },
    getDataWithHeuristics(){
        return axios.get('http://localhost:3000/projects/with')
    },
    getDataWithoutHeuristics(){
        return axios.get('http://localhost:3000/projects/without')
    },
    listData(info, id){

        let container = document.getElementById(id)
        
        const {data} = info


        for(let i in data){
            let containerForm = document.createElement('div')
            let input = document.createElement('input')
            let label = document.createElement('label')

            containerForm.classList.add('form-check')
            input.value = data[i].id
            input.type = "checkbox"
            input.classList.add('form-check-input')
            label.innerHTML = data[i].name

            containerForm.appendChild(input)
            containerForm.appendChild(label)

            container.appendChild(containerForm)
        }
    }
}