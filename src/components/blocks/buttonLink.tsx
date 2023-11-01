import styles from './Button.module.css';
import {Link} from "react-router-dom";
import {MouseEvent} from 'react';

export enum ButtonType {
    INFO = 'info',
    SUCCESS = 'success',
    FAILURE = 'failure',
    WARNING = 'warning',
}

export interface ButtonLinkProps {
    to: string
    type: ButtonType,
    label: string,
}

export interface ButtonProps {
    type: ButtonType,
    label: string,
    handler: (e: MouseEvent<HTMLButtonElement>) => void
}

const getButtonClassNameByType = (type: ButtonType) => {
    switch (type) {
        case ButtonType.INFO:
            return styles.info;
        case ButtonType.SUCCESS:
            return styles.success;
        case ButtonType.FAILURE:
            return styles.failure;
        case ButtonType.WARNING:
            return styles.warning;
    }
}

export const ButtonLink = (props: ButtonLinkProps) => {

    const getButtonClassNameByType = (type: ButtonType) => {
        switch (type) {
            case ButtonType.INFO:
                return styles.info;
            case ButtonType.SUCCESS:
                return styles.success;
            case ButtonType.FAILURE:
                return styles.failure;
            case ButtonType.WARNING:
                return styles.warning;

        }
    }

    return <Link className={`${styles.buttonLink} ${getButtonClassNameByType(props.type)}`}
                 to={props.to}>{props.label}</Link>;
}

export const Button = (props: ButtonProps) => {
    return <button className={`${styles.buttonLink} ${getButtonClassNameByType(props.type)}`}
                   onClick={props.handler}>{props.label}</button>;
}

