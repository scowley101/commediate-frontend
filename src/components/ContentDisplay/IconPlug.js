import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const IconStyles = styled.div`
        height: fit-content;
        position: relative;

        .top-half,
        .bottom-half {
                height: 4rem;
                .grey {
                        background-color: var(--cmGrey);
                }
                .white {
                        background-color: var(--vmWhite);
                }
        }

        .iconify {
                color: var(--cmOrange);
                position: absolute;
                bottom: -3rem;
        }
        .left {
                padding-left: var(--bodySidePadding);
                left: -1.25rem;
        }
        .right {
                padding-right: var(--bodySidePadding);
                right: -1.25rem;
        }
`;

function IconPlug({ icon, position, backgroundColorAbove, backgroundColorBelow }) {
        const iconResult = icon?.icon?.icon?.iconifyTitle;
        return (
                <IconStyles className="icon-container">
                        <div className={`top-half ${backgroundColorAbove.backgroundColor}`} />
                        <div className={`bottom-half ${backgroundColorBelow.backgroundColor}`} />
                        <Icon className={position} icon={iconResult} height="14rem" />
                </IconStyles>
        );
}

export default IconPlug;
