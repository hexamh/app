import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 hidden lg:flex flex-col bg-[#111416] py-8 px-4 gap-4 z-40 pt-24">
      <div className="flex items-center gap-3 px-4 mb-8">
        <div className="w-10 h-10 bg-surface-container-high rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">memory</span>
        </div>
        <div>
          <p className="font-headline font-medium text-[#eeeef0]">Mining Operator</p>
          <p className="text-xs text-on-surface-variant">Verified Node 042</p>
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        <Link className="flex items-center gap-3 px-4 py-3 rounded text-[#aaabad] hover:bg-[#232629] hover:text-[#eeeef0] transition-all duration-200" to="#">
          <span className="material-symbols-outlined">memory</span>
          <span className="font-medium text-sm">Nodes</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 rounded text-[#aaabad] hover:bg-[#232629] hover:text-[#eeeef0] transition-all duration-200" to="#">
          <span className="material-symbols-outlined">account_balance</span>
          <span className="font-medium text-sm">Ledger</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 rounded bg-[#232629] text-[#aaffdc] border-l-2 border-[#aaffdc] transition-all duration-200" to="/withdraw">
          <span className="material-symbols-outlined">payments</span>
          <span className="font-medium text-sm">Withdraw</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 rounded text-[#aaabad] hover:bg-[#232629] hover:text-[#eeeef0] transition-all duration-200" to="#">
          <span className="material-symbols-outlined">swap_horiz</span>
          <span className="font-medium text-sm">Exchange</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 rounded text-[#aaabad] hover:bg-[#232629] hover:text-[#eeeef0] transition-all duration-200" to="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-medium text-sm">Settings</span>
        </Link>
      </nav>
      <button className="mt-auto mx-4 bg-gradient-to-br from-primary to-primary-container text-on-primary py-3 rounded-lg font-headline font-bold text-sm shadow-[0_0_20px_rgba(170,255,220,0.15)] active:opacity-80 transition-all">
        New Stake
      </button>
    </aside>
  );
}
