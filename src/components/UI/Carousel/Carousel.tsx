import CarouselTypes from "./Carousel.types";
import React, {Children, cloneElement, FC, useState} from "react";
import styles from './Carousel.style.module.sass';


export const Carousel: FC<CarouselTypes> = ({children, className, windowWidth}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const changeActiveIndex = () => {
        if (activeIndex < Children.count(children)) {
            setActiveIndex((v) => ++v);
        }

        if (activeIndex >= Children.count(children) - 1) {
            setActiveIndex(0);
        }
        getWidthOfPage();
    }

    const getWidthOfPage = () => {
        Children.forEach(children, (child) => {
            console.log(child);
        })
    }

    return (
        <div className={`${styles.main_container} ${className}`}>
            <div style={{width: windowWidth + 'px'}} className={styles.window}>
                <div className={styles.carousel} style={{transform: `translateX(${-100 * activeIndex}%)`}}>
                    {React.Children.map(children!, (child) => {
                       return cloneElement(child, {
                            styles: {
                                ...child.props.styles,
                                height: '100%',
                                minWidth: '100%',
                                maxHeight: '100%'
                            }
                       })
                    })}
                </div>
            </div>
            <button onClick={changeActiveIndex} className={styles.button}>
                changeState
            </button>
        </div>
    )
}