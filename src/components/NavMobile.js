import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import CTALink from './CTALink';
import { SiteContext } from './context/SiteContext';
import NavIcon from './NavIcon';

const NavMobileStyles = styled.div`
        overflow-x: hidden;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        .nav-container {
                z-index: 98;
                height: 100vh;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                background: var(--cmGrey);
                position: absolute;
                top: 0;
                right: 0;
                transition: transform 300ms;
                transform: ${({ isNavOpen }) => (isNavOpen ? 'translateX(0)' : 'translateX(100%)')};

                ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                }

                li {
                        margin-top: 1rem;
                        color: var(--cmBlue);
                }
        }
`;

export default function NavMobile({ className, showNav, siteTitle, navMenuItems = [] }) {
        const { isNavOpen, toggleNavOpen } = useContext(SiteContext);

        return (
                <>
                        <NavIcon />
                        <NavMobileStyles isNavOpen={isNavOpen}>
                                <div className="nav-container">
                                        {showNav && navMenuItems && (
                                                <ul>
                                                        {navMenuItems.map((i) => (
                                                                <li className="text-lg">
                                                                        <CTALink {...i} />
                                                                </li>
                                                        ))}
                                                </ul>
                                        )}
                                </div>
                        </NavMobileStyles>
                </>
        );
}

NavMobile.propTypes = {
        style: PropTypes.object,
};
