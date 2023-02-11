import styles from './MainPage.style.module.sass';
import car from './../../assets/img/car.png'
import {Link} from "react-router-dom";
import Card from "../../components/UI/Card/Card";
import image from '../../assets/img/assistance.png'
import autoTransport from '../../assets/img/auto-transport.png';
import CardInterface from "../../components/UI/Card/Card.types";
import wareHousing from "../../assets/img/warehousing.png"
import {Carousel} from "../../components/UI/Carousel/Carousel";
import {CarouselPage} from "../../components/UI/CarouselPage/CarouselPage";

export const MainPage = () => {
    const cardArray: Array<CardInterface> = [
        {
            image: image,
            alt: 'car',
            title: 'Buying assistance',
        },
        {
            image: autoTransport,
            alt: 'auto transport',
            title: 'Auto transport',
        },
        {
            image: wareHousing,
            alt: 'Warehousing',
            title: 'Warehousing',
            className: styles.card_warehouse
        },
        {
            image: image,
            alt: 'car',
            title: 'Buying assistance',
        },
        {
            image: image,
            alt: 'car',
            title: 'Buying assistance',
        },
        {
            image: image,
            alt: 'car',
            title: 'Buying assistance',
        },
        {
            image: image,
            alt: 'car',
            title: 'Buying assistance',
        },
        {
            image: image,
            alt: 'car',
            title: 'Buying assistance',
        },
        {
            image: image,
            alt: 'car',
            title: 'Buying assistance',
        },
    ]
    return (

        <main className={styles.page}>
            <h1 className={styles.title}>
                We are an American based company professionally provide
                <span> auto auction participating </span>
            </h1>

            <p className={styles.subtitle}>
                We ship cars, motorcycles, boats, special machinery in containers from the USA to all over the
                world.
            </p>
            <img alt={'car'} className={styles.page__image} src={car}/>
            <Link className={styles.button__link} to='/contacts'>
                Contact us
            </Link>

            <div className={styles.services__container}>
                <h3>Services we do</h3>

                <div className={styles.services}>
                    {cardArray.map((card, index) => {
                        return <Card className={card.className ?? undefined} key={index} image={card.image}
                                     alt={card.alt} title={card.title}/>
                    })}
                </div>
            </div>

            <Link to={'/services'} className={styles.services__button}>
                MORE ABOUT SERVICES
            </Link>

            <Carousel windowWidth={'283'} className={styles.carousel}>
                <CarouselPage>
                    #1 dsfsdf
                </CarouselPage>
                <CarouselPage>
                    #2 dsfsdf
                </CarouselPage>
                <CarouselPage>
                    #3 dsfsdf
                </CarouselPage>
                <CarouselPage>
                    #3 dsfsdf
                </CarouselPage>
                <CarouselPage>
                    #3 dsfsdf
                </CarouselPage>
            </Carousel>
        </main>

    )
}