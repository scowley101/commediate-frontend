import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
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
                        padding-left: 0;
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
        .social-container {
                display: flex;
                flex-direction: row;
                justify-content: center;

                svg {
                        margin: 0 2rem;
                }
                .social-link:hover {
                        color: var(--cmOrange);
                }
        }
        

        @media screen and (max-width: 700px) {
                .nav-items-container {
                        ul {
                                flex-direction: column;
                                align-items: center;
                                padding-le
                        }
                }

                .social-container {
                        flex-direction: column;
                        align-items: center;
                }
        }
`;

const Footer = ({ showNav, siteTitle, footerNavItems = [] }) => (
        <FooterStyles>
                {showNav && footerNavItems && (
                        <div data-sal="fade">
                                <div className="social-container">
                                        {footerNavItems.map(
                                                (i) =>
                                                        i.kind === 'icon' && (
                                                                <a className="social-link" href={i.link}>
                                                                        <Icon icon={i.linkIcon?.iconifyTitle} />
                                                                </a>
                                                        )
                                        )}
                                </div>

                                <div className="nav-items-container">
                                        <ul>
                                                {footerNavItems.map(
                                                        (i) =>
                                                                i.kind === 'link' && (
                                                                        <li className="text-lg">
                                                                                <CTALink {...i} />
                                                                        </li>
                                                                )
                                                )}
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
