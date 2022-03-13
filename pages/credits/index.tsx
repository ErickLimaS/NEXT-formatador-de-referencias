import { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Theme } from '../../components/theme2'


const credits: NextPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Theme>
            <>
                <Head>
                    <title>Créditos | Referência em ABNT</title>
                    <meta charSet="utf-8" />
                    <meta name="title" content="Créditos" />
                    <meta name="keywords"
                        content="normas abnt, referencia, gerador referencia, gerador abnt, margem abnt, como fazer referencia em abnt, formatar trabalho em abnt, referencias prontas para trabalho escolar, projeto em abnt, TCC em abnt, referencias bibliograficas, referencias bibliograficas em abnt, como fazer referencias"
                    />
                    <meta name="description"
                        content="Formate suas referências bibliográficas usando nosso gerador com as normas ABNT mais atualizadas. Apenas copie e cole no seu trabalho a referência pronta!"
                    />
                    <link rel="canonical" href="https://referenciaemabnt.com" />
                    <meta name="copyright" content="(c) 2022" />
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

                <h1>Créditos</h1>

                <div>
                    <a href="https://www.flaticon.com/free-icons/text" title="text icons">Text icons created by Freepik - Flaticon</a>
                    <a href='https://www.svgrepo.com' title='svg icons'>Icons by svgrepo.com</a>
                    <p>Usamos uma imagem como logo e SVGs como ícones de navegação do nosso site, sobe condição de dar créditos para os autores. Os links acima são dos responsaveis que fizeram esse site o que ele é agora, com suas devidas contribuições descritas no topo.</p>
                </div>

            </>
        </Theme>
    )
}
export default credits