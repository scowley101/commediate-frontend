import React from 'react';
import PortableText from '../PortableText';

function Job({ job: { company, jobRoleList, roleSummaryList, years } }) {
        console.log(jobRoleList);
        return (
                <>
                        <h5>
                                <PortableText blocks={years} />
                        </h5>

                        <h5>
                                <PortableText blocks={company} />
                        </h5>
                        {jobRoleList?.map((item) => (
                                <p>
                                        <PortableText blocks={item.text} />
                                </p>
                        ))}

                        {roleSummaryList?.map((item) => (
                                <p>
                                        <PortableText blocks={item.text} />
                                </p>
                        ))}
                </>
        );
}

function CvTimeline({ cvItems }) {
        return cvItems.map((job) => <Job job={job} />);
}

export default CvTimeline;
