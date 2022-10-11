// Import React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Publicly Available Pages
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRouteComponent from "./components/ProtectedRouteComponent";

// Import User Protected Routes
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";

// Import Admin Protected Routes
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AddminEditProductPage from "./pages/admin/AddminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";

// Import Common Components
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

// Import User Coponents
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

//Utils
import ScrollToTop from "./utils/scrollToTop";

const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        {/* HEADER COMPONENT START */}
        <HeaderComponent />
        {/* HEADER COMPONENT END */}

        <Routes>

      {/* ROUTES WITH USER CHAT COMPONENT START */}

          <Route element={<RoutesWithUserChatComponent/>}>
          {/* PUBLIC AVAILABLE ROUTES START */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="404 Page Not Found" />
           </Route>
          {/* PUBLIC AVAILABLE ROUTES END */}

          {/* USER PROTECTED ROUTES START */}
          <Route element={<ProtectedRouteComponent admin={false} />}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrdersPage />} />
            <Route
              path="/user/cart-details"
              element={<UserCartDetailsPage />}
            />
            <Route
              path="/user/order-details"
              element={<UserOrderDetailsPage />}
            />
          </Route>
          {/* USER PROTECTED ROUTES END */}
         
      {/* ROUTES WITH USER CHAT COMPONENT END */}

          
         

          {/* ADMIN PROTECTED ROUTES START */}
          <Route element={<ProtectedRouteComponent admin={true} />}>
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
            <Route path="/admin/products" element={<AdminProductsPage />} />
            <Route
              path="/admin/create-new-product"
              element={<AdminCreateProductPage />}
            />
            <Route
              path="/admin/edit-product"
              element={<AddminEditProductPage />}
            />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route
              path="/admin/order-details"
              element={<AdminOrderDetailsPage />}
            />
            <Route path="/admin/chats" element={<AdminChatsPage />} />
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          </Route>
          {/* ADMIN PROTECTED ROUTES END */}
        </Routes>

        {/* FOOTER COMPONENT START */}
        <FooterComponent />
        {/* FOOTER COMPONENT END */}
      </BrowserRouter>
    </div>
  );
};

export default App;
