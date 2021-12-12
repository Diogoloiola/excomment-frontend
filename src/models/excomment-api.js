export default class ExcommentApi {
    constructor(axios, url) {
        this.axios = axios
        this.url = url
    }

    async getProjects() {
        try {
            const { data } = await this.axios.get(`${this.url}/projects/with`)
            return data
        } catch (error) {
            return error
        }
    }

    async getHierarchicalJson(typeUrl, id) {
        try {
            const { data } = await this.axios.get(this.formatUrlToGet(parseInt(typeUrl), id))
            return data
        } catch (error) {
            return error;
        }
    }

    formatUrlToGet(typeUrl, id) {
        if (typeUrl === 1)
            return `${this.url}/jsonHierarchical/${id}/database/with?flag=false`
        else if (typeUrl === 2)
            return `${this.url}/jsonHierarchical/${id}/database/with?flag=true`
        else if (typeUrl === 3)
            return `${this.url}/jsonHierarchical/${id}/database/with?flag=true&colors=true`
        else if (typeUrl === 4)
            return `${this.url}/jsonHierarchical/${id}/database/with?flag=false&type=2`
        else if (typeUrl === 5 || typeUrl === 6)
            return `${this.url}/dt/project/${id}/database/with`
    }
}