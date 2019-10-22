import React from 'react';
import classNames from 'classnames';
import styles from './Brand.module.scss';

export default function Brand({ className }) {
    return (
        <span className={classNames(styles.brand, className)}>Eric Lee</span>
    );
}