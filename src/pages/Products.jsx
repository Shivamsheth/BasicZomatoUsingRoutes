import React from 'react';

const Products = () => {
  // Dummy products for display
  const products = new Array(5).fill({
    title: "Product 1",
    description: "This is a short product description with some useful info.",
    icon: "🛒",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start hover:scale-105 duration-300 transition-all"
            >
              <div className="text-gray-500 text-2xl mb-2">{product.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
