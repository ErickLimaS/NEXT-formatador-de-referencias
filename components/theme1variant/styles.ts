import styled from 'styled-components';
import { media } from '../theme/media'

export const Container = styled.div<{ bgColor: string }>`

    background-color: #faf9ff;
    color: #FFF;
    min-height: 100vh;

    .divMainText {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 0 15px 0;
        backgroundImage: 'url(/logoxl.png)';
        backgroundPosition: 'center';
        backgroundSize: 'cover';
        backgroundRepeat: 'no-repeat';
        width: fit-content;

        .imgLogoxl {
            width: 0px;
            margin: 0 20px;
            margin-top: -10000px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            z-index: 0;
        }
    }

    .mainText{
        margin: 10px 0 15px 0;
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        border-radius: 4px;
        font-family: "Nunito Sans", sans-serif;

        p {
            font-size: 24px;
            color: #000;
        }

        #p2 {
            display: none;
        }
        
      }

        .buttonAMainText {
            text-decoration: none;
            background-color: #d9d9ff;
            padding: 15px;
            margin: 25px 0 0 0;
            border: 1px solid #232399;
            border-radius: 4px;
            color: #232399;
            font-size: 18px;
            font-weight: 600;
            font-family: "Nunito Sans", sans-serif;
            transition: all 0.2s ease-out;

            :hover {
                transform: scale(1.05);
                background-color: #cfcfcf;
            }
        }
        
        h1 {
            font-size: 54px;
            font-weight: 600;
            width: 280px;
            color: #3f4554;
        }

        p {
            font-weight: 500;
            margin-left: 10px;
            margin-right: 10px;
            font-size: 20px;
        }
        p:last-child {
            margin-left: 10px;
            margin-right: 10px;
        }

        #disapearP {
            margin: 10px 0;
            padding: 10px;
            background-color: #00000090;
            border-top: 1px solid #FFF;
            border-bottom: 1px solid #FFF;
            text-decoration: none;
        }
    }
    ${media.greaterThan('sm')`
        #disapearP{
            display: none;
        }
        .divMainText {
            .divImgLogoxl {
                margin-top: -120px;
                margin-bottom: 100px;
            }

            .imgLogoxl{
                width: 320px;
            }
        }
        .mainText{
            background-color: #faf9ff9e;
            padding: 20px;
            #p2 {
                display: block;
                text-decoration: underline;
            }
            
        }

        .mainText
            #p1{
                display: block;
            }
        }

        h1 {
            width: unset;
        }
    `}

    ${media.greaterThan('md')`

    `}

    ${media.greaterThan('lg')`
        .divMainText {
            flex-direction: row;
            background-color: #5356ff;

            h1 {
                color: #FFF;
                font-size: 36px;
            }

            p {
                color: #FFF;
                margin-left: 40px;
                margin-right: 40px;

            }
            .buttonAMainText {
                background-color: #FFF;
                color: #2c2ce1;
                font-weight: 500;
            }
            .mainText {
                background-color: unset;
                z-index: 0;
                border-radius: 0px;
            }
            .divImgLogoxl {
                margin-top: 0px;
                margin-bottom: 0px;
            }

            .imgLogoxl {
                width: 320px;
                z-index: 1;
                margin-top: 0;
                filter: blur(0px);
            }
        }

    `}
    ${media.greaterThan('xl')`

        color: #FFF;
        min-height: 100vh;

        .divMainText {
            display: flex;
            align-items: center;
            flex-direction: row;
            margin: 10px 0 15px 0;
            padding: 20px;
            min-width: 100vh;
            width: auto;

            .imgLogoxl {
                width: 420px;
                filter: blur(0px);
                margin: 0 20px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }
        }

        .mainText{
            margin: 10px 0 15px 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: "Nunito Sans", sans-serif;
            
            h1 {
                font-size: 42px;
                font-weight: 500;
                width: 500px;
                margin-left: -100px;
                
                margin-top: 0px;
            }

            p {
                margin-left: 80px;
                margin-right: 80px;
                font-size: 20px;
                font-weight: 100;
                margin-top: 10px;
                margin-bottom: 10px;
                width: 600px;
            }
            p:last-child {
                margin-left: 80px;
                margin-right: 80px;
                margin-top: 10px;
            }
        }

    `}
    
    ${media.greaterThan('xxl')` 
        .divMainText {
            justify-content: center;

            h1 {
                font-size: 62px;
                width: 900px;
            }

            p {
                width: 1000px;
                font-size: 32px;
            }
            .buttonAMainText {
                font-size: 28px;

            }

            .imgLogoxl {
                width: 500px;
            }
        }

    `}

`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    ${media.greaterThan('sm')` `}
    ${media.greaterThan('md')` `}
    ${media.greaterThan('xl')` 
        margin: auto;
        max-width: 980px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;    

    `}

    ${media.greaterThan('xxl')` 
        h1 {
            font-size: 46px;
        }    

        p {
            font-size: 36px;
        }

        label, button, div.mantine-TextInput-description {
            font-size: 32px;
        }

        .mantine-Text-root, .mantine-TextInput-description, .mantine-pb0o5j{
            font-size: 32px;
        }

        max-width: 1580px;
    `}

    
`;

export const Steps = styled.div`
    flex: 1;
    display: block;

    ${media.greaterThan('xs')`
        
    `}

    ${media.greaterThan('md')`
    `}

    ${media.greaterThan('xl')`
        display: flex;
    `}

    ${media.greaterThan('xxl')`
        
    `}

`;

export const Sidebar = styled.div`
    top: 10px;
    display: none;


    ${media.greaterThan('xs')` 
        border-top: 1px solid #303540;
        border-bottom: 1px solid #303540;
        display: flex;
        background-color: #5356ff3b;
        overflow: auto;
        margin-top: 10px;
    `}
    
    ${media.greaterThan('sm')`
        display: flex;

    `}

    ${media.greaterThan('md')` 
        display: flex;
    `}

    ${media.greaterThan('xl')`
    
        border-top: none;
        border-bottom: none;
        background-color: unset;
        display: block;
        width: 250px;
        position: sticky; 
        top: 10px;
        height: 300px;
    
    `}
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 20px;
    padding-top: 40px;
    padding-right: 20px;
    color: #3f4554;

    h1 {
        color: #3f4554;
        font-size: 36px;
    }

    hr {
        background-color: #3f4554;
    }

    p {
        color: #3f4554;
        font-size: 20px;
    }

    ${media.greaterThan('xs')` 

    `}
    
    ${media.greaterThan('md')` `}

    ${media.greaterThan('xl')` 
    
        border-left: 1px solid #3f4554;
        flex: 1;
        padding-left: 40px;
        padding-top: 40px;
        padding-right: 0px;
    `}
    ${media.greaterThan('xxl')` `}
    
`;