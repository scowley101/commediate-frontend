import React from 'react';

function GraphQLErrorList({ errors }) {
        return (
                <div>
                        <h1>GraphQL Error</h1>
                        {errors.map((error) => (
                                <pre key={error.message}>{error.message}</pre>
                        ))}
                </div>
        );
}

export default GraphQLErrorList;
