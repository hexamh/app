import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  // If on withdraw page, we use a slightly different navbar (Screen 1 style)
  if (location.pathname === '/withdraw') {
    return (
      <header className="fixed top-0 w-full z-50 bg-[#0c0e10]/60 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-[0_40px_40px_rgba(170,255,220,0.06)]">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-headline font-bold tracking-tighter text-[#aaffdc]">The Kinetic Ledger</Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link className="text-[#aaabad] font-medium hover:bg-[#232629] transition-colors px-3 py-1 rounded" to="/dashboard">Nodes</Link>
            <Link className="text-[#aaabad] font-medium hover:bg-[#232629] transition-colors px-3 py-1 rounded" to="/deposit">Ledger</Link>
            <Link className="text-[#aaffdc] font-headline font-bold px-3 py-1 rounded" to="/withdraw">Withdraw</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#aaffdc]">account_balance_wallet</span>
          <span className="material-symbols-outlined text-[#aaabad]">notifications</span>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30">
            <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKhubOSC3C552Sc_5JLScj6bzd-ruXu5gRBjCZ2xV2LSt_WIR8Ks9_QEaJPU9hecIOdus213ATXU6LqxRfuBFZb9joU8hUoqb2A4WlRIu-9s_MQA2KAkqxsMPTpkSSMm2Mx4M5XrCVc7bbN0qe1F09K19cP305dV4ZgpXUgFKcupiUX-TKzLFAqzVwH32__BW9GD9bJjTetu3XYkzV5Vw1fwZ6L5tp330BtcUSH9COSbsQOieIVqc6z0_TMSq-F_e84D9MIyux94pH" />
          </div>
        </div>
      </header>
    );
  }

  // Common Navbar for other pages
  return (
    <nav className="sticky top-0 w-full z-50 bg-[#0c0e10]/60 backdrop-blur-xl shadow-[0_40px_40px_-15px_rgba(170,255,220,0.06)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tighter text-[#aaffdc] uppercase font-headline">KINETIC LEDGER</Link>
          <div className="hidden md:flex gap-6 font-headline tracking-tight text-sm uppercase">
            <Link className={`transition-colors duration-300 ${location.pathname === '/' ? 'text-[#aaffdc] border-b-2 border-[#aaffdc] pb-1' : 'text-[#aaabad] hover:text-[#aaffdc]'}`} to="/">Home</Link>
            <Link className={`transition-colors duration-300 ${location.pathname === '/withdraw' ? 'text-[#aaffdc] border-b-2 border-[#aaffdc] pb-1' : 'text-[#aaabad] hover:text-[#aaffdc]'}`} to="/withdraw">Mining</Link>
            <Link className={`transition-colors duration-300 ${location.pathname === '/dashboard' ? 'text-[#aaffdc] border-b-2 border-[#aaffdc] pb-1' : 'text-[#aaabad] hover:text-[#aaffdc]'}`} to="/dashboard">Dashboard</Link>
            <Link className={`transition-colors duration-300 ${location.pathname === '/pricing' ? 'text-[#aaffdc] border-b-2 border-[#aaffdc] pb-1' : 'text-[#aaabad] hover:text-[#aaffdc]'}`} to="/pricing">Pricing</Link>
            <Link className={`transition-colors duration-300 ${location.pathname === '/deposit' ? 'text-[#aaffdc] border-b-2 border-[#aaffdc] pb-1' : 'text-[#aaabad] hover:text-[#aaffdc]'}`} to="/deposit">Deposit</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-2 text-[#aaabad] hover:text-[#aaffdc] transition-colors p-2">
            <span className="material-symbols-outlined">account_balance_wallet</span>
          </button>
          <button className="hidden lg:flex items-center gap-2 text-[#aaabad] hover:text-[#aaffdc] transition-colors p-2">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          {location.pathname === '/deposit' ? (
            <div className="flex items-center gap-3 bg-surface-container-highest px-3 py-1.5 rounded-lg border border-outline-variant/15">
              <span className="material-symbols-outlined text-[#aaffdc]" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
              <span className="font-headline font-bold text-[#aaffdc] text-sm">2.484 BTC</span>
            </div>
          ) : (
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold text-sm px-6 py-2.5 rounded-lg active:scale-95 duration-150 transition-all shadow-lg shadow-primary/10 uppercase tracking-wider">
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
