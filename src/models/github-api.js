export default class GithubApi {
    constructor(urlApi, axios, conditional, token) {
        this.urlApi = urlApi
        this.axios = axios
        this.conditional = conditional
        this.axios.defaults.headers.common = { 'Authorization': `${token}` }
    }
    async consultApi(url) {
        try {
            const { data } = await this.axios.get(url)
            return data
        } catch (error) {
            return error
        }
    }
    async getRepositories(fields) {
        const finalUrl = this.urlApi + this.formatQuery(fields)
        const repositories = await this.consultApi(finalUrl)
        const releases = await this.getReleases(repositories.items)
        return this.formatObjToResponse(repositories.items, releases)
    }

    async getReleases(repositories) {
        const urls = []
        repositories.forEach(repository => {
            urls.push(this.axios.get(repository.releases_url.replace('{/id}', '')))
        })
        return await Promise.all(urls)
    }

    formatQuery(fields) {
        let query = '?q='
        for (let field in fields) {
            if (fields[field]) {
                query += this.conditional[field](fields[field])
            }
        }
        return query
    }

    formatObjToResponse(repositories, releases) {
        const result = []
        repositories.forEach((repository, i) => {
            const name = repository.html_url.replace('https://github.com/', '')
            result.push({
                name,
                releases: releases[i].data,
                url: repository.html_url
            })
        })
        return result
    }
}