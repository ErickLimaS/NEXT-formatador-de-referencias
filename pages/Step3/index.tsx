import { Theme } from '../../components/theme1variant';
import { useEffect, useState } from 'react';
import { Alert } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { FormatedText } from '../../redux/FormatedText';
import Link from 'next/link';
import { NextPage } from 'next';
import styled from "styled-components";
import { media } from "../../components/theme/media";
import {
    setCurrentStep,
    setRefType1,
    setRefType2,
    setNameAuthor1,
    setSurAuthor1,
    setNameAuthor2,
    setSurAuthor2,
    setNameAuthor3,
    setSurAuthor3,
    setNameAuthor4,
    setSurAuthor4,
    setNameAuthor5,
    setSurAuthor5,
    setNameAuthor6,
    setSurAuthor6,
    setEtAlCheckbox,
    setTitle,
    setSubtitle,
    setUrl,
    setLocal,
    setDayAcess,
    setMonthAcess,
    setYearAcess,
    setDayPublic,
    setMonthPublic,
    setYearPublic,
    setPlacePublic,
    setPublishingComp,
    setNoDate,
    setEdition,
    setRadioCheck,
    setCompanyName,
    setResponsableBlog,
    setBlogTitle,
    setNamePodcastEpisode,
    setNamePodcast,
    setPodcastAnnouncer,
    setUserSocialMedia,
    setDisplayNameUser,
    setSocialMediaMensage,
    setRemetenteName,
    setEmailSubject,
    setDestinatario,
    setPaginationBook,
    setEditionBook,
    setDoiCheckbox,
    setDurationVideo,
    setUniDegreed,
    setUniversity,
    setNameGuest,
    setMagazine,
    setNumberMagaz,
    setAuxNewAuthor
} from '../../redux/FormContext';
import Head from 'next/head';
import Script from 'next/script';

const Step3: NextPage = () => {
    const dispatch = useDispatch();
    const { refType1, refType2 } = useSelector((state: any) => state.allData)
    const [title, setTitle] = useState("Concluído! | Referência em ABNT");

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        //if ((refType1 === '') {
        //navigate('/');
        //}
        setTitle('Concluído! | Referência em ABNT')
        dispatch(setCurrentStep(3)
        )
    }, [title])

    //style
    const Container = styled.div`
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
        div.buttons{
            flex-direction: row;
        }
    `}

    ${media.greaterThan('md')`
    
    .backButton{
        width: auto;
    }
    .backButtonWarning{
        width: 50%;
    }
    
    `}
`;

    const refreshToStep1 = () => {
        dispatch(
            setCurrentStep
                (0));
        dispatch(
            setSurAuthor1
                (''));
        dispatch(
            setNameAuthor1
                (''));
        dispatch(
            setSurAuthor2
                (''));
        dispatch(
            setNameAuthor2
                (''));
        dispatch(
            setSurAuthor3
                (''));
        dispatch(
            setNameAuthor3
                (''));
        dispatch(
            setSurAuthor4
                (''));
        dispatch(
            setNameAuthor4
                (''));
        dispatch(
            setSurAuthor5
                (''));
        dispatch(
            setNameAuthor5
                (''));
        dispatch(
            setSurAuthor6
                (''));
        dispatch(
            setNameAuthor6
                (''));
        dispatch(
            setEtAlCheckbox
                (''));
        dispatch(
            setTitle
                (''));
        dispatch(
            setSubtitle
                (''));
        dispatch(
            setUrl
                (''));
        dispatch(
            setLocal
                ('[S.I.]'));
        dispatch(
            setDayAcess
                (0));
        dispatch(
            setMonthAcess
                (''));
        dispatch(
            setYearAcess
                (0
                ));
        dispatch(
            setDayPublic
                (0));
        dispatch(
            setMonthPublic
                (''));
        dispatch(
            setYearPublic
                (0));
        dispatch(
            setPlacePublic
                ('[S.I.]')
        );
        dispatch(
            setPublishingComp
                ('[s.n.]'));
        dispatch(
            setNoDate
                ('s.d.'
                ));
        dispatch(
            setEdition
                (''));
        dispatch(
            setRadioCheck
                ('1'
                ));
        dispatch(
            setCompanyName
                (''));
        dispatch(
            setResponsableBlog
                (''));
        dispatch(
            setBlogTitle
                (''));
        dispatch(
            setNamePodcastEpisode
                (''));
        dispatch(
            setNamePodcast
                (''));
        dispatch(
            setPodcastAnnouncer
                (''));
        dispatch(
            setUserSocialMedia
                (''));
        dispatch(
            setDisplayNameUser
                (''));
        dispatch(
            setSocialMediaMensage
                (''));
        dispatch(
            setRemetenteName
                (''));
        dispatch(
            setEmailSubject
                (''));
        dispatch(
            setDestinatario
                (''));
        dispatch(
            setPaginationBook
                (''));
        dispatch(
            setEditionBook
                (''));
        dispatch(
            setDoiCheckbox
                ('0'
                ));
        dispatch(
            setDurationVideo
                (''));
        dispatch(
            setUniDegreed
                (''));
        dispatch(
            setUniversity
                (''));
        dispatch(
            setNameGuest
                (''));
        dispatch(
            setMagazine
                (''));
        dispatch(
            setNumberMagaz
                (''));
        dispatch(
            setAuxNewAuthor
                (0));

    };

    return (
        <Container>
            <Theme>

                <Head>
                    <title>Pronto, Formatada! | Referência em ABNT</title>
                    <meta charSet="utf-8" />
                    <meta name="title" content="Referência em ABNT 2022 - Faça Agora a Sua!" />
                    <meta name="description"
                        content="Formate suas referências bibliográficas usando nosso gerador com as normas ABNT mais atualizadas. Apenas copie e cole no seu trabalho a referência pronta!" />
                    <meta name="keywords"
                        content="normas abnt, referencia, gerador referencia, gerador abnt, margem abnt, como fazer referencia em abnt, formatar trabalho em abnt, referencias prontas para trabalho escolar, projeto em abnt, TCC em abnt, referencias bibliograficas, referencias bibliograficas em abnt, como fazer referencias"
                    />
                    <meta name="copyright" content="(c) 2022" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="icon" href="https://www.referenciaemabnt.com/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#af0000" />
                    <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-222262080-1">
                    </Script>
                </Head>

                <FormatedText />

                <h2>Copie a referência acima e cole ou transcreva no seu trabalho.</h2>

                <Alert title="Atenção!" variant="filled" styles={{
                    root: { color: 'red' },
                    wrapper: { color: 'red' },
                    light: { color: 'red' },
                    filled: { color: 'blue' },
                    outline: { color: 'black' },
                    body: { color: 'red' },
                    title: { color: 'white' },
                    label: { color: 'white' },
                    message: { color: 'white' },
                }}>
                    Sempre verifique se não há espaços em branco ou não preenchidos em sua referência. Se houver, por favor, refaça a referência do começo.
                </Alert>
                <div className='buttons'>
                    <a href="/">
                        <button className="backButton">Fazer Nova Referência</button>
                    </a>
                </div>

                <hr />

                <h3>Não se Esqueça de Verificar a Formatação no seu Trabalho!</h3>
                <p className='lastP'>Seguindo a ABNT NBR 6023 (Atual/2022):</p>
                <ul className='lastUl'>
                    <li>Espaçamento: simples</li>
                    <li>Fonte: Recomendada Arial ou Times new roman </li>
                    <li>Tamanho de fonte: 12</li>
                    <li>Alinhamento de texto: à esquerda</li>
                </ul>

            </Theme>
        </Container>

    );
}
export default Step3