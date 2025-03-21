import './main.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Nav } from './component/nav/nav';
import { ConditionManagement } from './pages/condition-management/condition-management';
import { Home } from './pages/home';
import { ProductionLog } from './pages/production-log/production-log';
import { SignIn } from './pages/sign-in';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  console.log("ProtectedRoute check running");
  const isAuthenticated = () => {
    const authState = localStorage.getItem('isAuthenticated');
    console.log("Auth state:", authState);
    return authState === 'true';
  };

  if (!isAuthenticated()) {
    console.log("Not authenticated, redirecting to sign-in");
    return <Navigate to="/sign-in" replace />;
  }
  console.log("Authenticated, rendering children");
  return <>{children}</>;
};

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/" element={<Navigate to="/sign-in" replace />}/>
        <Route path="/dashboard/*" element={
          <ProtectedRoute>
            <>
              <Nav/>
              <Routes>
                <Route index element={<Home/>}/>
                <Route path="/condition-management" element={<ConditionManagement/>}/>
                <Route path="/production-log" element={<ProductionLog/>}/>
              </Routes>
            </>
          </ProtectedRoute> 
        }/>
      </Routes>
    </BrowserRouter>
);
