import styled from "styled-components";
import { media } from "../../components/theme/media";

export const Container = styled.div`
    p {
        color: #3f4554;

    }
    h1 {
        margin:0;
        padding: 0;
        font-size: 30px;

    }
    hr {
        height: 1px;
        border: 0;
        background-color: #3f4554;
        margin: 30px 0 15px 0;
    }

    label {
        color: #3f4554;
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
    div small {
        color: #FFF;
    }

    button {
        background-color: #00c144;
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
        padding: 10px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
    
    .backButton{
        font-size: 16px;
        text-decoration: none;
        padding: 10px 40px;
        color: #878787;
        margin: 20px 10px;
    }

    div.buttons{
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: baseline;
        margin-bottom: 25px;
    }

    div.buttons span{
        cursor: pointer;
    }

    div.buttons > * {
        border-radius: 30px;
        border: 1px solid #878787;
        width: -webkit-fill-available;
    }

    select {
        outline: 0;
    }
    
    ${media.greaterThan('sm')`
        div.buttons {
            flex-direction: row;
        }
        
        .backButton {
            margin: 0 30px;
        }

    `}
    
    ${media.greaterThan('md')`
        div.buttons > * {
            border-radius: 30px;
            border: 1px solid #878787;
            width: auto;
        }
    `}

`;