import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Products from "./pages/Products";
import Comments from "./pages/Comments";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "../../Best-Project-Idea/frontend/src/pages/UsersValidation/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import AuthProvider from "./contexts/AuthProvider";
import Menu from "./ui/Menu";
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
            <ReactQueryDevtools initialIsOpen={false}/>
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
                           path="order/:bookingId"
                           element={<OrderDetails />}
                        />
                        <Route path="products" element={<Products />} />
                        <Route path="comments" element={<Comments />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="account" element={<Account />} />
                        <Route path="menu" element={<Menu />} />
                     </Route>
                     <Route path="login" element={<Login />} />
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
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backdropFilter: "blur(10px)",
                        color: "var(--color-grey-700)",
                     },
                  }}
               />
         </QueryClientProvider>
      </DarkModeProvider>
   );
}

export default App;
