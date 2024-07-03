import React, { useState } from 'react';
import styled from 'styled-components';
import CookieConsent from 'react-cookie-consent';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Nav from './Nav';

import NavMobile from './NavMobile';

const LayoutStyles = styled.div`
        /* overflow-x: hidden;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch; */
        .cookie-container {
                background-color: red;
        }
`;

function Layout(props) {
        const { children, onHideNav, onShowNav, showNav, siteTitle, navMenuItems, footerNavItems } = props;

        return (
                <>
                        <GlobalStyles />
                        <Typography />

                        <Nav
                                navMenuItems={navMenuItems}
                                siteTitle={siteTitle}
                                onHideNav={onHideNav}
                                onShowNav={onShowNav}
                                showNav={showNav}
                        />
                        {/* <NavMobile
                                navMenuItems={navMenuItems}
                                siteTitle={siteTitle}
                                onHideNav={onHideNav}
                                onShowNav={onShowNav}
                                showNav={showNav}
                        /> */}
                        <>{children}</>
                        <Footer
                                footerNavItems={footerNavItems}
                                siteTitle={siteTitle}
                                onHideNav={onHideNav}
                                onShowNav={onShowNav}
                                showNav={showNav}
                        />
                        {/* <CookieConsent
                                location="bottom"
                                buttonText="Accept"
                                declineButtonText="Decline"
                                cookieName="gatsby-gdpr-google-analytics"
                                enableDeclineButton
                                buttonWrapperClasses="cookie-button-container"
                                containerClasses="cookie-container"
                                style={{
                                        background: 'var(--cmWhite)',
                                        color: 'var(--cmBlue)',
                                        fontFamily: 'var(--openSans)',
                                        fontSize: '1rem',
                                        paddingTop: '0.5rem',
                                        paddingBottom: '0.5rem',

                                        paddingLeft: '2.16rem',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        boxShadow: '0 0 20px 0 rgb(0 0 0 / 10%)',
                                        // padding: '1rem 4rem',
                                        // paddingRight: '4rem',
                                }}
                                buttonStyle={{
                                        backgroundColor: 'var(--cmOrange)',
                                        fontSize: '0.754rem',
                                        borderRadius: '56px',
                                        padding: '1rem 2rem',
                                        marginRight: '4.32rem',
                                }}
                                declineButtonStyle={{
                                        backgroundColor: 'var(--cmWhite)',
                                        border: '1px solid var(--cmBlue)',
                                        color: 'var(--cmBlue)',
                                        fontSize: '0.754rem',
                                        borderRadius: '56px',
                                        padding: '1rem 2rem',
                                }}
                                // containerClasses={{
                                //         backgroundColor: 'red',
                                //         display: 'flex',
                                //         flexDirection: 'row',
                                //         justifyContent: 'center',
                                // }}
                        >
                                <h7>About cookies on this site</h7>
                                <p className="text-sm" style={{ margin: '0' }}>
                                        We use cookies to collect and analyse information on site performance and usage.
                                </p>
                        </CookieConsent> */}
                </>
        );
}

export default Layout;
