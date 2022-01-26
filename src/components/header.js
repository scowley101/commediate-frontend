import { Link } from 'gatsby';
import React from 'react';
import CTALink from './CTALink';

const Header = ({ showNav, siteTitle, navMenuItems = [] }) => (
        <nav id="header">
                <div>
                        <div>
                                <Link id="siteTitle" to="/">
                                        {siteTitle}
                                </Link>
                        </div>

                        {showNav && navMenuItems && (
                                <div id="nav-content">
                                        <ul>
                                                {navMenuItems.map((i) => (
                                                        <li>
                                                                <CTALink {...i} />
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                        )}
                </div>

                <hr />
        </nav>
);

export default Header;
