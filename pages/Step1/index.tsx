import Link from 'next/link'; //history didnt work
import * as C from './styles';
import { SelectOptions } from '../../redux/selectOptionStep1'
import { Theme } from '../../components/theme';
import { ChangeEvent, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { setRefType1, setCurrentStep } from '../../redux/FormContext'
import { useDispatch, useSelector } from 'react-redux';

export const Step1 = () => {
    const dispatch = useDispatch();
    const { refType1, refType2 } = useSelector((state: any) => state.allData);
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
            if (refType1 === '11') {
                <Link href={'./step2'} />
            }
            swal("Tipo não Selecionado!", "Você precisa dizer de onde a referência vem!", "warning");
        }
        else if (refType1 !== '' || refType2 !== '') {
            <Link href={'./step2'} />
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

    return (
        <Theme>
            <C.Container>

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
                    <button onClick={handleNextStep}>Próximo</button>
                </div>
            </C.Container>

        </Theme>
    );
}