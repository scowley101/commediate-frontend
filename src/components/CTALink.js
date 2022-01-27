import React from 'react';
import { Link, navigate } from 'gatsby';

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

const CTALink = (props) => {
        let link = props.route || props.link || '#';
        if (props.landingPageRoute && props.landingPageRoute.slug && props.landingPageRoute.slug.current) {
                link = props.landingPageRoute.slug.current;
        }
        console.log(props.link);
        if (props.kind === 'button') {
                return (
                        <button
                                type="button"
                                id="navAction"
                                onClick={() => doNavigate(link)}
                                className="button variable"
                                // className={props.buttonActionClass || ''}
                        >
                                {props.title}
                        </button>
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

        return (
                <Link className="gatsby link variable" to={`/${link}`}>
                        {props.title}
                </Link>
        );
};

export default CTALink;
