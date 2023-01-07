import { useEffect, useState } from 'react';

import Slider from 'react-slick';

import { Subtitle } from '../Subtitle';
import { Comment } from '../Comment';

import burgerChips from '../../assets/instagram/burger-chips.png';
import threeBurger from '../../assets/instagram/three-burger.png';
import womanBurger from '../../assets/instagram/woman-burger.png';
import burger from '../../assets/instagram/burger.png';
import burger1 from '../../assets/instagram/burger1.png';
import burger2 from '../../assets/instagram/burger2.png';
import burger3 from '../../assets/instagram/burger3.png';
import burger4 from '../../assets/instagram/burger4.png';

import { Container, ContainerCommentSocialMedia, WrapperImagesMarquee, WrapperImages, ContainerMarquee } from './styles';
import Marquee from 'react-fast-marquee';
interface CommentsProps {
  age: number;
  image: string;
  name: string;
  testimonial: string;
}

export function Comments() {
  const [testimonials, setTestimonials] = useState<CommentsProps[]>([]);

  useEffect(() => {
    fetch('https://api.brchallenges.com/api/empire-burger/testimonials')
      .then(async (response) => {
        const json = await response.json();
        setTestimonials(json);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          dots: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1.2,
          dots: false,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1.1,
          dots: false,
        }
      }
    ]
  };

  return (
    <Container>
      <Subtitle
        title="Nossa Realeza"
        description="A satisfação de nossos clientes em primeiro lugar!"
      />

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Comment
            key={index}
            comment={testimonial.testimonial}
            avatar={testimonial.image}
            name={testimonial.name}
            age={testimonial.age}
          />
        ))}
      </Slider>

      <ContainerCommentSocialMedia>
        <Subtitle
          title="Publicações do Instagram"
          description="Todos os nossos clientes são tratados como rei e rainha, com a nossa culinária artesanal."
        />

        <WrapperImagesMarquee>
          <WrapperImages>
            <img className="images-instagram" src={burger1} alt="" />
            <img className="images-instagram" src={burger2} alt="" />
            <img className="images-instagram" src={burgerChips} alt="" />
            <img className="images-instagram" src={burger} alt="" />
            <img className="images-instagram" src={threeBurger} alt="" />
            <img className="images-instagram" src={womanBurger} alt="" />
            <img className="images-instagram" src={burger4} alt="" />
            <img className="images-instagram" src={burger3} alt="" />
          </WrapperImages>

          <Marquee speed={40} gradient={false}>
            <ContainerMarquee>
              <span>#Empireburger &#x2022;</span>
              <span>#Empireburger &#x2022;</span>
              <span>#Empireburger &#x2022;</span>
              <span>#Empireburger &#x2022;</span>
              <span>#Empireburger &#x2022;</span>
              <span>#Empireburger &#x2022;</span>
              <span>#Empireburger &#x2022;</span>
              <span>#Empireburger &#x2022;</span>
              <span>#Empireburger &#x2022;</span>
            </ContainerMarquee>
          </Marquee>
        </WrapperImagesMarquee>
      </ContainerCommentSocialMedia>
    </Container>
  );
}
