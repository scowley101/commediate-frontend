import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import PortableText from '../PortableText';

const CodeStyles = styled.div`
        padding: var(--componentPadding);
`;

function CodeInjection({ code: { code } }) {
        const myHtml = code;
        return (
                <CodeStyles>
                        <div dangerouslySetInnerHTML={{ __html: myHtml }} />
                </CodeStyles>
        );
}

export default CodeInjection;
