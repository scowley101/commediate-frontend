import React from 'react';
import Hero from '../components/ContentDisplay/Hero';
import CvTimeline from '../components/ContentDisplay/CvTimeline';
import Illustrations from '../components/ContentDisplay/Illustrations';
import OneColumnList from '../components/ContentDisplay/OneColumnList';
import RoleComparison from '../components/ContentDisplay/RoleComparison';
import Testimonials from '../components/ContentDisplay/Testimonials';
import TwoColumnList from '../components/ContentDisplay/TwoColumnList';
import TwoColumnText from '../components/ContentDisplay/TwoColumnText';
import OneColumnText from '../components/ContentDisplay/OneColumnText';
import ComparisonLists from '../components/ContentDisplay/ComparisonLists';
import HorizontalBlocks from '../components/ContentDisplay/HorizontalBlocks';
import ContactForm from '../components/ContentDisplay/ContactForm';

const ContentModules = ({ c }) => {
        switch (c._type) {
                case 'hero':
                        return <Hero key={c._key} {...c} />;

                case 'cvTimeline':
                        return <CvTimeline key={c._key} {...c} />;

                case 'illustrations':
                        return <Illustrations key={c._key} {...c} />;

                case 'oneColumnList':
                        return <OneColumnList key={c._key} {...c} />;

                case 'oneColumnText':
                        return <OneColumnText key={c._key} {...c} />;

                case 'roleComparison':
                        return <RoleComparison key={c._key} {...c} />;

                case 'testimonials':
                        return <Testimonials key={c._key} {...c} />;

                case 'twoColumnList':
                        return <TwoColumnList key={c._key} {...c} />;

                case 'twoColumnText':
                        return <TwoColumnText key={c._key} {...c} />;

                case 'comparisonLists':
                        return <ComparisonLists key={c._key} {...c} />;

                case 'horizontalBlocks':
                        return <HorizontalBlocks key={c._key} {...c} />;

                case 'contactForm':
                        return <ContactForm key={c._key} {...c} />;

                default:
                        return null;
        }
};

export default ContentModules;
