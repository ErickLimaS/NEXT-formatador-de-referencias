import * as C from './styles';
import NumberOne  from '../../public/img/one.svg';
import  NumberTwo  from '../../public/img/two.svg';
import NumberThree from '../../public/img/three.svg';

type Props = {
    title: string,
    description: string,
    icon: string,
    active: boolean
}


export const SideBarItem = ({ title, description, icon, active }: Props) => {
    

    // svg = width='50' height='50' on iconarea
    
    return (
        <C.Container>
            <nav>
                <C.Info>
                    <C.Title active={active}>{title}</C.Title>
                    <C.Description active={active}>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'one' &&
                        <NumberOne  fill='#56B48C' width='50' height='50' alt="Passo 1. Escolha a referencia"/>
                    }
                    {icon === 'two' &&
                        <NumberTwo fill='#56B48C' width='50' height='50' alt="Passo 2. Informacoes"/>
                    }
                    {icon === 'three' &&
                        <NumberThree fill='#56B48C' width='50' height='50' alt="Passo 3. Concluido "/>
                    }
                </C.IconArea>
            </nav>
        </C.Container>
    )
}  