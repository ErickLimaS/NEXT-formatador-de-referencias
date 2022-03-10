import styled from 'styled-components';
import { media } from '../../components/theme/media';

export const Container = styled.div`
    width: 300px;

    ${media.greaterThan('xs')`
            width: unset;
    `}
`;