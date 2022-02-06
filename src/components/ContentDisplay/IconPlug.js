import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const IconStyles = styled.div`
        padding: var(--componentPadding);

        position: relative;
        /* bottom: -46rem;
        left: -2rem; */
        .icon-container {
                position: absolute;
                bottom: 6rem;
        }
`;

function IconPlug({ icon: { iconifyTitle } }) {
        return (
                <IconStyles className="icon-container">
                        <Icon icon={iconifyTitle} height="14rem" />
                </IconStyles>
        );
}

export default IconPlug;
