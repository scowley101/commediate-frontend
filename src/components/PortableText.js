import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import { PortableText as Port } from '@portabletext/react';
import clientConfig from '../../client-config';
import serializers from './Serializers';

function PortableText({ blocks, className }) {
        // TODO FIgure out how to push classNames through portable text via serialisers
        return (
                <div className={className}>
                        <BasePortableText
                                className={className}
                                blocks={blocks}
                                serializers={serializers}
                                {...clientConfig.sanity}
                        />
                </div>
                // <div className={className}>
                //         <Port value={blocks} components={serializers} />
                // </div>
        );
}
export default PortableText;
