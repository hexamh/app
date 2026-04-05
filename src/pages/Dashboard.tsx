export default function Dashboard() {
  return (
    <main className="max-w-screen-2xl mx-auto px-8 py-8">
      {/* Welcome & Claim Bonus Notification */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight text-on-surface">Terminal Dashboard</h1>
          <p className="text-on-surface-variant text-sm mt-1">Status: <span className="text-primary-dim uppercase tracking-tighter font-bold">Synchronized</span> · Node ID: KL-8829-X</p>
        </div>
        <div className="bg-surface-container-highest border-l-4 border-primary p-4 rounded-lg flex items-center gap-4 max-w-md">
          <div className="bg-primary/10 p-2 rounded">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>redeem</span>
          </div>
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest">Active Bonus</p>
            <p className="text-sm text-on-surface">Deposit bonus of 0.024 BTC available.</p>
          </div>
          <button className="ml-auto text-primary text-xs font-bold uppercase border-b border-primary/30 hover:border-primary transition-all">Claim</button>
        </div>
      </div>

      {/* Top-Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <p className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold mb-2">Total Balance</p>
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-3xl font-bold text-primary">0.84229</span>
            <span className="text-on-surface-variant text-sm font-bold">BTC</span>
          </div>
          <p className="text-primary-dim text-xs mt-2 font-mono">≈ $54,291.12 USD</p>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <p className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold mb-2">Active Hash Rate</p>
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-3xl font-bold text-on-surface">412.5</span>
            <span className="text-on-surface-variant text-sm font-bold">TH/s</span>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <span className="material-symbols-outlined text-primary-dim text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
            <p className="text-primary-dim text-xs font-mono">+4.2% (24h)</p>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
          <p className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold mb-2">Daily Earnings</p>
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-3xl font-bold text-on-surface">0.00124</span>
            <span className="text-on-surface-variant text-sm font-bold">BTC</span>
          </div>
          <p className="text-on-surface-variant text-xs mt-2 font-mono">Estimated payout in 14h</p>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
          <p className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold mb-2">Active Miners</p>
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-3xl font-bold text-on-surface">18</span>
            <span className="text-on-surface-variant text-sm font-bold">/ 20</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-primary-dim"></span>
            <p className="text-primary-dim text-xs uppercase tracking-tighter">Nodes Healthy</p>
          </div>
        </div>
      </div>

      {/* Main Content Area: Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-headline text-xl font-bold tracking-tight">Yield Performance</h2>
            <div className="flex gap-2">
              <button className="bg-surface-container-highest px-3 py-1 rounded text-xs font-bold text-on-surface-variant hover:text-primary">1D</button>
              <button className="bg-primary text-on-primary px-3 py-1 rounded text-xs font-bold">1W</button>
              <button className="bg-surface-container-highest px-3 py-1 rounded text-xs font-bold text-on-surface-variant hover:text-primary">1M</button>
            </div>
          </div>
          <div className="h-64 w-full recessed-well rounded-lg relative flex items-end px-4 gap-2 pb-2">
            <div className="flex-1 bg-primary/20 h-[40%] rounded-t-sm group hover:bg-primary transition-all cursor-pointer relative"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-surface-container-highest px-2 py-1 rounded">0.011</div></div>
            <div className="flex-1 bg-primary/20 h-[55%] rounded-t-sm group hover:bg-primary transition-all cursor-pointer relative"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-surface-container-highest px-2 py-1 rounded">0.013</div></div>
            <div className="flex-1 bg-primary/20 h-[45%] rounded-t-sm group hover:bg-primary transition-all cursor-pointer relative"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-surface-container-highest px-2 py-1 rounded">0.012</div></div>
            <div className="flex-1 bg-primary/20 h-[70%] rounded-t-sm group hover:bg-primary transition-all cursor-pointer relative"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-surface-container-highest px-2 py-1 rounded">0.015</div></div>
            <div className="flex-1 bg-primary/20 h-[60%] rounded-t-sm group hover:bg-primary transition-all cursor-pointer relative"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-surface-container-highest px-2 py-1 rounded">0.014</div></div>
            <div className="flex-1 bg-primary/20 h-[85%] rounded-t-sm group hover:bg-primary transition-all cursor-pointer relative"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-surface-container-highest px-2 py-1 rounded">0.019</div></div>
            <div className="flex-1 bg-primary h-[75%] rounded-t-sm group hover:bg-primary transition-all cursor-pointer relative"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-surface-container-highest px-2 py-1 rounded text-primary font-bold">0.018</div></div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-outline-variant/15">
            <div>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">Average Payout</p>
              <p className="font-headline font-bold">0.00115 BTC</p>
            </div>
            <div>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">Weekly Growth</p>
              <p className="font-headline font-bold text-primary-dim">+12.4%</p>
            </div>
            <div>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">Network Diff</p>
              <p className="font-headline font-bold">82.3T</p>
            </div>
            <div>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">Est. Monthly</p>
              <p className="font-headline font-bold">0.0382 BTC</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-primary to-secondary-container p-8 rounded-xl relative overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform">
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-secondary-container mb-2">Add Hash Power</h3>
            <p className="text-on-secondary-container/80 text-sm mb-6 max-w-[200px]">Accelerate your mining returns with enterprise-grade hardware nodes.</p>
            <button className="bg-on-secondary-container text-secondary-container px-6 py-3 rounded-lg font-bold uppercase text-xs tracking-widest shadow-xl">Upgrade Hashrate</button>
          </div>
          <div className="bg-surface-container-highest p-8 rounded-xl border border-outline-variant/15 flex flex-col items-start group cursor-pointer active:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined text-primary text-3xl mb-4" style={{ fontVariationSettings: "'FILL' 0" }}>payments</span>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Withdraw Profits</h3>
            <p className="text-on-surface-variant text-sm mb-6">Instant settlement to your connected cold storage or hot wallet.</p>
            <button className="text-primary font-bold uppercase text-xs tracking-widest border border-primary/20 hover:border-primary px-6 py-3 rounded-lg transition-all">Request Payout</button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 bg-surface-container-low rounded-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline text-xl font-bold tracking-tight">Mining Workers</h2>
            <span className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">18 Active</span>
          </div>
          <div className="space-y-4">
            <div className="bg-surface-container p-4 rounded-lg flex items-center justify-between border-l-2 border-primary-dim">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-surface-container-highest rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-dim text-xl">dns</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">KINETIC-NODE-A1</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">Antminer S19 XP · 140 TH/s</p>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="text-right">
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Temp</p>
                  <p className="text-sm font-bold">62°C</p>
                </div>
                <div className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-[10px] font-bold text-primary uppercase">Active</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-4 rounded-lg flex items-center justify-between border-l-2 border-primary-dim">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-surface-container-highest rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-dim text-xl">dns</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">KINETIC-NODE-A2</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">Antminer S19 XP · 140 TH/s</p>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="text-right">
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Temp</p>
                  <p className="text-sm font-bold">64°C</p>
                </div>
                <div className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-[10px] font-bold text-primary uppercase">Active</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-4 rounded-lg flex items-center justify-between border-l-2 border-error/50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-surface-container-highest rounded flex items-center justify-center opacity-50">
                  <span className="material-symbols-outlined text-error text-xl">dns</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface opacity-50">KINETIC-NODE-B1</p>
                  <p className="text-[10px] text-on-surface-variant uppercase">Antminer S19 Pro · 110 TH/s</p>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="text-right">
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Temp</p>
                  <p className="text-sm font-bold text-error">Cold</p>
                </div>
                <div className="px-3 py-1 bg-error/10 rounded-full border border-error/20">
                  <span className="text-[10px] font-bold text-error uppercase">Idle</span>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-3 text-xs font-bold uppercase tracking-widest text-on-surface-variant border border-outline-variant/15 rounded hover:bg-surface-container-highest transition-all">View All Hardware</button>
        </div>

        <div className="col-span-12 lg:col-span-5 bg-surface-container-low rounded-xl p-8">
          <h2 className="font-headline text-xl font-bold tracking-tight mb-8">Recent Ledger</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-on-surface">Mining Reward</p>
                <p className="text-[10px] text-on-surface-variant uppercase">Today, 12:44 PM</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-primary">+0.00012 BTC</p>
                <p className="text-[10px] text-on-surface-variant uppercase">Confirmed</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>redeem</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-on-surface">Deposit Bonus</p>
                <p className="text-[10px] text-on-surface-variant uppercase">Yesterday, 09:12 PM</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-secondary">+0.01000 BTC</p>
                <p className="text-[10px] text-on-surface-variant uppercase">Locked</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded bg-on-surface-variant/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface-variant text-xl">upload</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-on-surface">Withdrawal</p>
                <p className="text-[10px] text-on-surface-variant uppercase">Oct 24, 2024</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-on-surface">-0.05000 BTC</p>
                <p className="text-[10px] text-on-surface-variant uppercase">Success</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-on-surface">Mining Reward</p>
                <p className="text-[10px] text-on-surface-variant uppercase">Oct 23, 2024</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-primary">+0.00012 BTC</p>
                <p className="text-[10px] text-on-surface-variant uppercase">Confirmed</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-10 py-3 text-xs font-bold uppercase tracking-widest text-on-surface-variant border border-outline-variant/15 rounded hover:bg-surface-container-highest transition-all">Download CSV Report</button>
        </div>
      </div>
    </main>
  );
}
