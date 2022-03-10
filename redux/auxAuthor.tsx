import * as C from './styles'
import { TextInput, Tooltip } from '@mantine/core';
import { InfoCircledIcon } from '@modulz/radix-icons';
import { ChangeEvent } from 'react';
import { Teste } from './auxAuthor2'
import { useSelector, useDispatch } from 'react-redux';
import { setAuxNewAuthor, setCompanyName, setEtAlCheckbox, setSurAuthor1, setNameAuthor1 } from '../redux/FormContext'


export const AuxAuthor = () => {
    const { radioCheck, auxNewAuthor, etAlCheckbox } = useSelector((state: any) => state.allData)
    const dispatch = useDispatch();

    const AuthorFirstInfoCircle = (
        <Tooltip label='Escreva o primeiro nome nessa seção. Se for uma organização que escreveu, bote o nome aqui.' position='top' placement="center" withArrow>
            <InfoCircledIcon color='black' />
        </Tooltip>
    );
    const AuthorSurInfoCircle = (
        <Tooltip label='Escreva o sobrenome nessa seção. Ex: Sousa. Se for uma organização quem escreveu, deixe  esse espaço em branco.' position='top' placement="center" withArrow arrowSize={3}>
            <InfoCircledIcon color='black' />
        </Tooltip>
    );

    //Handles
    // Author
    const handleNameAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNameAuthor1(e.target.value));
    }
    const handleSurAuthor1 = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSurAuthor1(e.target.value));
    };
    const handleEtalCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        if (etAlCheckbox === 'et al.') {
            dispatch(setEtAlCheckbox('')
            )
        } else {
            dispatch(setEtAlCheckbox('et al.'))
        }
    }

    // Company
    const handleCompanyName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCompanyName(e.target.value));
    };

    // aux numeros autores
    let count: number;
    count = 0;

    const handleAuxNewAuthor = () => {

        dispatch(setAuxNewAuthor(count))
    }

    function addAuthor() {

        count = auxNewAuthor + 1

        return handleAuxNewAuthor()
    }

    let authorCheck: any;

    if (radioCheck === '1') {
        authorCheck = (
            <C.Container>
                <TextInput required label="Nome do Autor(a) ou Editor(a)" description="O primeiro nome do autor(a) vai nessa seção" type='text'
                    onChange={handleNameAuthor1} placeholder='Ex: Clara'
                    rightSection={AuthorFirstInfoCircle} />

                <hr />

                <TextInput required label="Sobrenome do Autor(a)" description="Apenas o sobrenome do autor(a) vai nessa seção" type='text' onChange={handleSurAuthor1} placeholder='Ex: Paiva' rightSection={AuthorSurInfoCircle} />

                <Teste />

                <div className='buttonNewAuthor'>
                    <button onClick={addAuthor} >Acrescentar Autor/Editor</button>
                </div>

                <hr />

                <div className='checkboxEtAl'>
                    <h1>Usar "Et al.?</h1>
                    <small>"Et al." serve para indicar a existéncia de mais autores além do indicado nessa referência.</small>
                    <div>
                        <input type="checkbox" id="etal" name="etal" onChange={handleEtalCheckbox}></input>
                        <label htmlFor="etal">Marque a caixa ao lado para usar "Et al."</label>
                    </div>
                </div>
            </C.Container>
        )
        return authorCheck
    }

    else if (radioCheck === '2') {
        authorCheck = (
            <div>
                <TextInput required label="Nome da Organização que escreveu a Matéria" description="O  nome completo. Começando sempre com suas siglas. Veja exemplo abaixo." type='text'
                    onChange={handleCompanyName} placeholder='Ex:SABESP - Companhia de Saneamento Básico do Estado de São Paulo' rightSection={AuthorFirstInfoCircle} />
            </div>)
        return authorCheck
    }
    return authorCheck
}