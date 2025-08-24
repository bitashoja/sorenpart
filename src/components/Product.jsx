import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { productAPI } from '../services/api';

export default function Product() {
  const { products, setProducts, loading, setLoading, error, setError, addToCart, isAuthenticated } = useApp();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, [currentPage, selectedCategory]);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      let response;
      
      if (selectedCategory) {
        response = await productAPI.getProductsByCategory(selectedCategory);
      } else if (searchQuery) {
        response = await productAPI.searchProducts(searchQuery);
      } else {
        response = await productAPI.getAllProducts(currentPage, 12);
      }
      
      setProducts(response.data || response);
      setError(null);
    } catch (err) {
      setError('خطا در دریافت محصولات');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchProducts();
    }
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      setError('لطفاً ابتدا وارد حساب کاربری خود شوید');
      return;
    }
    
    addToCart({
      productId: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-red-500 text-lg mb-4">{error}</div>
        <button 
          onClick={() => setError(null)}
          className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
        >
          تلاش مجدد
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="جستجوی محصولات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition-colors"
          >
            جستجو
          </button>
        </form>
        
        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => handleCategoryChange('')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !selectedCategory 
                ? 'bg-orange-400 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            همه
          </button>
          {/* Add more category buttons here */}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={product.image || '/images/placeholder.jpg'}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {product.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                  {product.discount}% تخفیف
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {product.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-gray-400 line-through text-sm">
                      {product.originalPrice.toLocaleString()} تومان
                    </span>
                  )}
                  <span className="text-orange-500 font-bold text-lg">
                    {product.price.toLocaleString()} تومان
                  </span>
                </div>
                
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm text-gray-600">
                    {product.rating || 0}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition-colors"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {!searchQuery && !selectedCategory && products.length > 0 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300"
          >
            قبلی
          </button>
          
          <span className="px-4 py-2 text-gray-700">
            صفحه {currentPage}
          </span>
          
          <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500"
          >
            بعدی
          </button>
        </div>
      )}

      {/* No Products Message */}
      {products.length === 0 && !loading && (
        <div className="text-center py-20">
          <div className="text-gray-500 text-lg">
            محصولی یافت نشد
          </div>
        </div>
      )}
    </div>
  );
}
