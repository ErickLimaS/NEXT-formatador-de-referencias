import * as C from './styles';
import { ReactNode } from 'react';
import { Header } from '../header'
import { SideBarItem } from '../SideBarItem'
import { Footer } from '../footer';
import { useSelector } from 'react-redux'

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { currentStep } = useSelector((state: any) => state.allData)

    return (
        <C.Container bgColor='red'>
            <Header />

            <C.Area id='mainContent'>
                <C.Steps>
                    <C.Sidebar>

                        <SideBarItem
                            title="Passo 1"
                            description="Escolha de onde vem sua referência"
                            icon="one"
                            active={currentStep === 1}
                        />
                        <SideBarItem
                            title="Passo 2"
                            description="Preencha algumas informações."
                            icon="two"
                            active={currentStep === 2}
                        />
                        <SideBarItem
                            title="Finalizado!"
                            description="Agora é só copiar e colar."
                            icon="three"
                            active={currentStep === 3}
                        />

                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>

            <Footer />
        </C.Container>
    )
}