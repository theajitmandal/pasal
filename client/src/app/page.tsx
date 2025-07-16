"use client";
import Carousel from "@/components/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
    <div>Home Page</div>
    <Carousel           
    imageLinks={[
      'a.jpg',
      'b.jpg',
      'c.jpg',
      'd.jpg',
      'e.jpg',
      'f.jpg',

    ]}/>
    </>
  );
}
