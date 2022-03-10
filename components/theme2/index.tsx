import * as C from './styles';
import { ReactNode } from 'react';
import { Header } from '../header'
import Link from 'next/link';
import { Footer } from '../footer';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {

    return (
        <C.Container>
            <Header />
            <C.Area>

                <C.Steps>
                    <C.Sidebar>

                        <div>
                            <a href={'/'}>
                                <h2 className='121'>
                                    Fazer Minha Referência Agora
                                </h2>
                            </a>
                        </div>


                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
            <Footer />
        </C.Container >
    )
}