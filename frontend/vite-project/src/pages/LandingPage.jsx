import React, { useState } from 'react';
import HeroImg from '../assets/Landingpage.png';
import { useNavigate } from 'react-router-dom';
import { APP_FEATURES } from '../utils/data';
import { LuSparkles, LuArrowRight, LuBrain, LuShield } from 'react-icons/lu';
import Modal from '../components/Modal';
import SignUp from './Auth/SignUp';
import Login from "./Auth/Login";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';

const featureIcons = ['🎯', '⚡', '📌', '🧠', '🚀'];

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      {/* ─── Hero Section ─── */}
      <div className="w-full min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFFDF5 0%, #FFF8ED 40%, #F8F5FF 100%)' }}>
        {/* Background blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full opacity-40 blur-[100px]" style={{ background: 'radial-gradient(circle, #FFD580, #FF9324)' }} />
        <div className="absolute top-[20%] right-[-100px] w-[400px] h-[400px] rounded-full opacity-20 blur-[90px]" style={{ background: 'radial-gradient(circle, #C084FC, #818CF8)' }} />
        <div className="absolute bottom-0 left-[30%] w-[350px] h-[350px] rounded-full opacity-15 blur-[80px]" style={{ background: 'radial-gradient(circle, #34D399, #06B6D4)' }} />

        <div className="container mx-auto px-6 pt-6 pb-32 relative z-10">
          {/* ── Navbar ── */}
          <header className="flex justify-between items-center mb-20 py-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #FF9324, #FCD760)' }}>
                <LuBrain className="text-white text-sm" />
              </div>
              <span className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>Interview Prep <span style={{ color: '#FF9324' }}>AI</span></span>
            </div>

            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="btn-small text-sm"
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* ── Hero Content ── */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border animate-pulse-glow" style={{ background: '#FFF8ED', color: '#C05700', borderColor: '#FFD0A0' }}>
                <LuSparkles className="text-sm" style={{ color: '#FF9324' }} />
                AI-Powered Interview Preparation
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight" style={{ fontFamily: 'Sora, sans-serif', color: '#1a1a2e' }}>
                Ace Every Interview with{' '}
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine">
                  AI Power
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Get role-specific questions, explore AI-generated answers, dive deeper into concepts, and track your preparation — all in one place.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  className="flex items-center gap-2 font-semibold text-white px-8 py-3.5 rounded-full cursor-pointer transition-all duration-200"
                  style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)', boxShadow: '0 6px 24px rgba(26,26,46,0.25)', fontFamily: 'Sora, sans-serif' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #FF9324, #e07c10)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(255,147,36,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(26,26,46,0.25)'; }}
                  onClick={handleCTA}
                >
                  Get Started Free
                  <LuArrowRight />
                </button>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <LuShield className="text-green-500" />
                  No credit card required
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-4">
                {[['10K+', 'Questions Generated'], ['500+', 'Roles Covered'], ['98%', 'Success Rate']].map(([num, label]) => (
                  <div key={label}>
                    <div className="text-xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1a1a2e' }}>{num}</div>
                    <div className="text-xs text-gray-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative animate-float">
                <div className="absolute -inset-4 rounded-3xl opacity-30 blur-xl" style={{ background: 'linear-gradient(135deg, #FF9324, #FCD760)' }} />
                <img src={HeroImg} alt="Interview Prep AI Dashboard" className="relative rounded-2xl shadow-2xl w-full max-w-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Features Section ─── */}
      <div className="w-full py-24" style={{ background: '#ffffff' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-5" style={{ background: '#F0EEFF', color: '#6B21A8', border: '1px solid #DDD6FF' }}>
              <LuSparkles /> Features
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Sora, sans-serif', color: '#1a1a2e' }}>
              Everything You Need to{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #FF9324, #FCD760)' }}>Shine</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A complete toolkit to supercharge your interview preparation and land your dream job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {APP_FEATURES.slice(0, 3).map((feature, index) => (
              <div key={feature.id} className="group p-7 rounded-2xl border cursor-default transition-all duration-300"
                style={{ background: '#FAFAFA', border: '1px solid #EEECF8' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FFFDF5'; e.currentTarget.style.borderColor = '#FFD0A0'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(255,147,36,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FAFAFA'; e.currentTarget.style.borderColor = '#EEECF8'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div className="text-3xl mb-5">{featureIcons[index]}</div>
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif', color: '#1a1a2e' }}>{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {APP_FEATURES.slice(3).map((feature, index) => (
              <div key={feature.id} className="group p-7 rounded-2xl border cursor-default transition-all duration-300"
                style={{ background: '#FAFAFA', border: '1px solid #EEECF8' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F8F5FF'; e.currentTarget.style.borderColor = '#C4B5FD'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(100,70,200,0.08)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FAFAFA'; e.currentTarget.style.borderColor = '#EEECF8'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div className="text-3xl mb-5">{featureIcons[index + 3]}</div>
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif', color: '#1a1a2e' }}>{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CTA Banner ─── */}
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Join thousands of developers who've aced their interviews with our AI-powered platform.
          </p>
          <button
            className="btn-small text-base px-10 py-3.5"
            onClick={handleCTA}
          >
            Start Preparing Now <LuArrowRight />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-sm text-gray-500 text-center py-6" style={{ background: '#F8F7FF', borderTop: '1px solid #EEE9FF' }}>
        © 2025 Interview Prep AI · Built with ❤️ for developers
      </div>

      {/* Auth Modal */}
      <Modal isOpen={openAuthModal} onClose={() => { setOpenAuthModal(false); setCurrentPage('login'); }} hideHeader>
        <div>
          {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === 'signup' && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
