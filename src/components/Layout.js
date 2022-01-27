import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

function Layout(props) {
        const { children, onHideNav, onShowNav, showNav, siteTitle, navMenuItems } = props;

        return (
                <>
                        <Header
                                navMenuItems={navMenuItems}
                                siteTitle={siteTitle}
                                onHideNav={onHideNav}
                                onShowNav={onShowNav}
                                showNav={showNav}
                        />
                        <>{children}</>
                        <Footer siteTitle={siteTitle} />
                        <GlobalStyles />
                        <Typography />
                </>
        );
}

export default Layout;
