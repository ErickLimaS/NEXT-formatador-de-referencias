import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { Theme } from "../../components/theme2"

const about: NextPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Theme>
            <>
                <Head>
                    <title>Sobre | Referência em ABNT</title>
                    <meta charSet="utf-8" />
                    <meta name="title" content="Sobre" />
                    <meta name="description"
                        content="Formate suas referências bibliográficas usando nosso gerador com as normas ABNT mais atualizadas. Apenas copie e cole no seu trabalho a referência pronta!"
                    />
                    <meta name="keywords"
                        content="normas abnt, referencia, gerador referencia, gerador abnt, margem abnt, como fazer referencia em abnt, formatar trabalho em abnt, referencias prontas para trabalho escolar, projeto em abnt, TCC em abnt, referencias bibliograficas, referencias bibliograficas em abnt, como fazer referencias"
                    />
                    <meta name="copyright" content="(c) 2022" />
                    <link rel="icon" href="https://www.referenciaemabnt.com/favicon.ico" />
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

                <h1>Sobre</h1>

                <p>
                    Somos uma equipe que já passamos por muitos trabalhos e projetos, seja de faculdade ou de escola, onde alguns precisavam ser feitos em conjunto com as normas ABNT.
                </p>
                <p>
                    Um dia após termos terminado um projeto da faculdade, pensamos que as normas ABNT podem ser complicados e virar mais um assunto a ser estudado além do assunto do seu trabalho/projeto. E uma pessoa não sabendo bem as normas pode ficar entre um trabalho com a nota perfeita ou a nota que foi prejudicada pelo mal conhecimento das normas de entrega do trabalho.
                </p>
                <p>
                    Pensamos juntos sobre isso, e vimos que poderiamos fazer pelo menos parte do projeto/trabalho de alguem mais fácil.
                </p>
                <p>
                    Então decimos criar um site. Sempre pensando em um modo que as pessoas possam apenas olhar e entender o que você conseguirá fazer explicando de uma forma simples e prática as normas ABNT que o seu trabalho ou projeto precisam.
                </p>
                <p>
                    Não podemos deixar de citar que somos da área de T.I., e estamos, além de tudo, testando nossos conhecimentos sobre front-end com a criação desse site.
                </p>
            </>
        </Theme>
    )
}
export default about