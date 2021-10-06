import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const LeftSide = styled.section`
  width: 5%;
  height: 100%;
  background-color: #1b1d29;
  ul {
    list-style-type: none;
  }
  ul li {
    display: block;
    box-sizing: border-box;
    text-align: center;
    padding: 10px 15px;
    cursor: pointer;
  }
`;

export const RightSide = styled.section`
  width: 95%;
  height: 100%;
`

export const ContainerIcon = styled.span`
  color: #fff;
  font-size: 20px;
`;
