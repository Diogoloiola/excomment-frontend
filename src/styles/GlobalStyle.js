const { createGlobalStyle } = require("styled-components");

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
        background-color: #E5E5E5;
    }
    html, body, #root{
        height: 100%;
    }
    .link-card {
        width: 272px;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #fff;
        border-radius: 5px;
        cursor: pointer;
        color: #000;
        text-decoration: none;
    }
`;
