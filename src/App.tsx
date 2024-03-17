import { Route, Routes } from 'react-router-dom';
//component import
import Signup from './components/SignupForm';
import Login from './components/LoginForm';
import Navbar from './components/Nav';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import User from './pages/User';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <main className="pt-12">
      <ScrollToTop />
      <Toaster richColors position="bottom-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/topPicks" element={<h1>Top Pics</h1>} />
        <Route path="/trending" element={<h1>Trending</h1>} />
        <Route path="/user" element={<User />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
