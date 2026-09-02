import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteEstimatorModal from './components/QuoteEstimatorModal';

import Home from './pages/Home';
import RemodelacionesPage from './pages/RemodelacionesPage';
import ConsorciosPage from './pages/ConsorciosPage';
import LocalesPage from './pages/LocalesPage';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenModal = () => setIsQuoteModalOpen(true);
  const handleCloseModal = () => setIsQuoteModalOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-main-wrapper">
        {/* Sticky Top Navbar */}
        <Navbar onOpenQuoteModal={handleOpenModal} />

        {/* Dynamic Route Pages */}
        <Routes>
          <Route path="/" element={<Home onOpenQuoteModal={handleOpenModal} />} />
          <Route path="/remodelaciones" element={<RemodelacionesPage onOpenQuoteModal={handleOpenModal} />} />
          <Route path="/servicios-a-consorcios" element={<ConsorciosPage onOpenQuoteModal={handleOpenModal} />} />
          <Route path="/locales-y-oficinas" element={<LocalesPage onOpenQuoteModal={handleOpenModal} />} />
          <Route path="*" element={<Home onOpenQuoteModal={handleOpenModal} />} />
        </Routes>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Budget Quote Estimator Modal */}
        <QuoteEstimatorModal 
          isOpen={isQuoteModalOpen} 
          onClose={handleCloseModal} 
        />
      </div>
    </BrowserRouter>
  );
}
