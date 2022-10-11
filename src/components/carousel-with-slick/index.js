import "./slick-theme.css";
import './carousel-slick.css';
import Slider from "react-slick";
import RecommendCard from "../recommendCard/recommend card";

export default function CenterMode(props)  {
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
                        filteredRenderData.map(card => <RecommendCard key = {card.externalID} item={card}/>)
                    }
                </Slider>
            </div>
        );
}