const API_BASE_URL = 'http://localhost:3000/api'; // یا آدرس سرور شما

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Product APIs
export const productAPI = {
  // دریافت همه محصولات
  getAllProducts: (page = 1, limit = 10) => 
    apiCall(`/products?page=${page}&limit=${limit}`),
  
  // دریافت محصول بر اساس ID
  getProductById: (id) => 
    apiCall(`/products/${id}`),
  
  // جستجوی محصولات
  searchProducts: (query) => 
    apiCall(`/products/search?q=${encodeURIComponent(query)}`),
  
  // دریافت محصولات بر اساس دسته‌بندی
  getProductsByCategory: (categoryId) => 
    apiCall(`/products/category/${categoryId}`),
  
  // ایجاد محصول جدید (نیاز به authentication)
  createProduct: (productData, token) => 
    apiCall('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
  
  // به‌روزرسانی محصول
  updateProduct: (id, productData, token) => 
    apiCall(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
  
  // حذف محصول
  deleteProduct: (id, token) => 
    apiCall(`/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
};

// Category APIs
export const categoryAPI = {
  // دریافت همه دسته‌بندی‌ها
  getAllCategories: () => 
    apiCall('/categories'),
  
  // دریافت دسته‌بندی بر اساس ID
  getCategoryById: (id) => 
    apiCall(`/categories/${id}`),
  
  // ایجاد دسته‌بندی جدید
  createCategory: (categoryData, token) => 
    apiCall('/categories', {
      method: 'POST',
      body: JSON.stringify(categoryData),
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
};

// User APIs
export const userAPI = {
  // ثبت‌نام کاربر
  register: (userData) => 
    apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
  
  // ورود کاربر
  login: (credentials) => 
    apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
  
  // دریافت اطلاعات کاربر
  getProfile: (token) => 
    apiCall('/auth/profile', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
  
  // به‌روزرسانی پروفایل
  updateProfile: (userData, token) => 
    apiCall('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
};

// Order APIs
export const orderAPI = {
  // ایجاد سفارش جدید
  createOrder: (orderData, token) => 
    apiCall('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
  
  // دریافت سفارشات کاربر
  getUserOrders: (token) => 
    apiCall('/orders/user', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
  
  // دریافت جزئیات سفارش
  getOrderById: (id, token) => 
    apiCall(`/orders/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
};

// Cart APIs
export const cartAPI = {
  // اضافه کردن محصول به سبد خرید
  addToCart: (productId, quantity, token) => 
    apiCall('/cart/add', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
  
  // دریافت سبد خرید
  getCart: (token) => 
    apiCall('/cart', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
  
  // حذف محصول از سبد خرید
  removeFromCart: (productId, token) => 
    apiCall(`/cart/remove/${productId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
  
  // به‌روزرسانی تعداد محصول
  updateCartItem: (productId, quantity, token) => 
    apiCall('/cart/update', {
      method: 'PUT',
      body: JSON.stringify({ productId, quantity }),
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
};

// Review APIs
export const reviewAPI = {
  // دریافت نظرات محصول
  getProductReviews: (productId) => 
    apiCall(`/reviews/product/${productId}`),
  
  // اضافه کردن نظر جدید
  addReview: (productId, reviewData, token) => 
    apiCall(`/reviews/product/${productId}`, {
      method: 'POST',
      body: JSON.stringify(reviewData),
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }),
};

export default {
  productAPI,
  categoryAPI,
  userAPI,
  orderAPI,
  cartAPI,
  reviewAPI,
};
