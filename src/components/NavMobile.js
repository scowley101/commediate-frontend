import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { Icon } from '@iconify/react';
import xIcon from '@iconify/icons-ls/x';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavMobileStyles = styled.div`
        .nav-container {
                height: 70%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
        }
`;

export default function NavMobile({ style }) {
        const { toggleNavOpen } = useContext(StoreContext);

        return (
                <NavMobileStyles>
                        <animated.div
                                className="animated-cart"
                                style={{
                                        zIndex: 100,
                                        position: 'fixed',
                                        top: 0,
                                        right: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'var(--mbWhite)',
                                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)',
                                        padding: '40px 2%',
                                        ...style,
                                }}
                        >
                                <button
                                        style={{
                                                position: 'absolute',
                                                top: 50,
                                                right: 60,
                                                border: 0,
                                                backgroundColor: 'transparent',
                                        }}
                                        type="button"
                                        onClick={toggleNavOpen}
                                >
                                        <Icon icon={xIcon} vFlip rotate="180deg" />
                                </button>
                                <ul className="nav-container">
                                        <li>
                                                <Link to="/shop" onClick={toggleNavOpen}>
                                                        <h5>Shop</h5>
                                                </Link>
                                        </li>
                                        <li>
                                                <Link to="/the-honey" onClick={toggleNavOpen}>
                                                        <h5>The honey</h5>
                                                </Link>
                                        </li>
                                        <li>
                                                <Link to="/impact" onClick={toggleNavOpen}>
                                                        <h5>Impact</h5>
                                                </Link>
                                        </li>
                                        <li>
                                                <Link to="/our-story" onClick={toggleNavOpen}>
                                                        <h5>Our story</h5>
                                                </Link>
                                        </li>
                                        <li>
                                                <Link to="/contact" onClick={toggleNavOpen}>
                                                        <h5>Contact</h5>
                                                </Link>
                                        </li>
                                </ul>
                        </animated.div>
                </NavMobileStyles>
        );
}

NavMobile.propTypes = {
        style: PropTypes.object,
};
