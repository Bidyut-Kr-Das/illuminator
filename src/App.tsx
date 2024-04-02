import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
//component import
import Navbar from './components/Nav';
import Footer from './components/Footer';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import Admin from './pages/Admin';
const Protected = lazy(() => import('./components/Protected'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const User = lazy(() => import('./pages/User'));
const Signup = lazy(() => import('./components/SignupForm'));
const Login = lazy(() => import('./components/LoginForm'));

function App() {
  return (
    <main className="pt-12">
      <ScrollToTop />
      <Toaster richColors position="bottom-right" />
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/topPicks" element={<h1>Top Pics</h1>} />
          <Route path="/trending" element={<h1>Trending</h1>} />
          <Route path="/user" element={<User />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route
            path="/profile"
            element={<Protected Component={ProfilePage} />}
          />
          <Route path="/adminlol" element={<Protected Component={Admin} />} />
        </Routes>
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
