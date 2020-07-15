import React from 'react';

import styles from './index.module.scss';
import GithubIcon from '@icons/Github';
import LinkedInIcon from '@icons/LinkedIn';

const Footer = () => (
    <footer className={styles['c-footer']}>
        <section className={`container ${styles['wrapper']}`}>
            <a
                href="https://github.com/caco-jr/store"
                className={styles['source']}
                rel="noopener"
                target="_blank"
            >
                <GithubIcon className={styles['source-icon']} />
            </a>

            <a
                href="https://www.linkedin.com/in/carlos-costa-jr/"
                className={styles['linkedIn']}
                rel="noopener"
                target="_blank"
            >
                <LinkedInIcon className={styles['linkedIn-icon']} />
            </a>
        </section>
    </footer>
);

export default Footer;
