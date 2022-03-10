import { useNavigate, Link } from 'react-router-dom'; //history didnt work
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/theme1variant';
import { useEffect, useState } from 'react';
import { FormatedText } from '../../contexts/FormatedText';
import * as C from './styles'
import { Alert } from '@mantine/core';

export const Step3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const [title, setTitle] = useState("Concluído! | Referência em ABNT");

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        if (state.refType1 === '') {
            navigate('/');
        }
        setTitle('Concluído! | Referência em ABNT')
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, [title])

    useEffect(() => {
        if (state.refType1 === '') {
            navigate('/');
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, []);

    const refreshToStep1 = () => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 0
        });
        dispatch({
            type: FormActions.setSurAuthor1,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameAuthor1,
            payload: ''
        });
        dispatch({
            type: FormActions.setSurAuthor2,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameAuthor2,
            payload: ''
        });
        dispatch({
            type: FormActions.setSurAuthor3,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameAuthor3,
            payload: ''
        });
        dispatch({
            type: FormActions.setSurAuthor4,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameAuthor4,
            payload: ''
        });
        dispatch({
            type: FormActions.setSurAuthor5,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameAuthor5,
            payload: ''
        });
        dispatch({
            type: FormActions.setSurAuthor6,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameAuthor6,
            payload: ''
        });
        dispatch({
            type: FormActions.setEtAlCheckbox,
            payload: ''
        });
        dispatch({
            type: FormActions.setTitle,
            payload: ''
        });
        dispatch({
            type: FormActions.setSubtitle,
            payload: ''
        });
        dispatch({
            type: FormActions.setUrl,
            payload: ''
        });
        dispatch({
            type: FormActions.setLocal,
            payload: '[S.I.]'
        });
        dispatch({
            type: FormActions.setDayAcess,
            payload: 0
        });
        dispatch({
            type: FormActions.setMonthAcess,
            payload: ''
        });
        dispatch({
            type: FormActions.setYearAcess,
            payload: 0
        });
        dispatch({
            type: FormActions.setDayPublic,
            payload: 0
        });
        dispatch({
            type: FormActions.setMonthPublic,
            payload: ''
        });
        dispatch({
            type: FormActions.setYearPublic,
            payload: 0
        });
        dispatch({
            type: FormActions.setPlacePublic,
            payload: '[S.I.]'
        });
        dispatch({
            type: FormActions.setPublishingComp,
            payload: '[s.n.]'
        });
        dispatch({
            type: FormActions.setNoDate,
            payload: 's.d.'
        });
        dispatch({
            type: FormActions.setEdition,
            payload: ''
        });
        dispatch({
            type: FormActions.setRadioCheck,
            payload: '1'
        });
        dispatch({
            type: FormActions.setCompanyName,
            payload: ''
        });
        dispatch({
            type: FormActions.setResponsableBlog,
            payload: ''
        });
        dispatch({
            type: FormActions.setBlogTitle,
            payload: ''
        });
        dispatch({
            type: FormActions.setNamePodcastEpisode,
            payload: ''
        });
        dispatch({
            type: FormActions.setNamePodcast,
            payload: ''
        });
        dispatch({
            type: FormActions.setPodcastAnnouncer,
            payload: ''
        });
        dispatch({
            type: FormActions.setUserSocialMedia,
            payload: ''
        });
        dispatch({
            type: FormActions.setDisplayNameUser,
            payload: ''
        });
        dispatch({
            type: FormActions.setSocialMediaMensage,
            payload: ''
        });
        dispatch({
            type: FormActions.setRemetenteName,
            payload: ''
        });
        dispatch({
            type: FormActions.setEmailSubject,
            payload: ''
        });
        dispatch({
            type: FormActions.setDestinatario,
            payload: ''
        });
        dispatch({
            type: FormActions.setPaginationBook,
            payload: ''
        });
        dispatch({
            type: FormActions.setEditionBook,
            payload: ''
        });
        dispatch({
            type: FormActions.setDoiCheckbox,
            payload: '0'
        });
        dispatch({
            type: FormActions.setDurationVideo,
            payload: ''
        });
        dispatch({
            type: FormActions.setUniDegreed,
            payload: ''
        });
        dispatch({
            type: FormActions.setUniversity,
            payload: ''
        });
        dispatch({
            type: FormActions.setNameGuest,
            payload: ''
        });
        dispatch({
            type: FormActions.setMagazine,
            payload: ''
        });
        dispatch({
            type: FormActions.setNumberMagaz,
            payload: ''
        });
        dispatch({
            type: FormActions.setAuxNewAuthor,
            payload: 0
        });
        navigate('/');

    };

    return (
        <C.Container>
            <Theme>

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
                    <button onClick={refreshToStep1} className="backButton">Fazer Nova Referência</button>
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
        </C.Container>

    );
}