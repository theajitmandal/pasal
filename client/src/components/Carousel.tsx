    'use client';
    import Slider, { Settings } from 'react-slick';
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface CarouseItem {
  name: string;
  path: string;
}

    interface CarouselProps {
      // Define any props your carousel might need
      imageLinks: CarouseItem[];
    }

    const Carousel: React.FC<CarouselProps> = ({imageLinks}) => {
      const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
      return (
        <div>
          <h2>My Awesome Carousel</h2>
          <Slider {...settings}>
            {imageLinks.map((item) => (
              <Image src={`/${item.path}`} alt={`${item.name}`} width={500} height={500}/>
            ))
            }
            <div>
              <h3>Slide 1 Content</h3>
            </div>
            <div>
              <h3>Slide 2 Content</h3>
            </div>
            <div>
              <h3>Slide 3 Content</h3>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      );
    };

    export default Carousel;