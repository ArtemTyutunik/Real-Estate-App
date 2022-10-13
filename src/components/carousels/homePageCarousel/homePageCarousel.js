import "./slick-theme.css";
import './carousel-slick.css';
import Slider from "react-slick";
import RecommendCard from "../../recommendCard/recommend card";
import {Link as BrowserLink} from 'react-router-dom'

export default function HomePageCarousel(props)  {
    const [renderData] = props.data

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const filteredRenderData = renderData?.hits.filter(item => item.product === 'hot')

    return (
        <div>
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