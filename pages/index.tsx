import type { NextPage } from 'next'
import Link from 'next/link'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Theme } from '../components/theme'
import { setCurrentStep, setNameAuthor1, setRefType1, setRefType2 } from '../redux/FormContext'
import swal from 'sweetalert';
import { SelectOptions } from '../redux/selectOptionStep1'
import styled from "styled-components";

const Home: NextPage = () => {
    const dispatch = useDispatch();
    const { refType1, refType2 , nameAuthor1} = useSelector((state: any) => state.allData);
    const [title, setTitle] = useState("Referência em ABNT | Faça Agora!");

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        setTitle('Referência em ABNT | Faça Agora!')
        dispatch(
            setCurrentStep(1))
    }, [title])

    const handleNextStep = () => {
        if (refType2 === '') {
            swal("Tipo não Selecionado!", "Você precisa dizer de onde a referência vem!", "warning");
        }
        else if (refType1 !== '' || refType2 !== '') {
            //<Link href='./Step2' />
        }
        else {
            swal("Tipo não Selecionado!", "Você precisa dizer de onde a referência vem!", "warning");
        }
    };

    const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(
            setRefType1(
                e.target.value
            ));
    }

    const handleAuthorName1 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setNameAuthor1(
                e.target.value
            ));
    }


    const Container = styled.div`
    
    }

    div.selectStep1 {
        padding: 20px 0;
    }

    h1 {
        margin:0;
        padding: 0;

    }
    hr {
        height: 1px;
        border: 0;
        margin: 30px 0;
    }

    label {

        select {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 15px 10px;
            border: 1px solid #585858;
            border-radius: 10px;
            outline: 0; 
            font-size: 18px;
        }
    }

    button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 16px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
        border: 1px solid #FFF;
    }
    
    div.buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: baseline;
        margin-bottom: 25px; 
    }

`;

    return (
        <Theme>
            <Container>

                <h1>Primeiro, Escolha de Onde Vem a Sua Referência</h1>
                <p>Escolha uma das opções da lista abaixo</p>
                
                <hr />

                <div className='selectStep1'>
                    <label>
                        De onde vem sua Referência?
                        <select
                            autoFocus
                            onChange={handleOptionChange}
                            value={refType1}
                        >
                            <option value='' disabled>Essa referência vem de(a) ...</option>
                            <option value='10'>Internet - Ex: Wikipédia, Sites, Podcasts, Blogs, Redes Sociais, Email</option>
                            <option value='20'>Livro ou E-Book</option>
                            <option value='30'>Mídia - Ex: Vídeo</option>
                            <option value='40'>Jornal ou Revista - Ex: Reportagem, Entrevistas, Artigos</option>
                            <option value='50'>Trabalhos Acadêmicos / TCC</option>
                        </select>
                    </label>

                </div>

                <SelectOptions />

                <div className='buttons'>
{refType1}{refType2}
                    <Link href='./step2'>
                        <button onClick={handleNextStep}>Próximo</button>
                    </Link>
                </div>
            </Container>

        </Theme>
    )
}

export default Home
