import styled from 'styled-components';
import { media } from '../theme/media';

export const Container = styled.div`
        background-color: #000076;
        display: flex;
        flex-direction: column;
        text-decoration: none;

        p {
            font-size: 16px;
            margin: 0 0 0 0px;
        }

        a {
            text-decoration: none;
            font-size: 18px;
            color: #cdcdcd;

            &:hover{
            color: #FFF;
            -webkit-transition: all 0.1s ease-in-out;
            -ms-transition: all 0.1s ease-in-out;
            -moz-transition: all 0.1s ease-in-out;
            -o-transition: all 0.1s ease-in-out;
            transition: all 0.1s ease-in-out;
            text-decoration: underline;
            }
        }

        ul {
            list-style-type: none;
            margin: 0;
        }

        li {
            margin: 5px 0;
            padding: 5px 0;
        }
        
        small {
            margin: 20px 10px 10px 10px;
            display: flex;
            background-color: inherit;
            color: #c3c3c3;
            justify-content: center;
        }

        ${media.greaterThan('sm')``}
        ${media.greaterThan('md')``}
        ${media.greaterThan('lg')``}
        ${media.greaterThan('xl')`
            a {
                font-size: 16px;
            }
        `}
        ${media.greaterThan('xxl')`
            a {
                font-size: 24px;
            }
            small {
                font-size: 22px;
            }

        `}
        
`;