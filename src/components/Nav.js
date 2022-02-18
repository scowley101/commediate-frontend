import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import CTALink from './CTALink';
// import NavIcon from './NavIcon';
import NavMobile from './NavMobile';
import NavIcon from './NavIcon';

const NavStyles = styled.nav`
        position: -webkit-sticky;
        background-color: var(--cmGrey);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem var(--sidePadding);
        z-index: 100;

        /* .headroom {
                top: 0;
                left: 0;
                right: 0;
                z-index: 1;
                background-color: var(--cmGrey);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 1rem var(--sidePadding);
        }
        .headroom--unfixed {
                position: relative;
                transform: translateY(0);
        }
        .headroom--scrolled {
                transition: transform 200ms ease-in-out;
        }
        .headroom--unpinned {
                position: fixed;
                transform: translateY(-100%);
        }
        .headroom--pinned {
                position: fixed;
                transform: translateY(0%);
        } */

        .nav-items-container {
                ul {
                        height: 28px;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                        margin: 0;
                }
                li {
                        height: 28px;

                        display: flex;
                        margin: 0 1.5rem;
                }
        }

        [aria-current]:not([aria-current='false']) {
                ::after {
                        position: absolute;
                        content: '';
                        height: 0.25em;
                        top: 1em;
                        margin: 0 auto;
                        left: 0;
                        right: 0;
                        width: 100%;
                        background: var(--cmLightOrange);
                }
        }

        @media screen and (max-width: 900px) {
                .nav-items-container {
                        display: none;
                }
        }
        @media screen and (max-width: 500px) {
                .site-tite {
                        width: 5rem;
                }
        }
`;

const SpacerStyles = styled.div`
        position: absolute;
        height: 19px;
        background-color: red;
`;

const Nav = ({ showNav, siteTitle, navMenuItems = [] }) => (
        <Headroom>
                <NavStyles>
                        <div className="site-tite-container">
                                <span className="orange-underline-link">
                                        <Link className="site-tite" to="/">
                                                {siteTitle}
                                        </Link>
                                </span>
                        </div>

                        {showNav && navMenuItems && (
                                <div className="nav-items-container">
                                        <ul>
                                                {navMenuItems.map((i) => (
                                                        <li className="text-base">
                                                                <CTALink {...i} />
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                        )}
                        <NavIcon />
                </NavStyles>
        </Headroom>
);

export default Nav;
