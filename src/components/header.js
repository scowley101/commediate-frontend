// import { Link } from 'gatsby';
import React from 'react';
// import styled from 'styled-components';
// import Headroom from 'react-headroom';
// import CTALink from './CTALink';

// const HeaderStyles = styled.nav`
//         position: -webkit-sticky; /* Safari */
//         position: sticky;
//         top: 0;
//         background-color: var(--cmGrey);
//         opacity: 95%;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-between;
//         align-items: center;
//         padding: 1rem var(--sidePadding);
//         z-index: 100;
//         transition: all 0.2s;

//         :hover {
//                 opacity: 100%;
//         }

//         .nav-items-container {
//                 ul {
//                         display: flex;
//                         flex-direction: row;
//                         justify-content: flex-end;
//                 }
//                 li {
//                         display: flex;
//                         margin: 0 1.5rem;
//                 }
//         }
// `;

const Header = (/* { showNav, siteTitle, navMenuItems = [] } */) => (
        <div>
                <h1>A header</h1>
        </div>
        // <Headroom>
        // <HeaderStyles>
        //         <div>
        //                 <Link to="/">{siteTitle}</Link>
        //         </div>

        //         {showNav && navMenuItems && (
        //                 <div className="nav-items-container">
        //                         <ul>
        //                                 {navMenuItems.map((i) => (
        //                                         <li className="text-lg">
        //                                                 <CTALink {...i} />
        //                                         </li>
        //                                 ))}
        //                         </ul>
        //                 </div>
        //                 <div className="div"></div>
        //         )}
        // </HeaderStyles>
        // </Headroom>
);

export default Header;
