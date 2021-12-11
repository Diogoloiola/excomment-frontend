import { Table as TableStyled, Select } from './style'

function formatUrl(url, tagName) {
    return `${url}/archive/refs/tags/${tagName}.zip`
}

function createOptionTable(releases, url) {
    if (releases.length) {
        let flag = 0
        return releases.map((release, j) => {
            if (!flag) {
                flag = 1;
                return (
                    <option key={j + 10} value={''}>-</option>
                )
            }
            if (release.name && flag) {
                return (
                    <option key={j + 10} value={formatUrl(url, release.name)}>{release.name}</option>
                )
            }
        })
    }
    return <option value=''>Sem releases</option>
}

export default function Table({ data }) {
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
                                    <Select>
                                        {createOptionTable(element.releases, element.url)}
                                    </Select>
                                </th>
                                <th>
                                    Download
                                </th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </TableStyled>
    )
}