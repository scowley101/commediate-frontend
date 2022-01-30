import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import CTALink from './CTALink';

const FooterStyles = styled.nav`
        padding: var(--verticalPadding) var(--sidePadding) 0 var(--sidePadding);
        background-color: var(--cmGrey);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 100;

        .nav-items-container {
                ul {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                }
                li {
                        display: flex;
                        margin: 0 1.5rem;
                }
        }

        .copywright-container {
                margin-bottom: 0;
                margin-top: 6.56rem;
        }
`;

const Footer = ({ showNav, siteTitle, navMenuItems = [] }) => (
        <FooterStyles>
                {showNav && navMenuItems && (
                        <div data-sal="fade">
                                <div className="nav-items-container">
                                        <ul>
                                                {navMenuItems.map((i) => (
                                                        <li className="text-lg">
                                                                <CTALink {...i} />
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                                <div className="copywright-container">
                                        <p className="center">
                                                &copy; {siteTitle} {new Date().getFullYear()}
                                        </p>
                                </div>
                        </div>
                )}
        </FooterStyles>
);

export default Footer;
