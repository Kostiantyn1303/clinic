import React from "react";
import sprite from "../../Images/icons.svg";
import MyImage from "../../Images/clients.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"; // Імпортуємо styled-components
import { ReviewsContainer, Title, Img } from "./Reviews.styled";
import { Element } from "react-scroll";
const TestimonialsCarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const TestimonialSlide = styled.div`
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const Author = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      author: "John Doe",
      text: " All the employees were professional and so very kind. I like that they listen to me and seem genuinely caring about my problems. Thank you.",
    },
    {
      author: "Jane Smith",
      text: "The nurse was amazing. She was very caring and sweet. She knew what she was doing and was so helpful. If I am ever in need while I am visiting, I would come here again.",
    },
    {
      author: "Bob Johnson",
      text: "I appreciate the friendly, non-threatening atmosphere and the prompt attention I received. I have already recommended Well-Key to many friends and would not hesitate to return if necessary. Thank you!",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Element name="reviews">
      <ReviewsContainer id="Reviews">
        <Title>Feedback from ours clients</Title>
        <TestimonialsCarouselContainer>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialSlide key={index}>
                <p>{testimonial.text}</p>
                <Author>{testimonial.author}</Author>
                <div>
                  {" "}
                  <svg stroke="gray" width="24" height="24">
                    <use href={sprite + "#icon-bubbl"} />
                  </svg>
                  <Img height={400} src={MyImage} alt="" />
                </div>
              </TestimonialSlide>
            ))}
          </Slider>
        </TestimonialsCarouselContainer>
      </ReviewsContainer>
    </Element>
  );
};

export default TestimonialsCarousel;
