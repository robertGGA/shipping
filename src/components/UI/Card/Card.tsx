import styles from './Card.style.module.sass';
import {Link} from "react-router-dom";
import {FC, memo} from "react";
import CardInterface from "./Card.types";
const Card: FC<CardInterface> = (
    {
        title,
        image,
        className,
        alt,
    }
) => {
    return (
        <Link to={'/contact'} className={styles.card}>
            <p className={styles.card__title}>
                {title}
            </p>
            <img alt={alt} className={className ? `${className} ${styles.card__image}` : styles.card__image} src={image}/>
        </Link>
    )
}

export default memo(Card);