import Sidebar from '../components/Sidebar';

export default function Withdraw() {
  return (
    <>
      <Sidebar />
      <main className="lg:ml-64 pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight mb-2">Withdraw Assets</h1>
          <p className="text-on-surface-variant font-medium">Precision liquidation from secure mining nodes.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Asset Selection & Form */}
          <div className="lg:col-span-7 space-y-8">
            <section>
              <h3 className="font-headline text-lg font-medium text-on-surface mb-4">Select Asset</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-surface-container-high p-5 rounded-xl border-l-2 border-primary group cursor-pointer hover:bg-surface-variant transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-surface-container-lowest rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">currency_bitcoin</span>
                    </div>
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <p className="font-headline text-xl text-on-surface font-bold">Bitcoin</p>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">BTC Network</p>
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl border-l-2 border-transparent hover:border-outline-variant transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-surface-container-lowest rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant">eco</span>
                    </div>
                  </div>
                  <p className="font-headline text-xl text-on-surface font-bold">Ethereum</p>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">ERC-20 Network</p>
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl border-l-2 border-transparent hover:border-outline-variant transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-surface-container-lowest rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant">monetization_on</span>
                    </div>
                  </div>
                  <p className="font-headline text-xl text-on-surface font-bold">Tether</p>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">TRC-20 Network</p>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20"></div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2">Recipient Wallet Address</label>
                  <div className="relative">
                    <input className="w-full bg-surface-container-lowest border-none rounded-lg py-4 px-4 text-on-surface font-mono text-sm focus:ring-1 focus:ring-primary/30 focus:bg-surface-container transition-all placeholder:text-outline-variant/50 outline-none" placeholder="bc1qxy2kgdygjrsqtzq2n0yrf2493..." type="text" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">content_paste</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-on-surface-variant">Withdrawal Amount</label>
                    <span className="text-xs text-primary cursor-pointer hover:underline">MAX: 2.4085 BTC</span>
                  </div>
                  <div className="relative">
                    <input className="w-full bg-surface-container-lowest border-none rounded-lg py-4 px-4 text-2xl font-headline font-bold text-primary focus:ring-1 focus:ring-primary/30 focus:bg-surface-container transition-all placeholder:text-primary/20 outline-none" placeholder="0.00" type="text" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-headline font-bold text-on-surface-variant">BTC</span>
                  </div>
                </div>
                <div className="bg-surface-container-highest/40 p-4 rounded-lg flex gap-3 items-start border-l-2 border-secondary">
                  <span className="material-symbols-outlined text-secondary text-xl">verified_user</span>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-secondary uppercase tracking-wider">Protocol Security Alert</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed">Cross-verify the recipient address. Kinetic Ledger cannot reverse transactions once finalized on the blockchain. Ensure destination network matches BTC Mainnet.</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-xl font-headline font-bold text-lg shadow-[0_0_30px_rgba(0,253,193,0.1)] hover:scale-[1.01] active:scale-[0.98] transition-all">
                  Confirm Withdrawal Request
                </button>
              </div>
            </section>
          </div>

          {/* Right Column: Balance & Summary */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
              <p className="text-sm font-medium text-on-surface-variant mb-2">Available Mining Surplus</p>
              <div className="flex items-baseline gap-3">
                <h2 className="font-headline text-5xl font-bold text-primary tracking-tighter">2.4085</h2>
                <span className="font-headline text-xl text-on-surface-variant font-bold">BTC</span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm font-medium text-on-surface">≈ $154,204.12 USD</span>
                <div className="h-1 w-1 rounded-full bg-outline-variant"></div>
                <span className="text-xs text-secondary-dim font-medium">+2.4% Volatility</span>
              </div>
            </div>

            <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10">
              <h3 className="font-headline text-lg font-medium text-on-surface mb-6">Transaction Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant text-sm">Network Fee (Dynamic)</span>
                  <span className="text-on-surface font-mono text-sm">0.00045 BTC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant text-sm">Priority Level</span>
                  <span className="bg-surface-container-highest text-primary text-[10px] font-bold px-2 py-0.5 rounded tracking-widest uppercase">High</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant text-sm">Estimated Time</span>
                  <span className="text-on-surface text-sm">~10-30 Minutes</span>
                </div>
                <div className="pt-4 mt-4 border-t border-outline-variant/15 flex justify-between items-center">
                  <span className="text-on-surface font-bold">Total Disbursed</span>
                  <div className="text-right">
                    <p className="font-headline text-xl font-bold text-primary">0.00000 BTC</p>
                    <p className="text-xs text-on-surface-variant">Input amount to calculate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width: Recent Activity */}
          <div className="lg:col-span-12">
            <section>
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface">Withdrawal Ledger</h3>
                  <p className="text-sm text-on-surface-variant font-medium">Historical transaction record for Node 042</p>
                </div>
                <button className="text-primary text-sm font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
                  View All <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
                </button>
              </div>
              <div className="bg-surface-container-low rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-high/50">
                      <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Asset / ID</th>
                      <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Timestamp</th>
                      <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Recipient</th>
                      <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Amount</th>
                      <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr className="hover:bg-surface-container-highest/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary">currency_bitcoin</span>
                          <div>
                            <p className="font-headline font-bold text-on-surface">BTC</p>
                            <p className="text-[10px] text-on-surface-variant font-mono">TX_74829375</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">May 24, 2024 · 14:32</td>
                      <td className="px-6 py-4 text-sm font-mono text-on-surface-variant">bc1q...x9p3</td>
                      <td className="px-6 py-4 font-headline font-bold text-on-surface">0.4500 BTC</td>
                      <td className="px-6 py-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Pending</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-highest/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-on-surface-variant">eco</span>
                          <div>
                            <p className="font-headline font-bold text-on-surface">ETH</p>
                            <p className="text-[10px] text-on-surface-variant font-mono">TX_10293847</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">May 21, 2024 · 09:15</td>
                      <td className="px-6 py-4 text-sm font-mono text-on-surface-variant">0x71...5f21</td>
                      <td className="px-6 py-4 font-headline font-bold text-on-surface">12.500 ETH</td>
                      <td className="px-6 py-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary-container/40">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Completed</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-highest/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-on-surface-variant">monetization_on</span>
                          <div>
                            <p className="font-headline font-bold text-on-surface">USDT</p>
                            <p className="text-[10px] text-on-surface-variant font-mono">TX_55667788</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">May 18, 2024 · 21:04</td>
                      <td className="px-6 py-4 text-sm font-mono text-on-surface-variant">TR7...v9k8</td>
                      <td className="px-6 py-4 font-headline font-bold text-on-surface">5,000.00 USDT</td>
                      <td className="px-6 py-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error-container/20 border border-error-container/40">
                          <div className="w-1.5 h-1.5 rounded-full bg-error"></div>
                          <span className="text-[10px] font-bold text-error uppercase tracking-widest">Rejected</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Bar (Mobile Only) */}
      <nav className="fixed bottom-0 w-full z-50 lg:hidden bg-[#0c0e10]/80 backdrop-blur-lg flex justify-around items-center px-4 py-3 border-t border-[#46484a]/15">
        <a className="flex flex-col items-center justify-center text-[#aaabad] p-2 scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium font-['Inter'] mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#aaabad] p-2 scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined">settings_input_component</span>
          <span className="text-[10px] font-medium font-['Inter'] mt-1">Mining</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#aaffdc] bg-[#232629]/50 rounded-lg p-2 scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined">outbox</span>
          <span className="text-[10px] font-medium font-['Inter'] mt-1">Withdraw</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#aaabad] p-2 scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium font-['Inter'] mt-1">Account</span>
        </a>
      </nav>
    </>
  );
}
