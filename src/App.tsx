
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import DonatorSignup from "./pages/DonatorSignup";
import InstitutionSignup from "./pages/InstitutionSignup";
import Auth from "./pages/Auth";
import MyAccount from "./pages/MyAccount";
import NotFound from "./pages/NotFound";
import Donate from "./pages/Donate";
import DonateProcess from "./pages/DonateProcess";
import Admin from "./pages/Admin";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentError from "./pages/PaymentError";
import React, { useState } from 'react';
import { Heart, BarChart3, Settings, LogOut, Plus } from 'lucide-react';
import DashboardPage from './components/DashboardPage';
import CampaignsPage from './components/CampaignsPage';
import CampaignDashboard from './components/CampaignDashboard';
import DashboardWrapper from './pages/DashboardWrapper';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donator-signup" element={<DonatorSignup />} />
            <Route path="/institution-signup" element={<InstitutionSignup />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/minha-conta" element={<MyAccount />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/donate/:id" element={<DonateProcess />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/payment-sucesso" element={<PaymentSuccess />} />
            <Route path="/payment-errado" element={<PaymentError />} />
            <Route path="/dashboard" element={<DashboardWrapper />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
