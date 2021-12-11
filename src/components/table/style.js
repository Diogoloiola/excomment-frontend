import styled from 'styled-components';

export const Table = styled.table `
  margin-top: 20px;
  margin-bottom: 30px;
  border-collapse: collapse;
  width: 100%;
  thead, tbody th, td {
    text-align: center;
    padding: 10px 15px;
  }
  tbody tr:nth-child(odd) {
    background-color: #F3F2F1;
  }
`

export const Select = styled.select `
    width: 60%;
    display: block;
    padding: 10px;
    margin: auto;
    border: none;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
`