import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import { SiteContext } from './context/SiteContext';

const doNavigate = (target) => {
        if (!target || !target.length) {
                return;
        }
        const internal = /^\/(?!\/)/.test(target);
        if (internal) {
                navigate(target);
        } else {
                window.location = target;
        }
};

export const ButtonStyles = styled.button`
        font-family: var(--dmSans);
        margin-top: 3.875rem;
        border-radius: 56px;
        cursor: pointer;
        /* transition: background-color 0.1s ease, color 0.1s ease; */
        transition: all 0.2s;
        padding: 0.6rem 1.89rem;
        /* a {
                text-decoration: none;
                color: white;
                font-weight: bold;
        } */
        background-color: var(--cmOrange);
        border: none;
        :hover {
                background-color: var(--cmLightOrange);
        }
        :active {
                background-color: var(--mbOrange);
        }
`;

const CTALink = (props) => {
        let link = props.route || props.link || '#';
        if (props.landingPageRoute && props.landingPageRoute.slug && props.landingPageRoute.slug.current) {
                link = props.landingPageRoute.slug.current;
        }
        if (props.kind === 'button') {
                return (
                        <ButtonStyles
                                type="button"
                                id="navAction"
                                onClick={() => doNavigate(link)}
                                className="button variable"
                                // className={props.buttonActionClass || ''}
                        >
                                {props.title}
                        </ButtonStyles>
                );
        }

        // External
        if (props.link) {
                return (
                        <a href={props.link} className="a variable" target="_blank" rel="noopener noreferrer">
                                {props.title}
                        </a>
                );
        }

        const { isNavOpen, toggleNavOpen } = useContext(SiteContext);

        return (
                <span className="orange-underline-link">
                        <Link className="gatsby link variable" to={`/${link}`} onClick={isNavOpen && toggleNavOpen}>
                                {props.title}
                        </Link>
                </span>
        );
};

export default CTALink;
