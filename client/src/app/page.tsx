"use client";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
    <div>
      <Slider/>
      <div className="mt-24 px-24 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList/>
      </div>
    </div>

    </>
  );
}
