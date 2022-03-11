import { Theme } from '../../components/theme1variant';
import { useEffect, useState } from 'react';
import { RefInputs } from '../../redux/FormInputs'
import { Button } from '@mantine/core';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { setCurrentStep } from '../../redux/FormContext'
import styled from "styled-components";
import { media } from "../../components/theme/media";
import { NextPage } from 'next';

const step2: NextPage = () => {
    const dispatch = useDispatch();
    const { refType1, refType2, yearPublic, nameAuthor2, surAuthor1 } = useSelector((state: any) => state.allData);
    const [title, setTitle] = useState("Passo 2 | Referência em ABNT");

    useEffect(() => {
        document.title = title;
        setTitle('Passo 2 | Referência em ABNT');
        window.scrollTo(0, 0);
        //if (refType1 === '' || refType2 === '') {
        //navigate('/');
        //}
        dispatch(setCurrentStep(2))
    }, [title])

    //style

    const Container = styled.div`
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

    .divWarning{
        border: 2px solid red;
        border-radius: 4px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .h1Warning{
        font-size: 70px;
        margin: 0 0 20px 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }
    .h2Warning{
        font-size: 26px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        margin: 0 0 30px 0;
    }
    .pWarning{
        margin-bottom: 30px ;
        font-weight: 400;
    }
    .backButtonWarning{
        color: #FFF;
        background-color: #5830f9;
        font-size: 16px;
        font-weight: 600;
        padding: 20px 40px;
        border: 1px solid grey;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
        text-decoration: none;
        margin: 0 10px 0 10px;
        border: 2px solid white;
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 30px 0;

        &:hover {
            transition: all 0.1s ease-out;
            transform: scale(1.02)
        }

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

    const handleNextStep = () => {
        if (yearPublic !== 0 || nameAuthor2 !== '' || surAuthor1 !== '') {
            <Link href='/step3' />
        }
        else {
            swal("Cade as Informações?", "Você precisa preencher as informações da referência!", "warning");
        }
    };

    return (
        <Theme>
            <Container>

                <h1>Certo. Agora Falta Algumas Outras Infomações.</h1>

                <p>Preencha os dados abaixo. Após o preenchimento, clique em "Formatar Referência".</p>

                <hr />

                <RefInputs />

                <div className='buttons'>
                    <Link href="/" >
                        <span className='backButton'>Voltar</span>
                    </Link>
                    <Link href='./step3'>
                        <Button color="teal" size="lg" onClick={handleNextStep}>Formatar Referência</Button>
                    </Link>
                </div>
            </Container>

        </Theme>
    );
}
export default step2