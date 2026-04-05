import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isWithdrawPage = location.pathname === '/withdraw';

  return (
    <footer className={`w-full border-t border-[#46484a]/15 bg-[#0c0e10] ${isWithdrawPage ? 'lg:ml-64 lg:w-[calc(100%-16rem)]' : ''}`}>
      <div className="max-w-screen-2xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-4 max-w-sm">
          <span className="text-[#aaffdc] font-headline font-bold text-xl uppercase tracking-tighter">KINETIC LEDGER</span>
          <p className="font-body text-xs text-[#aaabad] leading-relaxed uppercase tracking-wider">© 2024 KINETIC LEDGER. All rights reserved. High-Density Data Editorial System.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <p className="font-headline text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Product</p>
            <Link className="font-body text-xs text-[#aaabad] hover:text-[#aaffdc] transition-all cursor-pointer" to="#">Security</Link>
            <Link className="font-body text-xs text-[#aaabad] hover:text-[#aaffdc] transition-all cursor-pointer" to="#">Whitepaper</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-headline text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Legal</p>
            <Link className="font-body text-xs text-[#aaabad] hover:text-[#aaffdc] transition-all cursor-pointer" to="#">Terms of Service</Link>
            <Link className="font-body text-xs text-[#aaabad] hover:text-[#aaffdc] transition-all cursor-pointer" to="#">Privacy Policy</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-headline text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Network</p>
            <Link className="font-body text-xs text-[#aaabad] hover:text-[#aaffdc] transition-all cursor-pointer" to="#">Regulatory Compliance</Link>
            <Link className="font-body text-xs text-[#aaabad] hover:text-[#aaffdc] transition-all cursor-pointer" to="#">Support</Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-8 pb-8 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-[#aaabad] hover:text-[#aaffdc] cursor-pointer">language</span>
          <span className="material-symbols-outlined text-[#aaabad] hover:text-[#aaffdc] cursor-pointer">terminal</span>
          <span className="material-symbols-outlined text-[#aaabad] hover:text-[#aaffdc] cursor-pointer">public</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#aaffdc]"></span>
          <span className="text-[10px] font-label text-on-surface-variant uppercase">All Systems Operational</span>
        </div>
      </div>
    </footer>
  );
}
