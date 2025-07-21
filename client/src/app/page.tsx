"use client";
import CategoryList from "@/components/CategoryList";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <div>
        <Slider />
        <div className="mt-24 px-24 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <h1 className="text-2xl">Featured Products</h1>
          <ProductList />
        </div>
        <div className="mt-24">
          <h1 className="text-2xl px-24 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Categories</h1>
          <CategoryList />
        </div>
        <div className="mt-24 px-24 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <h1 className="text-2xl">New Products</h1>
          <ProductList />
        </div>
      </div>
    </>
  );
}
