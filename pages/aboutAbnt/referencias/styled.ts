import styled from 'styled-components';
import { media } from '../../../components/theme/media';

export const Container = styled.div`

    width: auto;
    img{

        width: 270px;
    }
    
    ${media.greaterThan('xs')`
    width: auto;
        img{

            width: 400px;
        }
    `}
    ${media.greaterThan('sm')`
    width: auto;
        img{
            width: 450px;
        }
    `}
    ${media.greaterThan('md')`
    width: auto;
        img{
            width: 600px;
        }
    `}
`