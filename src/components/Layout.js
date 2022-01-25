import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import SEO from './SEO';

export default function Layout({ children }) {
        return (
                <div>
                        {/* <SEO />
                        <GlobalStyles />
                        <Typography />
                        <Nav />
                        {children}
                        <Footer /> */}

                        {children}
                </div>
        );
}

Layout.propTypes = {
        children: PropTypes.node,
};
