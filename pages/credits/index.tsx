import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Theme } from '../../components/theme2'
import * as C from './styles'


const credits: NextPage = () => {
    const [title, setTitle] = useState("Créditos | Referência em ABNT");

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        setTitle('Créditos | Referência em ABNT')
    }, [title])

    return (
        <Theme>
            <C.Container>
                <h1>Créditos</h1>

                <div>
                    <a href="https://www.flaticon.com/free-icons/text" title="text icons">Text icons created by Freepik - Flaticon</a>
                    <a href='https://www.svgrepo.com' title='svg icons'>Icons by svgrepo.com</a>
                    <p>Usamos uma imagem como logo e SVGs como ícones de navegação do nosso site, sobe condição de dar créditos para os autores. Os links acima são dos responsaveis que fizeram esse site o que ele é agora, com suas devidas contribuições descritas no topo.</p>
                </div>

            </C.Container>
        </Theme>
    )
}
export default credits