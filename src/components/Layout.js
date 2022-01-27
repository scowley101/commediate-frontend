import React from 'react';
import Header from './Header';
import Footer from './Footer';

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
                </>
        );
}

export default Layout;
