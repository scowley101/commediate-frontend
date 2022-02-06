import React, { useContext } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { SiteContext } from './context/SiteContext';

const NavIconStyles = styled.button`
        position: fixed;
        top: 1.5rem;
        right: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 1.5rem;
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 100;

        div {
                width: 1.5rem;
                height: 0.2rem;
                background: var(--cmBlue);
                border-radius: 5px;
                transform-origin: 1px;
                position: relative;
                transition: opacity 300ms, transform 300ms;

                :first-child {
                        transform: ${({ isNavOpen }) => (isNavOpen ? 'rotate(45deg)' : 'rotate(0)')};
                }

                :nth-child(2) {
                        opacity: ${({ isNavOpen }) => (isNavOpen ? '0' : '1')};
                }

                :nth-child(3) {
                        transform: ${({ isNavOpen }) => (isNavOpen ? 'rotate(-45deg)' : 'rotate(0)')};
                }
        }
        @media screen and (min-width: 900px) {
                display: none;
        }
`;

export default function NavIcon() {
        const { isNavOpen, toggleNavOpen } = useContext(SiteContext);
        return (
                <NavIconStyles type="button" className="button" onClick={toggleNavOpen} isNavOpen={isNavOpen}>
                        <div />
                        <div />
                        <div />
                </NavIconStyles>
        );
}
