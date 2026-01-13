import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout acts as the parent for all these routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
