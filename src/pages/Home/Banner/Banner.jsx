import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Ban1  from'../../../assets/home/01.jpg'
import Ban2  from'../../../assets/home/02.jpg'
import Ban3  from'../../../assets/home/03.png'
import Ban4  from'../../../assets/home/04.jpg'
import Ban5  from'../../../assets/home/05.png'
import Ban6  from'../../../assets/home/06.png'
function Banner() {
  return (
    <Carousel>
    <div>
        <img src={Ban1} />
        
    </div>
    <div>
        <img src={Ban2} />
        
    </div>
    <div>
        <img src={Ban3} />
        
    </div>
    <div>
        <img src={Ban4} />
        
    </div>
    <div>
        <img src={Ban5} />
        
    </div>
    <div>
        <img src={Ban6} />
        
    </div>
</Carousel>
  )
}

export default Banner