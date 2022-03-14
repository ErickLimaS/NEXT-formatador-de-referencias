import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { Theme } from "../../components/theme2"


const Contacts: NextPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Theme>
            <>
                <Head>
                    <title>Contatos | Referência em ABNT</title>
                    <meta charSet="utf-8" />
                    <meta name="title" content="Contatos" />
                    <meta name="description"
                        content="Formate suas referências bibliográficas usando nosso gerador com as normas ABNT mais atualizadas. Apenas copie e cole no seu trabalho a referência pronta!"
                    />
                    <meta name="keywords"
                        content="normas abnt, referencia, gerador referencia, gerador abnt, margem abnt, como fazer referencia em abnt, formatar trabalho em abnt, referencias prontas para trabalho escolar, projeto em abnt, TCC em abnt, referencias bibliograficas, referencias bibliograficas em abnt, como fazer referencias"
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

                <h1>Contatos</h1>

                <p>
                    Atualmente estamos com esses meios de contato:
                </p>
                <ul>
                    <li>Email: <a href="mailto:contato.referenciaemabnt@gmail.com">contato.referenciaemabnt@gmail.com</a></li>
                </ul>
            </>
        </Theme>
    )
}
export default Contacts