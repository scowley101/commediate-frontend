import React from 'react';
import Layout from './src/components/Layout';
import { SiteProvider } from './src/components/context/SiteContext';

export function wrapRootElement({ element }) {
        return <SiteProvider>{element}</SiteProvider>;
}
