import styled from "styled-components";
import { media } from "../../components/theme/media";

export const Container = styled.div`
    .test {
        font-size: 20px;
    }
    .bold {
        font-weight: 900;
    }
    .copyArea {
        background-color: #FFF;
        border-radius: 4px;
        height: 180px;
        border: 2px solid #3f4554;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 25px

    }

    span.italic {
        font-style: italic;
    }

    .copyArea p {
        color: #000;
        font-family: arial;
    }

    div.buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        margin: 25px 0; 
    }

    p {
        color: #B8B8D4;

    }
    h2 {
        font-weight: 100;
        font-size: 18px;
        margin: 15px 0;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #3f4554;
        margin: 30px 0;
    }

    label {
        font-size: 13px;
        display: block;
        margin-bottom: 20px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            outline: 0; 
            font-size: 15px;
            background-color: #02044A;
        }
    }

    .buttons button {
        background-color: #00c144;
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
    
    .backButton{
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
        text-decoration: none;
        margin: 0 10px 0 10px;
        border: 2px solid white;
        width: -webkit-fill-available;

        &:hover {
            transition: all 0.1s ease-out;
            transform: scale(1.02)
        }

    }

    h2 {
        font-size: 18px;
    }
    h3 {
        font-weight: 500;

    }
    .warning {
        font-size: 16px;
        font-weight: 500;
    }
    .bWarning {
        justify-content: center;
        display: flex;
    }
    p{
        color: #3f4554;
        font-size: 20px;
    }
    #disapearP {
        
        color: #FFF;
    }

    .lastUl{
        margin-bottom: 30px;
    }

    ${media.greaterThan('sm')`
        div.buttons{
            flex-direction: row;
        }
    `}

    ${media.greaterThan('md')`
    
    .backButton{
        width: auto;
    }
    `}
`;