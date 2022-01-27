import React from 'react';
import PortableText from '../PortableText';

function JobRole({ role: { jobTitle, text } }) {
        return (
                <>
                        <h5>
                                {jobTitle}
                                {/* <PortableText blocks={role} /> */}
                        </h5>
                        {text.map((i) => (
                                <>
                                        <h6>{i.listHeading}</h6>
                                        <PortableText blocks={i.text} />
                                </>
                        ))}
                </>
        );
}
function RoleComparison({ heading, jobRoles }) {
        return (
                <div>
                        <h4>
                                <PortableText blocks={heading} />
                        </h4>
                        {jobRoles.map((role) => (
                                // console.log(role.text);

                                <JobRole role={role}>A role</JobRole>
                        ))}
                </div>
        );
}

export default RoleComparison;
