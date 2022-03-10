import * as C from './styled'
import { Theme } from '../../../components/theme2'
import { useEffect, useState } from 'react';

export const Referencias = () => {
    const [title, setTitle] = useState("Como Fazer as Referências Bibliográficas em ABNT | Referência em ABNT");


    const img1 = require('../../../img/referenciasPage/1-1.JPG');
    const img2 = require('../../../img/referenciasPage/2-1.JPG');
    const img3 = require('../../../img/referenciasPage/3-1.JPG');
    const img4 = require('../../../img/referenciasPage/4-1.JPG');

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        setTitle('Como Fazer as Referências Bibliográficas em ABNT | Referência em ABNT')
    }, [title])

    return (
        <Theme>
            <C.Container>
                <h1>Como Fazer as Referências Bibliográficas em ABNT</h1>
                <h2>Faça sua referência ainda mais rápido com nossa ferramenta.</h2>

                <p>
                    Acredito que você está aqui porque não consegue entender as normas da Associação Brasileira de Normas Tecénicas (ABNT), não é?

                </p>
                <p>
                    Pois bem. <a href='https://www.referenciaemabnt.com'>Neste site</a> temos uma ferramenta onde qualquer pessoa apenas colocará as informações da referência usada no trabalho ou projeto, e após preenchidas, conseguira a referência formatada nas normas ABNT mais atualizadas de 2022.
                </p>
                <p className='spaceOnText'>
                    A seguir mostrarei em passos o quão rápido e fácil é fazer usando <a href='https://www.referenciaemabnt.com'>esse site</a>.
                </p>
                <h2>Fazendo a Referência no Site.</h2>
                <h3>Passo 1 - De onde vem a Referência?</h3>

                <p>
                    Ao acessar o <a href='https://www.referenciaemabnt.com'>site</a>, você irá se deparar com a imagem abaixo:
                </p>
                <div className='imgCenter'>
                    <img src={img1} alt="Passo 1. Tela inicial para formatar a referência." /></div>
                <p>
                    No primeiro campo, preencha com a informação que mais se encaixa com a referência que você usou. No nosso caso, usaremos uma referência da <span className='underline'>Wikipédia</span>, que fala sobre o <span className='underline'>Planeta Terra</span>. Então selecionaremos a opção "Internet" no primeiro campo. Depois de selecionada, aparecerá outra caixa de seleção, agora para especificar de onde da <span className='underline'>Internet</span> que tiramos a referência.
                </p>
                <p>
                    Após preenchidas, a sua tela deverá estar assim:
                </p>
                <div className='imgCenter'>
                    <img src={img2} alt="A tela agora deve estar com todas as informações necessárias." />
                </div>
                <p>
                    Sendo assim, aperte em "Próximo" e iremos para o próximo passo.
                </p>
                <h3>Passo 2 - Informações da Referência</h3>
                <p>
                    Seguindo para o próximo passo, iremos ver a seguinte tela:
                </p>
                <div className='imgCenter'>
                    <img src={img3} alt="Agora precisamos preencher todos as informações pedidas sobre a referência." />
                </div>
                <p>
                    Os campos a ser preenchidos tem um título bem sugestivo e direto. Então, apenas você irá apenas preencher o que é pedido em cada campo.
                </p>
                <p>
                    E como escolhemos fazer uma referência da <span className='underline'>Wikipédia</span>, iremos botar o nosso título do assunto a ser referênciado, que é "<span className='underline'>Planeta Terra</span>".
                </p>
                <p>
                    No campo da URL, iremos botar o endereço do site onde está essa nossa referência. Nesse caso, iremos na parte de cima do nosso navegador e pegar a URL do site da <span className='underline'>Wikipédia</span> onde está o texto sobre o Planeta Terra, que é o seguinte: <span className='underline'>https://pt.wikipedia.org/wiki/Terra</span>.
                </p>
                <p>
                    No próximo campo, apenas colacaremos a data em que vimos o texto, matéria ou artigo relacionado ao tema.
                </p>
                <p>
                    Colacaremos como exemplo a data: 1 de Março de 2022.
                </p>
                <p>
                    Após todos os campos necessários serem preenchidos, iremos para o <span className='underline'>Último Etapa</span>, que é o Passo 3.
                </p>
                <h3>Passo 3 - A Referência está Pronta!</h3>
                <p>
                    Está pronta! A referência está agora formatada para os padrões exigidos pela ABNT.
                </p>
                <div className='imgCenter'>
                    <img src={img4} alt="A referência foi formatada para as normas ABNT. Agora é copiar ela e colar no trabalho." />
                </div>
                <p>
                    Agora iremos apenas copiar essa referência já formatada e colar ela na seção de "<span className='underline'>Referências Bibliográficas</span>" do nosso trabalho.
                </p>
                <p>
                    Você fará esse processo com a mesma quantidade de referências usadas no seu trabalho ou projeto. Caso tenhamos usado 4 referências para o nosso trabalho, faremos o mesmo processo 4 vezes para ter nossas referências todas formatadas para as normas ABNT.
                </p>
            </C.Container>
        </Theme>
    )
};