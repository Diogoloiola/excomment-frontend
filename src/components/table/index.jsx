import { useState } from 'react'
import { Table as TableStyled, Select } from './style'

function formatUrl(url, tagName, type = 1) {
    if(type === 1)
        return `${url}/archive/refs/tags/${tagName}.zip`
    else if(type === 2)
        return `${url}/archive/refs/heads/main.zip`
}

function createOptionTable(releases, url) {
    if (releases.length) {
        // eslint-disable-next-line
        return releases.map((release, j) => {
            if (release.name) {
                return (
                    <option key={j + 10} value={formatUrl(url, release.tag_name)}>{release.name}</option>
                )
            }
        })
    }
    return <option value={formatUrl(url, '', 2)}>Master</option>
}

function getInitialValues(data) {
    const result = []

    data.forEach(element => {
        const name = element.name
        result.push({[name]: null})
    })
    return result
}

function handleSelectChange(urls, setUrls, name, url){
    setUrls({
        ...urls,
        [name]: url
    })
}
export default function Table({ data }) {

    const [urls, setUrls] = useState(getInitialValues(data))

    return (
        <TableStyled>
            <thead>
                <tr>
                    <th scope="col">Indice</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Release</th>
                    <th scope="col">Download</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((element, index) => {
                        return (
                            <tr key={index + 1}>
                                <th>{index + 1}</th>
                                <th>{element.name}</th>
                                <th>
                                    <Select onChange={(e) => handleSelectChange(urls, setUrls, element.name, e.target.value)}>
                                        <option value="">-</option>
                                        {createOptionTable(element.releases, element.url, setUrls, element.url)}
                                    </Select>
                                </th>
                                <th>
                                    <a href={urls[`${element.name}`]}>{element.name}</a>
                                </th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </TableStyled>
    )
}