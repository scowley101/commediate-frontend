import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const defaultValues = {
        isNavOpen: false,
        isLoading: false,
        toggleNavOpen: () => {},
};

export const SiteContext = createContext(defaultValues);

// Check if it's a browser
const isBrowser = typeof window !== 'undefined';

export function SiteProvider({ children }) {
        const [isNavOpen, setNavOpen] = useState(false);

        const [isLoading, setLoading] = useState(false);

        const toggleNavOpen = () => {
                setNavOpen(!isNavOpen);
        };

        return (
                <SiteContext.Provider
                        value={{
                                ...defaultValues,
                                toggleNavOpen,
                                isNavOpen,
                        }}
                >
                        {children}
                </SiteContext.Provider>
        );
}

SiteProvider.propTypes = {
        children: PropTypes.node,
};
