import Slider from "react-slick";
import {Link as BrowserLink} from 'react-router-dom'
import RecommendCard from "../../recommendCard/recommend card";
import useWindowSize from "../../../hooks/useWindowSize";
import './carousel-slick.css';
import "./slick-theme.css";


export default function HomePageCarousel(props)  {
    const [renderData] = props.data
    const {width} = useWindowSize()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: width > 800,
        slidesToShow: width > 800 ? 3: width > 650? 2: 1,
        slidesToScroll: width > 700 ? 3: 1
    };

    const filteredRenderData = renderData?.hits.filter(item => item.product === 'hot')

    return (
        <div className={'inner_slick'}>
            <h2 className="title">{props.title}</h2>
            <Slider {...settings}>
                {
                    filteredRenderData.map(card => <BrowserLink to={`rent/${card.externalID}`} key = {card.externalID}>
                        <RecommendCard item={card}/>
                    </BrowserLink>)
                }
            </Slider>
        </div>
    );
}