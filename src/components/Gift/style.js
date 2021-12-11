import styled from "styled-components";

export const Container = styled.section `
  width: 90%;
  height: 80%;
  background-color: #fff;
  border-radius: 5px;
  margin: auto;
  margin-top: 30px;
  position: relative;
`;

export const Header = styled.header `
  width: 100%;
  height: 10%;
  background-color: #2e2e3a;
  color: #fff;
  display: flex;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  span {
    font-size: 25px;
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 20px;
  }
`

export const Content = styled.section `
  overflow: auto;
  width: 100%;
  height: 90%;
  padding: 15px;
  box-sizing: border-box;
`

export const Select = styled.select `
    width: 100%;
    padding: 10px;
    display: block;
    border: none;
    outline: none;
    border: 1px solid #E0E0E0;
    background-color: #fff;
`

export const FormGroup = styled.section `
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const Form = styled.section `
  width: 100%;
  label {
    display: block;
    margin-bottom: 10px;
  }
`

export const W24 = styled.div `
  width: 24%;
  label {
    display: block;
    margin-bottom: 10px;
  }
`

export const W49 = styled.div `
  width: 49%;
  label {
    display: block;
    margin-bottom: 10px;
  }
`

export const W75 = styled.div `
  width: 75%;
  label {
    display: block;
    margin-bottom: 10px;
  }
`

export const Button = styled.button `
  padding: 10px 15px;
  margin-top: 30px;
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #0B5ED7;
  color: #0B5ED7;
`