import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  cart: [],
  products: [],
  categories: [],
  loading: false,
  error: null,
};

// Action types
const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_TOKEN: 'SET_TOKEN',
  LOGOUT: 'LOGOUT',
  SET_CART: 'SET_CART',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_ITEM: 'UPDATE_CART_ITEM',
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return { ...state, user: action.payload };
    
    case ACTIONS.SET_TOKEN:
      localStorage.setItem('token', action.payload);
      return { ...state, token: action.payload };
    
    case ACTIONS.LOGOUT:
      localStorage.removeItem('token');
      return { ...state, user: null, token: null, cart: [] };
    
    case ACTIONS.SET_CART:
      return { ...state, cart: action.payload };
    
    case ACTIONS.ADD_TO_CART:
      const existingItem = state.cart.find(item => item.productId === action.payload.productId);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.productId === action.payload.productId
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, action.payload] };
    
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.productId !== action.payload),
      };
    
    case ACTIONS.UPDATE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.productId === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    
    case ACTIONS.SET_PRODUCTS:
      return { ...state, products: action.payload };
    
    case ACTIONS.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    
    case ACTIONS.CLEAR_ERROR:
      return { ...state, error: null };
    
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions
  const actions = {
    setUser: (user) => dispatch({ type: ACTIONS.SET_USER, payload: user }),
    setToken: (token) => dispatch({ type: ACTIONS.SET_TOKEN, payload: token }),
    logout: () => dispatch({ type: ACTIONS.LOGOUT }),
    setCart: (cart) => dispatch({ type: ACTIONS.SET_CART, payload: cart }),
    addToCart: (item) => dispatch({ type: ACTIONS.ADD_TO_CART, payload: item }),
    removeFromCart: (productId) => dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: productId }),
    updateCartItem: (productId, quantity) => 
      dispatch({ type: ACTIONS.UPDATE_CART_ITEM, payload: { productId, quantity } }),
    setProducts: (products) => dispatch({ type: ACTIONS.SET_PRODUCTS, payload: products }),
    setCategories: (categories) => dispatch({ type: ACTIONS.SET_CATEGORIES, payload: categories }),
    setLoading: (loading) => dispatch({ type: ACTIONS.SET_LOADING, payload: loading }),
    setError: (error) => dispatch({ type: ACTIONS.SET_ERROR, payload: error }),
    clearError: () => dispatch({ type: ACTIONS.CLEAR_ERROR }),
  };

  // Check if user is authenticated
  const isAuthenticated = !!state.token;

  // Get cart total
  const cartTotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Get cart item count
  const cartItemCount = state.cart.reduce((count, item) => count + item.quantity, 0);

  const value = {
    ...state,
    ...actions,
    isAuthenticated,
    cartTotal,
    cartItemCount,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
