import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Products from "./pages/Products";
import Comments from "./pages/Comments";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import AuthProvider from "./contexts/AuthProvider";
import Menu from "./ui/Menu";
import Messages from "./pages/Messages";
import DiscountedCode from "./pages/DiscountedCode";
import Users from "./pages/Users";
import Transports from "./pages/Transports";
import Warranty from "./pages/warranty";
import Brands from "./pages/Brands";
import Categories from "./pages/Categories";
import Variants from "./pages/Variants";
import WebsiteCustomization from "./pages/WebsiteCustomization";
import TodoList from "./pages/TodoList";
import Message from "./pages/message";
import Club from "./pages/Club";
import Reports from "./pages/Reports";
import AuthLayout from "./pages/AuthLayout";
import LoginForm from "./features/authentication/LoginForm";
import ConfirmLoginForm from "./features/authentication/ConfirmLoginForm";
function App() {
   const queryClient = new QueryClient({
      defaultOptions: {
         queries: {
            // staleTime: 60 * 1000,
            staleTime: 0,
         },
      },
   });

   return (
      <DarkModeProvider>
         <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles />
            <AuthProvider>
               <BrowserRouter>
                  <Routes>
                     <Route path="/" element={<AppLayout />}>
                        <Route
                           index
                           element={<Navigate replace to="dashboard" />}
                        />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="orders" element={<Orders />} />
                        <Route
                           path="order/:orderId"
                           element={<OrderDetails />}
                        />
                        <Route path="products" element={<Products />} />
                        <Route path="comments" element={<Comments />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="account" element={<Account />} />
                        <Route path="menu" element={<Menu />} />
                        <Route
                           path="discountedCode"
                           element={<DiscountedCode />}
                        />
                        <Route path="messages" element={<Messages />}>
                           <Route
                              path="messages/:messageId"
                              element={<Message />}
                           />
                        </Route>
                        <Route path="payment-ways" element={<Messages />} />
                        <Route path="users" element={<Users />} />
                        <Route path="transports" element={<Transports />} />
                        <Route path="transports" element={<Transports />} />
                        <Route path="warranty" element={<Warranty />} />
                        <Route path="brands" element={<Brands />} />
                        <Route path="categories" element={<Categories />} />
                        <Route path="variants" element={<Variants />} />
                        <Route path="club" element={<Club />} />
                        <Route path="reports" element={<Reports />} />
                        <Route
                           path="websiteCustomization"
                           element={<WebsiteCustomization />}
                        />
                        <Route path="todoList" element={<TodoList />} />
                     </Route>
                     <Route path="login" element={<AuthLayout />}>
                        <Route
                           index
                           element={<LoginForm/>}
                        />
                        <Route
                           path="verify/:email"
                           element={<ConfirmLoginForm/>}
                        />
                     </Route>
                     <Route path="*" element={<PageNotFound />} />
                  </Routes>
               </BrowserRouter>
            </AuthProvider>

            <Toaster
               position="top-center"
               gutter={12}
               containerStyle={{ margin: "8px" }}
               toastOptions={{
                  success: {
                     duration: 3000,
                  },
                  error: {
                     duration: 5000,
                  },
                  style: {
                     fontFamily: "Morabba",
                     background: "#33383f71",
                     border: "1.5px solid #33383fa0",
                     boxShadow: "var(--shadow-sm)",
                     fontSize: "16px",
                     maxWidth: "500px",
                     padding: "14px 22px",
                     borderRadius: "50px",
                     backdropFilter: "blur(15px)",
                     color: "var(--color-grey-900)",
                  },
               }}
            />
         </QueryClientProvider>
      </DarkModeProvider>
   );
}

export default App;
