import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const LinksList = [  
  {
    title: 'Open Project',
    to: 'https://github.com/enygmator/LanternOS',
    Svg: require('../../static/img/github.svg').default,
    description: (
      <>
        Discover the project on GitHub to get the source code, star it, fork it or even contribute to it. It is open source under the
        Apache 2.0 License!
      </>
    ),
  },
  {
    title: 'Go To Documentation',
    to: '/docs/about-lantern-os',
    Svg: require('../../static/img/documentation.svg').default,
    description: (
      <>
        Delve into the Documentation of the LanternOS project to understand the inner working of the code, how it all comes together
        and how you can extend it with your own code and contributions!
      </>
    ),
  },
  {
    title: 'Checkout Blog',
    to: '/blog',
    Svg: require('../../static/img/blogger.svg').default,
    description: (
      <>
        Check out the blog posts for a peek into the process of the Development of this project and how it evolved over time!
      </>
    ),
  },
];

function LinkButton({Svg, to, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <p></p>
      <div className="text--center padding-horiz--md">
        <div className={styles.buttons}>
          <Link
            className={styles.buttonbg + " button button--lg"}
            to={to}>{title}
          </Link>
        </div>
        <p></p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageLinks() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {LinksList.map((props, idx) => (
            <LinkButton key={idx} {...props}/>
          ))}
        </div>
      </div>
    </section>
  );
}
