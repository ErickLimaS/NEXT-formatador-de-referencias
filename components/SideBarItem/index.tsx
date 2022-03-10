import * as C from './styles';
import Link from 'next/link'

type Props = {
    title: string,
    description: string,
    path: string,
    icon: string,
    active: boolean
}
export const SideBarItem = ({ title, description, icon, path, active }: Props) => {

    // svg = width='50' height='50' on iconarea
    
    return (
        <C.Container>
            <Link href={path}>
                <C.Info>
                    <C.Title active={active}>{title}</C.Title>
                    <C.Description active={active}>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    
                </C.IconArea>
            </Link>
        </C.Container>
    )
}  