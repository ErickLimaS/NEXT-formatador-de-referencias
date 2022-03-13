import * as C from './styled'
import { Theme } from '../../../components/theme2'
import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';

const referencias: NextPage = () => {
    const [title, setTitle] = useState("Como Fazer as Referências Bibliográficas em ABNT | Referência em ABNT");

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        setTitle('Como Fazer as Referências Bibliográficas em ABNT | Referência em ABNT')
    }, [title])

    return (
        <Theme>
            <C.Container>
                <Head>
                    <title>Como Fazer as Referências Bibliográficas em ABNT | Referência em ABNT</title>
                    <meta charSet="utf-8" />
                    <meta name="title" content="Como Fazer as Referências Bibliográficas em ABNT | Referência em ABNT" />
                    <meta name="description"
                        content="Formate suas referências bibliográficas usando nosso gerador com as normas ABNT mais atualizadas. Apenas copie e cole no seu trabalho a referência pronta!"
                    />
                    <meta name="keywords"
                        content="normas abnt, referencia, gerador referencia, gerador abnt, margem abnt, como fazer referencia em abnt, formatar trabalho em abnt, referencia automatica, referencias prontas para trabalho escolar, projeto em abnt, TCC em abnt, referencias bibliograficas, referencias bibliograficas em abnt, como fazer referencias"
                    />
                    <link rel="canonical" href="https://referenciaemabnt.com" />
                    <meta name="copyright" content="(c) 2022" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
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
                    <Image src='/../public/img/referenciasPage/1-1.JPG' alt="Passo 1. Tela inicial para formatar a referência." width={600} height={300} /></div>
                <p>
                    No primeiro campo, preencha com a informação que mais se encaixa com a referência que você usou. No nosso caso, usaremos uma referência da <span className='underline'>Wikipédia</span>, que fala sobre o <span className='underline'>Planeta Terra</span>. Então selecionaremos a opção "Internet" no primeiro campo. Depois de selecionada, aparecerá outra caixa de seleção, agora para especificar de onde da <span className='underline'>Internet</span> que tiramos a referência.
                </p>
                <p>
                    Após preenchidas, a sua tela deverá estar assim:
                </p>
                <div className='imgCenter'>
                    <Image src='/../public/img/referenciasPage/2-1.JPG' alt="A tela agora deve estar com todas as informações necessárias." width={600} height={300} />
                </div>
                <p>
                    Sendo assim, aperte em "Próximo" e iremos para o próximo passo.
                </p>
                <h3>Passo 2 - Informações da Referência</h3>
                <p>
                    Seguindo para o próximo passo, iremos ver a seguinte tela:
                </p>
                <div className='imgCenter'>
                    <Image src='/../public/img/referenciasPage/3-1.JPG' alt="Agora precisamos preencher todos as informações pedidas sobre a referência." width={600} height={300} />
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
                    <Image src='/../public/img/referenciasPage/4-1.JPG' alt="A referência foi formatada para as normas ABNT. Agora é copiar ela e colar no trabalho." width={600} height={300} />
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
export default referencias