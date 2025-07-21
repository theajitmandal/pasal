import React from "react";

// 1:37:13

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 mx-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option>Physical</option>
          <option>Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="type"
          id=""
          className="py-2 mx-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Size</option>
          <option>Size</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 mx-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Color</option>
          <option>Test</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 mx-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Category</option>
          <option>New Arrivals</option>
          <option>Popular</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 mx-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div>
        <select
          name="type"
          id=""
          className="py-2 mx-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="">Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (High to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
