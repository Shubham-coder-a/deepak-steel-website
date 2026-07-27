import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { InquiryModal } from '../components/InquiryModal';

export const MainLayout = () => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenInquiry = (product = null) => {
    setSelectedProduct(product);
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Header onOpenInquiry={handleOpenInquiry} />

      <main className="flex-grow">
        <Outlet context={{ handleOpenInquiry }} />
      </main>

      <Footer />

      <FloatingWhatsApp />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};
