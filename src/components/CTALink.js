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

function CTALink(props) {
        const { route, link, landingPageRoute, kind, buttonActionClass, title } = props;
        let validatedLink = route || link || '#';
        if (landingPageRoute && landingPageRoute.slug && landingPageRoute.slug.current) {
                validatedLink = landingPageRoute.slug.current;
        }

        if (kind === 'button') {
                return (
                        <button
                                type="button"
                                id="navAction"
                                onClick={() => doNavigate(link)}
                                className={buttonActionClass || ''}
                        >
                                {title}
                        </button>
                );
        }

        // External
        if (validatedLink) {
                return (
                        <a href={validatedLink} target="_blank" rel="noopener noreferrer">
                                {title}
                        </a>
                );
        }

        return (
                <Link className="mr-3" to={link}>
                        {title}
                </Link>
        );
}

export default CTALink;
