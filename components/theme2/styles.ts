import styled from 'styled-components';
import { media } from '../theme/media';

export const Container = styled.div`
    background: linear-gradient(to bottom,#5356ff1f 0%,#ffffff 70%);
    color: #3f4554;
    min-height: 100vh;


`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;

    ${media.greaterThan('sm')``}
    ${media.greaterThan('md')``}
    ${media.greaterThan('lg')``}
    ${media.greaterThan('xl')`
        margin: auto;
        max-width: 980px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;

    `}

    ${media.greaterThan('xxl')`
        max-width: 1580px;
        
        h1 {
            font-size: 46px;
        }
        h2 {
            font-size: 36px;
        }
        p {
            font-size: 30px;
        }
    `}
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column-reverse;

    ${media.greaterThan('sm')``}
    ${media.greaterThan('md')``}
    ${media.greaterThan('lg')`
        flex-direction: row;
    `}

    ${media.greaterThan('xl')``}
    ${media.greaterThan('xxl')``}

`;

export const Sidebar = styled.div`
        background-color: #d9d9ff;
        margin: 10px 0;
        color: #3f4554;

        div {
            padding-right: 10px;
            margin: 20px 40px;
            text-decoration: none;

            h2 {
                
                font-size: 18px;
                margin: 15px 0px;
                color: #000;
                font-weight: 400;
                text-decoration: underline;

                &:hover {
                    color: #000;
                }
            }
        }

        .121{
            font-size: 16px;
            margin: 15px 0px;
            color: #000;
            font-weight: 400;
            text-decoration: underline;

            &:hover {
                color: #3f4554;
            }
        }

    ${media.greaterThan('sm')`
        div {
            margin: 20px 60px;
        }

    `}

    ${media.greaterThan('md')`
        div {
            margin: 20px 80px;
        }

    `}

    ${media.greaterThan('lg')`
        display: block;
        width: 180px;
        border-right: 1px solid #16195C;
        background-color: unset;
        margin: 0;

        div {
            padding-right: 10px;
            margin: 80% 0px;
            text-decoration: none;
        }

        div h2{
            font-size: 14px;
            margin: 15px 0px;
            font-weight: 400;
            text-decoration: underline;
        }
    `}

    ${media.greaterThan('xl')`
        width: 180px;
        border-right: 1px solid #16195C;

        div {
            padding-right: 10px;
            margin: 80% 0px;
        text-decoration: none;
        }

        div h2{
            font-size: 16px;
            margin: 15px 0px;
            font-weight: 400;
            text-decoration: underline;

            &:hover {
                color: #3f4554;
            }
        }
    `}

    ${media.greaterThan('xxl')`
        width: 280px;
        div h2 {
            font-weight: 300;
            font-size: 24px;
        }
    `}
    
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 20px;
    padding-top: 40px;
    padding-right: 20px;
    margin-bottom: 40px;
    color: #3f4554;

    h1 {
        font-size: 34px;
        margin-bottom: 35px;
    }

    h2 {
        margin-top: 50px;
        margin-bottom: 30px;
        font-size: 28px;
        font-weight: 600;
    }
    h3 {
        margin: 60px 40px 20px 40px;
        font-size: 22px;
        font-weight: 500;
    }
    .imgCenter {
        display: flex;
        justify-content: center;
        margin: 40px 0;
    }
    img{
        border: 1px solid #0000004a;
    }
    .underline {
        text-decoration: underline;
    }

    p {
        font-size: 18px;
    }

    .spaceOnText{
        margin: 25px 10px 35px 10px;
    }

    div a {
            color: #000;
            &:hover {
                color: #3f4554;
            }
    }

    ${media.greaterThan('sm')`
        padding-left: 30px;
        padding-top: 40px;
        padding-right: 30px;
    `}
    ${media.greaterThan('md')`
        padding-left: 40px;
        padding-top: 40px;
        padding-right: 40px;
    `}
    ${media.greaterThan('lg')``}
    ${media.greaterThan('xl')`
        
        padding-left: 40px;
        padding-top: 40px;
    `}
    ${media.greaterThan('xxl')``}
    
`;