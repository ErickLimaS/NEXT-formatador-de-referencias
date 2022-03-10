import { useEffect, useState } from "react";
import { Theme } from "../../components/theme2"
import * as C from './styles'


export const Sobre = () => {
    const [title, setTitle] = useState("Sobre Nós | Referência em ABNT");

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        setTitle('Sobre | Referência em ABNT')
    }, [title])

    return (
        <Theme>
            <C.Container>
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
            </C.Container>
        </Theme>
    )
}