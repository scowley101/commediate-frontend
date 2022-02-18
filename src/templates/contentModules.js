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
import Contact from '../components/ContentDisplay/Contact';
import WordCloud from '../components/ContentDisplay/WordCloud';
import FlowList from '../components/ContentDisplay/FlowList';
import IconPlug from '../components/ContentDisplay/IconPlug';

const ContentModules = (props) => {
        const { rawKey, c } = props;
        const topModule = rawKey === 0;
        switch (c._type) {
                case 'hero':
                        return <Hero className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'cvTimeline':
                        return (
                                <CvTimeline
                                        className={topModule && 'top-module'}
                                        topModule={topModule}
                                        key={c._key}
                                        {...c}
                                />
                        );

                case 'illustrations':
                        return <Illustrations className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'oneColumnList':
                        return <OneColumnList className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'oneColumnText':
                        return <OneColumnText className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'roleComparison':
                        return <RoleComparison className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'testimonials':
                        return <Testimonials className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'twoColumnList':
                        return <TwoColumnList className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'twoColumnText':
                        return <TwoColumnText className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'comparisonLists':
                        return <ComparisonLists className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'horizontalBlocks':
                        return <HorizontalBlocks className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'contactForm':
                        return <Contact className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'wordCloud':
                        return <WordCloud className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'flowLists':
                        return <FlowList className={topModule && 'top-module'} key={c._key} {...c} />;

                case 'iconPlug':
                        return <IconPlug className={topModule && 'top-module'} key={c._key} {...c} />;

                default:
                        return null;
        }
};

export default ContentModules;
