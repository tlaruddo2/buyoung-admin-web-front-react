import './main.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Nav } from './component/nav/nav';
// import { ConditionManagement } from './pages/condition-management/condition-management';
import { Home } from './pages/home';
import { ProductionLog } from './pages/production-log/production-log';
import { SignIn } from './pages/sign-in';
import { useAuthStore } from './hooks/auth/useAuthStore';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    console.log("Not authenticated, redirecting to sign-in");
    return <Navigate to="/sign-in" replace />;
  }
  console.log("Authenticated, rendering children");
  return <>{children}</>;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster 
          position="top-center"
          containerStyle={{
            zIndex: 9999999, 
          }}
          toastOptions={{
            style: {
              zIndex: 99999999, 
            },
            success: {
              style: {
                background: 'green',
                color: 'white',
              },
            },
            error: {
              style: {
                background: 'red',
                color: 'white',
              },
            },
            
          }}
        />
        <Routes>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/" element={<Navigate to="/sign-in" replace />}/>
          <Route path="/dashboard/*" element={
            <ProtectedRoute>
              <>
                <Nav/>
                <Routes>
                  <Route index element={<Home/>}/>
                  {/* <Route path="/condition-management" element={<ConditionManagement/>}/> */}
                  <Route path="/production-log" element={<ProductionLog/>}/>
                </Routes>
              </>
            </ProtectedRoute> 
          }/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
);
