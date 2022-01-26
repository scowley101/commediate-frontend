import React from 'react';
import GraphQLErrorList from './graphql-error-list';

function Errors({ errors }) {
        return <GraphQLErrorList errors={errors} />;
}

export default Errors;
