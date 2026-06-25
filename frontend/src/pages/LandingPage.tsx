import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import {
  ShieldCheck,
  ScanFace,
  Bell,
  Shield,
  Users,
  Building2,
  BarChart3,
  Camera,
  Send,
  CheckCircle,
  Crown,
  Settings,
  BarChart2,
  ClipboardList,
  UserCheck,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Lock,
  Eye,
  Activity,
  Play,
  Menu,
  X
} from 'lucide-react';


export default function LandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuthStore();
  const [activeStep, setActiveStep] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper to determine the dashboard route based on user role
  const getDashboardRoute = () => {
    if (!user) return '/dashboard';
    if (['super_admin', 'support_admin', 'auditor'].includes(user.role)) {
      return '/super-admin/dashboard';
    }
    if (user.role === 'receptionist') {
      return '/check-in';
    }
    return '/dashboard';
  };

  const handleCtaClick = () => {
    if (isAuthenticated) {
      navigate(getDashboardRoute());
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden antialiased">

      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/75 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => navigate('/')}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-slate-900 leading-none">
                  Atithi <span className="text-blue-600">VMS</span>
                </span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5 leading-none">
                  Devo Bhavah
                </span>
              </div>
            </div>

            {/* Navigation links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-250"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-250"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                How It Works
              </a>
              <a
                href="#roles"
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-250"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Roles Matrix
              </a>
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <button
                onClick={handleCtaClick}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2 group cursor-pointer"
              >
                <span>{isAuthenticated ? 'Go to Dashboard' : 'Login'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-slate-600 hover:text-blue-600 hover:bg-slate-100/80 rounded-xl transition-all select-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white animate-slideDown absolute top-16 left-0 right-0 z-40 px-4 py-6 shadow-xl flex flex-col gap-4">
            <a
              href="#features"
              className="block text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-2.5 border-b border-slate-100"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-2.5 border-b border-slate-100"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How It Works
            </a>
            <a
              href="#roles"
              className="block text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-2.5 border-b border-slate-100"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Roles Matrix
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>{isAuthenticated ? 'Go to Dashboard' : 'Login'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-16 lg:py-24 overflow-hidden bg-slate-50 border-b border-slate-200/50">
        {/* Glowing backdrop radial gradients */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-indigo-500/8 rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: Headline and CTA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Premium Pill Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide mb-6 animate-fadeIn shadow-sm select-none">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                <span>AI-Powered • Multi-Tenant • Enterprise Ready</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6">
                Smart Visitor Management <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  For Modern Workplaces
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed">
                Seamlessly check in guests using AI face recognition, issue real-time Telegram host notifications, and isolate multi-tenant workspace data in one secure dashboard.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <button
                  onClick={handleCtaClick}
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-blue-600/10 hover:shadow-blue-600/25 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{isAuthenticated ? 'Enter Dashboard' : 'Get Started Now'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:border-slate-300 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-slate-600" />
                  <span>See How It Works</span>
                </button>
              </div>

              {/* Badges checklist */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]">✓</span>
                  Enterprise Secure
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]">✓</span>
                  InsightFace AI
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]">✓</span>
                  100% Isolated Data
                </span>
              </div>
            </div>

            {/* Right Column: Visual Dashboard Mockup */}
            <div className="lg:col-span-5 flex justify-center w-full relative">
              {/* Background ambient glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl -z-10" />

              {/* Glassmorphic Mockup Container */}
              <div className="w-full max-w-sm sm:max-w-md bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl p-5 relative overflow-hidden select-none animate-fadeIn">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Atithi Scanner • Live Feed</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 bg-slate-800 rounded">RECEPTION-01</span>
                </div>

                {/* Face Scanner Mockup */}
                <div className="relative aspect-video bg-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center justify-center overflow-hidden group mb-4">
                  {/* Neon scan line */}
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" style={{ animation: 'bounce 3s infinite' }} />

                  {/* Scanner Graphic */}
                  <div className="p-4 bg-slate-900/60 rounded-full border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <ScanFace className="w-10 h-10" />
                  </div>

                  {/* Target Bracket details */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-blue-500" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-blue-500" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-blue-500" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-blue-500" />

                  {/* Recognition Match Tag */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-blue-600/90 text-white font-bold text-[10px] px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-white" />
                    <span>AI MATCH FOUND • 98.4%</span>
                  </div>
                </div>

                {/* Active Match Detail Card */}
                <div className="bg-slate-950 rounded-xl border border-slate-800/80 p-3.5 space-y-2 mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xs font-extrabold text-white">Aditi Sharma</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">Visitor from EvolveITSM</p>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Checked In</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] border-t border-slate-900 pt-2 text-slate-400">
                    <div>
                      <span className="text-[8px] text-slate-600 block uppercase font-bold tracking-wider">Host Employee</span>
                      <span className="font-semibold text-slate-300">Rohan Verma (HR)</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-slate-600 block uppercase font-bold tracking-wider">Notification Status</span>
                      <span className="font-semibold text-blue-400 flex items-center gap-1">
                        <Send className="w-2.5 h-2.5" /> Telegram Sent
                      </span>
                    </div>
                  </div>
                </div>

                {/* Activity Feed Snippet */}
                <div className="space-y-2.5">
                  <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider block">Recent Logs</span>

                  {/* Log item 1 */}
                  <div className="flex items-center justify-between text-xs py-1.5 border-t border-slate-800/40">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">SP</div>
                      <div>
                        <p className="font-semibold text-slate-300">Suresh Patel</p>
                        <p className="text-[9px] text-slate-500">Host: Amit Roy</p>
                      </div>
                    </div>
                    <span className="text-[9px] text-slate-400">10:14 AM</span>
                  </div>

                  {/* Log item 2 */}
                  <div className="flex items-center justify-between text-xs py-1.5 border-t border-slate-800/40">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">VS</div>
                      <div>
                        <p className="font-semibold text-slate-300">Vikram Singh</p>
                        <p className="text-[9px] text-slate-500">Host: Neha Sen</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded text-[8px] uppercase tracking-wider">Pending</span>
                  </div>
                </div>
              </div>

              {/* Small floating status bubble */}
              <div className="absolute -bottom-5 left-4 sm:-left-5 bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-xl p-3 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Daily Traffic</p>
                  <p className="text-xs font-black text-slate-900 leading-tight whitespace-nowrap">142 Checked In</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="bg-slate-100/60 border-y border-slate-200/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm hover:shadow transition-shadow duration-200">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 block">6 Roles</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-2.5 block">Granular Control Matrix</span>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm hover:shadow transition-shadow duration-200">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 block">InsightFace</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-2.5 block">Biometric AI Scans</span>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm hover:shadow transition-shadow duration-200">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 block">Instant API</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-2.5 block">Telegram Host Alerts</span>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 text-center shadow-sm hover:shadow transition-shadow duration-200">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 block">Multi-Tenant</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-2.5 block">100% Data Partitioning</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES SECTION */}
      <section id="features" className="py-20 lg:py-28 scroll-mt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 border border-blue-100/60 px-3.5 py-1.5 rounded-full shadow-sm">
              Features List
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-6">
              Securing Workplaces with Modern Technology
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Every detail is engineered to protect workspaces, automate receptions, and notify hosts instantly.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/50 shadow-sm hover:shadow-xl hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <ScanFace className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2.5">AI Face Recognition</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Recognize pre-registered visitors and check them in within seconds. Instantly scan profiles with high precision.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/50 shadow-sm hover:shadow-xl hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2.5">Instant Telegram Alerts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hosts receive real-time notifications on Telegram containing visitor photos and details the moment they check in.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/50 shadow-sm hover:shadow-xl hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2.5">Blacklist Control</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Flag suspicious or unauthorized individuals. Signal immediate security warnings at check-in terminals.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/50 shadow-sm hover:shadow-xl hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2.5">Role-Based Access Control</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Granular matrix from Super Admin down to Security Guards. Protect dashboard reports and access logs accordingly.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/50 shadow-sm hover:shadow-xl hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2.5">Multi-Tenant Isolation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Host multiple corporate offices in one database under absolute tenant isolation and domain configuration rules.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/50 shadow-sm hover:shadow-xl hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2.5">Audit Trails & Charts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Analyze hourly traffic flow, access charts, download audits, and inspect detailed visitor check-in logs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 lg:py-28 scroll-mt-16 bg-slate-100/60 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 border border-blue-100/60 px-3.5 py-1.5 rounded-full shadow-sm">
              Workflow Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-6">
              Check-In Guests in 3 Steps
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Our automated setup minimizes front-desk workload while maximizing facility security.
            </p>
          </div>

          {/* Stepper Grid Layout */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 max-w-5xl mx-auto">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-12 left-16 right-16 h-0.5 bg-slate-300/60 -z-0" />

            {/* Step 1 */}
            <div
              className={`flex-1 flex flex-col items-center text-center relative z-10 cursor-pointer`}
              onMouseEnter={() => setActiveStep(1)}
              onClick={() => setActiveStep(1)}
            >
              <div className={`flex items-center justify-center w-24 h-24 rounded-3xl bg-white shadow-md border ${activeStep === 1 ? 'border-blue-500 ring-4 ring-blue-500/10' : 'border-slate-200/80'} mb-6 relative transition-all duration-300 hover:shadow-lg`}>
                <Camera className={`w-10 h-10 ${activeStep === 1 ? 'text-blue-600' : 'text-slate-500'} transition-colors`} />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-lg shadow-blue-500/20">
                  1
                </div>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Biometric Scan</h3>
              <p className="text-slate-600 text-sm max-w-xs leading-relaxed">
                Guest arrives at terminal. Camera scans face; AI detects returning or registers new profile immediately.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className={`flex-1 flex flex-col items-center text-center relative z-10 cursor-pointer`}
              onMouseEnter={() => setActiveStep(2)}
              onClick={() => setActiveStep(2)}
            >
              {/* Mobile Vertical Separator */}
              <div className="lg:hidden absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-slate-300" />

              <div className={`flex items-center justify-center w-24 h-24 rounded-3xl bg-white shadow-md border ${activeStep === 2 ? 'border-blue-500 ring-4 ring-blue-500/10' : 'border-slate-200/80'} mb-6 relative transition-all duration-300 hover:shadow-lg`}>
                <Send className={`w-10 h-10 ${activeStep === 2 ? 'text-blue-600' : 'text-slate-500'} transition-colors`} />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-lg shadow-blue-500/20">
                  2
                </div>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Instant Alert</h3>
              <p className="text-slate-600 text-sm max-w-xs leading-relaxed">
                The platform dispatches an immediate Telegram notification to the host employee with guest information.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className={`flex-1 flex flex-col items-center text-center relative z-10 cursor-pointer`}
              onMouseEnter={() => setActiveStep(3)}
              onClick={() => setActiveStep(3)}
            >
              {/* Mobile Vertical Separator */}
              <div className="lg:hidden absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-slate-300" />

              <div className={`flex items-center justify-center w-24 h-24 rounded-3xl bg-white shadow-md border ${activeStep === 3 ? 'border-blue-500 ring-4 ring-blue-500/10' : 'border-slate-200/80'} mb-6 relative transition-all duration-300 hover:shadow-lg`}>
                <CheckCircle className={`w-10 h-10 ${activeStep === 3 ? 'text-blue-600' : 'text-slate-500'} transition-colors`} />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-lg shadow-blue-500/20">
                  3
                </div>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Host Approval</h3>
              <p className="text-slate-600 text-sm max-w-xs leading-relaxed">
                Host approves visitor request via telegram link or dashboard. Access logs update automatically.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. ROLES SECTION */}
      <section id="roles" className="py-20 lg:py-28 scroll-mt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 border border-blue-100/60 px-3.5 py-1.5 rounded-full shadow-sm">
              User Access Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-6">
              Engineered For All Stakeholders
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Whether you are monitoring globally or managing gate entries, Atithi assigns tailored interfaces to 6 core user levels.
            </p>
          </div>

          {/* Roles Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

            {/* Super Admin */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/20 hover:bg-white transition-all duration-300 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base leading-snug">Super Admin</h4>
                <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                  Monitor tenant subscriptions, view global telemetry graphs, and regulate systems-wide access configurations.
                </p>
              </div>
            </div>

            {/* Tenant Admin */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/20 hover:bg-white transition-all duration-300 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base leading-snug">Tenant Admin</h4>
                <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                  Setup corporate layouts, toggle required input fields, handle branch networks, and add employees.
                </p>
              </div>
            </div>

            {/* Manager */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/20 hover:bg-white transition-all duration-300 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base leading-snug">Manager</h4>
                <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                  Review daily presence graphs, run audits, download reports, and resolve guest overrides.
                </p>
              </div>
            </div>

            {/* Receptionist */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/20 hover:bg-white transition-all duration-300 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base leading-snug">Receptionist</h4>
                <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                  Conduct swift check-ins, record photos, scan biometric inputs, print passes, and manage active visitors.
                </p>
              </div>
            </div>

            {/* Host Employee */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/20 hover:bg-white transition-all duration-300 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base leading-snug">Host / Employee</h4>
                <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                  Pre-register visitor schedules, check meeting updates, and receive real-time Telegram approval alerts.
                </p>
              </div>
            </div>

            {/* Security Guard */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/20 hover:bg-white transition-all duration-300 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base leading-snug">Security Guard</h4>
                <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                  Oversee entry gates, view active blacklist warnings, cross-check visitor badges, and record exits.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="bg-slate-950 text-slate-100 py-24 relative overflow-hidden border-t border-slate-900">
        {/* Glow particles */}
        <div className="absolute top-[-20%] left-[-15%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-15%] w-[60%] h-[60%] rounded-full bg-indigo-600/8 blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 mx-auto mb-6">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
            Ready to Securitize Your Workspace?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Unify check-ins, streamline receptionist queues, and manage active visits inside the secure Atithi portal.
          </p>

          <button
            onClick={handleCtaClick}
            className="bg-white text-blue-600 hover:bg-slate-100 font-extrabold px-8 py-4 rounded-2xl shadow-xl hover:scale-[1.02] duration-200 transition-all select-none cursor-pointer text-sm tracking-wide flex items-center justify-center gap-2 mx-auto"
          >
            <span>{isAuthenticated ? 'Enter Dashboard' : 'Get Started Free'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-900 pb-8 mb-8">
            {/* Left brand info */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-extrabold text-slate-200 text-sm leading-none">Atithi VMS</span>
                <span className="text-[9px] text-slate-500 uppercase tracking-widest mt-0.5 leading-none">Devo Bhavah</span>
              </div>
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-slate-500 font-semibold text-xs">
              <a
                href="/login"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/login');
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Sign In
              </a>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors"
              >
                Workflow
              </a>
              <a
                href="#roles"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors"
              >
                Roles Matrix
              </a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
            <p>© {new Date().getFullYear()} Atithi VMS (Enterprise Visitor Management System). All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
