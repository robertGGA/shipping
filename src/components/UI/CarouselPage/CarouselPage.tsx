import {FC} from "react";
import CarouselPageTypes from "./CarouselPage.types";
import styles from './CarouselPage.style.module.sass';
import img from '../../../assets/img/delivery-courier-1.png'

export const CarouselPage: FC<CarouselPageTypes> = ({
                                                        children,
                                                        className,
                                                        style
                                                    }) => {
    return (
        <div style={style} className={styles.page}>
            <div className={styles.page__circle}>
                <img alt={''} src={img}/>
            </div>
            <span className={styles.page__title}>
                Bid and buy a lot
            </span>
            <span className={styles.page__subtitle}>
                There's a wide variety of auctions where bargains can be had at wholesale prices for buyers who know what they’re doing.
            </span>
        </div>
    )
}