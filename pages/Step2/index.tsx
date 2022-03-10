import { useNavigate, Link } from 'react-router-dom'; //history didnt work
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/theme1variant';
import { useEffect, useState } from 'react';
import { RefInputs } from '../../contexts/FormInputs' //test
import { Button } from '@mantine/core';
import swal from 'sweetalert';

export const Step2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const [title, setTitle] = useState("Passo 2 | Referência em ABNT");

    useEffect(() => {
        document.title = title;
        setTitle('Passo 2 | Referência em ABNT');
        window.scrollTo(0, 0);
        if (state.refType1 === '' || state.refType2 === '') {
            navigate('/');
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }, [title])

    const handleNextStep = () => {
        if (state.yearPublic !== 0 || state.nameAuthor2 !== '' || state.surAuthor1 !== '') {
            navigate('/step3')
        }
        else {
            swal("Cade as Informações?", "Você precisa preencher as informações da referência!", "warning");
        }
    };

    return (
        <Theme>
            <C.Container>

                <h1>Certo. Agora Falta Algumas Outras Infomações.</h1>

                <p>Preencha os dados abaixo. Após o preenchimento, clique em "Formatar Referência".</p>

                <hr />
                
                <RefInputs />

                <div className='buttons'>
                    <Link to="/" className='backButton'>Voltar</Link>
                    <Button color="teal" size="lg" onClick={handleNextStep}>
                        Formatar Referência
                    </Button>
                </div>
            </C.Container>

        </Theme>
    );
}