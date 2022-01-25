import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

function NavItems() {
        return (
                <>
                        <li>nat item 1</li>
                        <li>nat item 2</li>
                </>
        );
}

export default function Nav() {
        return (
                <>
                        <div className="navContainer">
                                <ul>
                                        <NavItems />
                                </ul>
                        </div>
                </>
        );
}
