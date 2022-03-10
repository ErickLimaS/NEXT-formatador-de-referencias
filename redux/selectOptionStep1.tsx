import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRefType2 } from '../redux/FormContext'

export const SelectOptions = () => {
    const { refType1, refType2 } = useSelector((state: any) => state.allData)
    const dispatch = useDispatch();

    let options: any;

    const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(
            setRefType2(
                e.target.value
            ))
    }

    if (refType1 === '') {
        options = '';
    }

    else if (refType1 === '10') {
        options = (
            <div>
                <label>
                    Especifique um pouco mais!

                    <select
                        autoFocus
                        onChange={handleOptionChange}
                        value={refType2}
                    >
                        <option value='' disabled selected>Escolha Uma ...</option>
                        <option value='11'>Site</option>
                        <option value='12'>Blog</option>
                        <option value='13'>Podcast</option>
                        <option value='14'>Redes Sociais</option>
                        <option value='15'>Email</option>
                        <option value='16'>Wikipédia</option>
                    </select>
                </label>
            </div>
        );
    }

    else if (refType1 === '20') {
        options = (
            <div>
                <label>
                    Especifique um pouco mais!

                    <select
                        autoFocus
                        onChange={handleOptionChange}
                    >
                        <option value='' disabled selected>Escolha Uma ...</option>
                        <option value='21'>Referência do Livro por Completo</option>
                        <option value='22'>Referência de um E-Book</option>
                    </select>
                </label>
            </div>
        )
    }

    else if (refType1 === '30') {
        options = (
            <div>
                <label>
                    Especifique um pouco mais!

                    <select
                        autoFocus
                        onChange={handleOptionChange}
                    >
                        <option value='' disabled selected>Escolha Uma ...</option>
                        <option value='31'>Vídeo</option>
                    </select>
                </label>
            </div>
        )
    }

    else if (refType1 === '40') {
        options = (
            <div>
                <label>
                    Especifique um pouco mais!

                    <select
                        autoFocus
                        onChange={handleOptionChange}
                    >
                        <option value='' disabled selected>Escolha Uma ...</option>
                        <option value='41'>Reportagem</option>
                        <option value='42'>Entrevista em Revista ou Jornal</option>
                        <option value='43'>Artigo de Revista</option>
                        <option value='44'>Artigo de Internet</option>
                    </select>
                </label>
            </div>
        )
    }

    else if (refType1 === '50') {
        options = (
            <div>
                <label>
                    Especifique um pouco mais!

                    <select
                        autoFocus
                        onChange={handleOptionChange}
                    >
                        <option value='' disabled selected>Escolha Uma ...</option>
                        <option value='51'>Tese</option>
                        <option value='52'>Dissertação</option>
                        <option value='53'>TCC Disponível na Internet</option>
                    </select>
                </label>
            </div>
        )
    }

    return options;
}