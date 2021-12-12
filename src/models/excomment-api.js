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
}