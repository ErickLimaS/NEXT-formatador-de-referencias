import styled from 'styled-components';
import { media } from '../theme/media';

export const Container = styled.div`

    background-color: #00008d ;
    padding: 0px 15px;
    border-bottom: 1px solid #16195C;
    display:flex; 
    justify-content: space-between;
    align-items: center;
    font-size: 1px;
    flex-direction: row-reverse;

    .buttonMobile {
        background-color: inherit;
    }

    .mantine-Drawer-header {
        list-style-type: none;
        background-color: #000;
        font-size: 22px;
        padding: 5px 0;
        margin: 5px 0;
    }
    
    .menuDesktop button {
        background-color: #5356ff;
    }

    .menuDesktop {
        display: none;
    }

    .dropdown {
        display: none;
    }
    
    .divHeaderName {
        display: flex;
        margin: 5px 0;
        align-items: center;
        flex-direction: row-reverse;

    }

    .divMenuMobile {
        padding: 10px;
    }

    .headerName {
        font-size: 22px;
        color: #FFF;
        display: flex;
        justify-content: center;
        margin: 20px 5px 10px 5px;
    }

    ul {
        display: flex;
        padding: 0px;
    }

    li {
        list-style: none;
        padding: 10px 0;
        margin: 0px 10px;
        border-bottom: 1px solid rgb(188, 217, 236);
        font-size: 20px;

        &:hover{
            transform: scale(1.05, 1.05);
            -webkit-transition: all 0.1s ease-in-out;
            -ms-transition: all 0.1s ease-in-out;
            -moz-transition: all 0.1s ease-in-out;
            -o-transition: all 0.1s ease-in-out;
            transition: all 0.1s ease-in-out;
        }
    }

    li a, .headerName{
        text-decoration: none;
    }

    li a{
        color: #FFF ;

        &:hover{
            color: #B8B8D4;
            -webkit-transition: all 0.1s ease-in-out;
            -ms-transition: all 0.1s ease-in-out;
            -moz-transition: all 0.1s ease-in-out;
            -o-transition: all 0.1s ease-in-out;
            transition: all 0.1s ease-in-out;
        }
    }

    .imgLogo {
        width: 40px;
    }

    ${media.greaterThan('sm')``};

    ${media.greaterThan('md')`
        flex-direction: row;

        
        .buttonMobile {
            display: none;
        }

        .divHeaderName {
            flex-direction: row;
        }
        .headerName {
            font-size: 24px;
        }

        .menuDesktop {
            display: block;
        }
        .menuMobile{
            display: none;
        }
        .divMenuMobile {
            border: unset;
        }
        
        li  {
            font-size: 17px;
        }
    `};

    ${media.greaterThan('lg')`


        .dropdown {
            display: block;
            padding: 25px;
            font-size: 18px;
            color: #FFF;
            cursor: pointer;

            &:hover {
                color: #b7b5b5;
                transition: all 0.1s ease-in-out
            }
        }

        .headerName {
            font-size: 26px;
        }

        .dropdown-content{
            display: none;
            position: absolute;
            background-color: #dbdbdb;
            margin-top: 2vh;
            margin-left: -10vh;
            margin-right: 2vh;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
            border-radius: 2px;
            color: #000;
            min-width: 200px;
            max-width: 210px;
        }

        .dropdown:hover .dropdown-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all 1s ease-in-out;
        }

        .dropdown:after{
            content: '';
            border: 8px solid transparent;
            border-top: 8px solid white;
            margin-left: 5px;
            margin-bottom: 0px;
            display: inline-block;
            vertical-align: bottom;
        }

        .dropdown-content a {
            text-decoration: none;
            padding: 15px;
            min-width: 20px;

            &:hover {
                transform: scale(1.05);
            }
        }

        .dropdown-content a:nth-child(odd) {
            background-color: #FFF;
            
            &:hover {
                transform: scale(1.05);
            }
        }
    `}

    ${media.greaterThan('xl')`
        background-color: #00008d ;
        border-bottom: 1px solid #16195C;
        display:flex; 
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        a {
        font-size: 17px;
        }

        .divHeaderName {
            display: flex;
            margin: 15px 0;
        }

        .headerName {
            font-size: 28px;
            color: #FFF;
            display: flex;
            justify-content: center;
            margin: 0 5px;
        }


        ul {
            display: flex;
        }

        li {
            list-style: none;
            padding: 10px;
            margin: 0px 15px;
            border-bottom: 1px solid rgb(188, 217, 236);
            font-size: 20px;

            &:hover{
                transform: scale(1.05, 1.05);
                -webkit-transition: all 0.1s ease-in-out;
                -ms-transition: all 0.1s ease-in-out;
                -moz-transition: all 0.1s ease-in-out;
                -o-transition: all 0.1s ease-in-out;
                transition: all 0.1s ease-in-out;
            }
        }

        li a, .headerName{
            text-decoration: none;
        }

        li a{
            color: #FFF ;

            &:hover{
                color: #B8B8D4;
                -webkit-transition: all 0.1s ease-in-out;
                -ms-transition: all 0.1s ease-in-out;
                -moz-transition: all 0.1s ease-in-out;
                -o-transition: all 0.1s ease-in-out;
                transition: all 0.1s ease-in-out;
            }
        }

        .imgLogo {
            width: 40px;
        }
    `}

    ${media.greaterThan('xxl')`
        .headerName {
            font-size: 32px;
        }

        .divHeaderName {
            margin: 20px 0;
    
        }
        
        ul li {
            font-size: 24px;
        }
        
    `};
`;