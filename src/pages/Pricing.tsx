export default function Pricing() {
  return (
    <main className="max-w-screen-2xl mx-auto px-8 py-16">
      {/* Hero Section */}
      <section className="mb-20 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(170,255,220,0.08),transparent_70%)] pointer-events-none"></div>
        <p className="font-headline text-primary text-sm tracking-[0.3em] uppercase mb-4">Precision Infrastructure</p>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6">MINING PROTOCOLS</h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
          High-density computing power optimized for SHA-256 validation. Select your hash rate threshold and scale with the Kinetic Ledger.
        </p>
        <div className="mt-12 inline-flex items-center gap-3 bg-surface-container-high px-6 py-3 rounded-full border border-primary/20">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          <span className="font-headline font-bold text-primary tracking-wide">LIMITED: 10% DEPOSIT BONUS APPLIED TO ALL PLANS</span>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        <div className="surface-container-low p-1 rounded-lg transition-transform hover:-translate-y-1 duration-300 group">
          <div className="bg-surface-container-low h-full p-8 rounded-lg flex flex-col kinetic-glow">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-headline text-on-surface-variant text-sm tracking-widest uppercase mb-1">Starter</h3>
                <div className="font-headline text-4xl font-bold">50 <span className="text-xl text-on-surface-variant font-light">TH/s</span></div>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">dns</span>
            </div>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">Algorithm</span>
                <span className="font-headline text-sm font-medium">SHA-256</span>
              </div>
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">Maint. Fee</span>
                <span className="font-headline text-sm font-medium text-error">$0.012/TH</span>
              </div>
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">Daily Profit</span>
                <span className="font-headline text-sm font-medium text-primary">~$4.20</span>
              </div>
            </div>
            <div className="mt-auto">
              <div className="mb-4 font-headline text-3xl font-bold">$1,200 <span className="text-xs text-on-surface-variant font-normal">USD</span></div>
              <button className="w-full bg-surface-container-highest border border-primary/30 hover:bg-primary/10 text-primary py-3 font-headline text-sm font-bold uppercase tracking-widest transition-all rounded-lg">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-primary/20 to-transparent p-[1px] rounded-lg transition-transform hover:-translate-y-1 duration-300">
          <div className="bg-surface-container-high h-full p-8 rounded-lg flex flex-col relative overflow-hidden mining-node-active">
            <div className="absolute top-0 right-0 bg-primary text-on-primary px-4 py-1 font-headline text-[10px] font-black uppercase tracking-tighter rounded-bl-lg">
              Optimal
            </div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-headline text-primary text-sm tracking-widest uppercase mb-1">Professional</h3>
                <div className="font-headline text-4xl font-bold">250 <span className="text-xl text-on-surface-variant font-light">TH/s</span></div>
              </div>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
            </div>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">Algorithm</span>
                <span className="font-headline text-sm font-medium">SHA-256</span>
              </div>
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">Maint. Fee</span>
                <span className="font-headline text-sm font-medium text-error">$0.010/TH</span>
              </div>
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">Daily Profit</span>
                <span className="font-headline text-sm font-medium text-primary">~$22.40</span>
              </div>
            </div>
            <div className="mt-auto">
              <div className="mb-4 font-headline text-3xl font-bold">$5,500 <span className="text-xs text-on-surface-variant font-normal">USD</span></div>
              <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-3 font-headline text-sm font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-lg">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="surface-container-low p-1 rounded-lg transition-transform hover:-translate-y-1 duration-300 group">
          <div className="bg-surface-container-low h-full p-8 rounded-lg flex flex-col kinetic-glow">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-headline text-on-surface-variant text-sm tracking-widest uppercase mb-1">Enterprise</h3>
                <div className="font-headline text-4xl font-bold">1 <span className="text-xl text-on-surface-variant font-light">PH/s</span></div>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">database</span>
            </div>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">Algorithm</span>
                <span className="font-headline text-sm font-medium">SHA-256</span>
              </div>
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">Maint. Fee</span>
                <span className="font-headline text-sm font-medium text-error">$0.008/TH</span>
              </div>
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">Daily Profit</span>
                <span className="font-headline text-sm font-medium text-primary">~$95.10</span>
              </div>
            </div>
            <div className="mt-auto">
              <div className="mb-4 font-headline text-3xl font-bold">$20,000 <span className="text-xs text-on-surface-variant font-normal">USD</span></div>
              <button className="w-full bg-surface-container-highest border border-primary/30 hover:bg-primary/10 text-primary py-3 font-headline text-sm font-bold uppercase tracking-widest transition-all rounded-lg">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="surface-container-low p-1 rounded-lg transition-transform hover:-translate-y-1 duration-300 group">
          <div className="bg-surface-container-low h-full p-8 rounded-lg flex flex-col border border-dashed border-outline-variant/30">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-headline text-on-surface-variant text-sm tracking-widest uppercase mb-1">Custom</h3>
                <div className="font-headline text-4xl font-bold">MAX <span className="text-xl text-on-surface-variant font-light">POOL</span></div>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">architecture</span>
            </div>
            <p className="text-on-surface-variant text-sm mb-10 leading-relaxed">
              Tailored hash-rate allocations for institutional partners. Dedicated liquid cooling nodes and prioritized validation.
            </p>
            <div className="mt-auto">
              <div className="mb-4 font-headline text-xl font-bold text-on-surface uppercase tracking-tight italic">Contact Desk</div>
              <button className="w-full bg-surface-container-highest border border-outline-variant/40 hover:border-primary/50 text-on-surface-variant hover:text-on-surface py-3 font-headline text-sm font-bold uppercase tracking-widest transition-all rounded-lg">Request Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="mb-24">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">ROI CALCULATOR</h2>
            <p className="text-on-surface-variant mb-8">Project your potential validation rewards based on capital deployment. Calculation includes the 10% Kinetic bonus.</p>
            <div className="space-y-8">
              <div>
                <label className="block font-headline text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">Deposit Amount (USD)</label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-headline">$</span>
                  <input className="w-full bg-surface-container-lowest border-0 ring-1 ring-outline-variant/20 focus:ring-primary/40 focus:ring-2 transition-all p-4 pl-10 rounded-lg text-on-surface font-headline text-xl outline-none" type="number" defaultValue="10000" />
                </div>
              </div>
              <div>
                <label className="block font-headline text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">Investment Horizon</label>
                <div className="flex gap-4">
                  <button className="flex-1 bg-primary text-on-primary py-2 rounded-lg font-headline text-xs font-bold uppercase tracking-widest">12 Months</button>
                  <button className="flex-1 bg-surface-container-highest text-on-surface-variant py-2 rounded-lg font-headline text-xs font-bold uppercase tracking-widest hover:text-on-surface transition-colors">24 Months</button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="bg-surface-container-low p-8 md:p-12 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-2">Total Hash Power</p>
                  <p className="font-headline text-3xl font-bold">454.5 <span className="text-sm font-normal opacity-60">TH/s</span></p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-2">Kinetic Bonus</p>
                  <p className="font-headline text-3xl font-bold text-primary">+$1,000 <span className="text-sm font-normal opacity-60">USD</span></p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-2">Est. Monthly Profit</p>
                  <p className="font-headline text-3xl font-bold">$1,280 <span className="text-sm font-normal opacity-60">USD</span></p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-2">Annual Projection</p>
                  <p className="font-headline text-3xl font-bold text-primary-fixed">$15,360 <span className="text-sm font-normal opacity-60">USD</span></p>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-outline-variant/10">
                <div className="flex items-center gap-4 text-xs text-on-surface-variant uppercase tracking-widest italic">
                  <span className="material-symbols-outlined text-primary text-sm">info</span>
                  Projections based on current network difficulty and BTC price stability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specification Table */}
      <section className="mb-24">
        <h2 className="font-headline text-3xl font-bold tracking-tight mb-10 text-center">VALIDATION METRICS</h2>
        <div className="overflow-x-auto rounded-lg border border-outline-variant/10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="p-6 font-headline text-xs font-bold uppercase tracking-widest text-primary border-b border-outline-variant/20">Metric Parameter</th>
                <th className="p-6 font-headline text-xs font-bold uppercase tracking-widest text-primary border-b border-outline-variant/20">Standard Pool</th>
                <th className="p-6 font-headline text-xs font-bold uppercase tracking-widest text-primary border-b border-outline-variant/20">Kinetic Tier</th>
                <th className="p-6 font-headline text-xs font-bold uppercase tracking-widest text-primary border-b border-outline-variant/20">Institutional</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="p-6 border-b border-outline-variant/10 font-medium">Uptime Guarantee</td>
                <td className="p-6 border-b border-outline-variant/10 text-on-surface-variant">98.5%</td>
                <td className="p-6 border-b border-outline-variant/10 text-on-surface">99.9%</td>
                <td className="p-6 border-b border-outline-variant/10 text-primary">99.99%</td>
              </tr>
              <tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                <td className="p-6 border-b border-outline-variant/10 font-medium">Network Latency</td>
                <td className="p-6 border-b border-outline-variant/10 text-on-surface-variant">~45ms</td>
                <td className="p-6 border-b border-outline-variant/10 text-on-surface">~12ms</td>
                <td className="p-6 border-b border-outline-variant/10 text-primary">&lt;5ms</td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="p-6 border-b border-outline-variant/10 font-medium">Auto-Switching</td>
                <td className="p-6 border-b border-outline-variant/10 text-on-surface-variant">Manual</td>
                <td className="p-6 border-b border-outline-variant/10 text-on-surface">Enabled</td>
                <td className="p-6 border-b border-outline-variant/10 text-primary">AI Optimized</td>
              </tr>
              <tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                <td className="p-6 border-b border-outline-variant/10 font-medium">Cooling System</td>
                <td className="p-6 border-b border-outline-variant/10 text-on-surface-variant">Air Forced</td>
                <td className="p-6 border-b border-outline-variant/10 text-on-surface">Hydro</td>
                <td className="p-6 border-b border-outline-variant/10 text-primary">Immersion</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Final CTA section */}
      <section className="relative p-12 md:p-20 rounded-2xl overflow-hidden text-center">
        <img alt="Infrastructure" className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByDPKhuCM5bIY2whzD_0rOCqLPh03T9t-CjdVqEgvO5PMx1ScazZvtYpoPALNZ9H5kt2af6Ak1FF4dnjEVG1BuJ7ssMDFSGinR7nww8GXDuhlpQgB2IcxjEE_gRM3Ai7iIxB8Kv-OQ0PjC_0CrQlcoSx0tr91qJstEopNxufQyPTh6nq6q_pVjwPk6qtsD96jqE-HHraeAnC_aaBkPPgtHf7-BpwiOj_j-v_wPiP7VbM6HWchIGWjthPHyW9t3lEIwQd5TsIwSGHJB"/>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/40"></div>
        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 tracking-tighter">SECURE YOUR HASH RATE</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-10">Join 12,000+ validators powering the next generation of decentralized ledger consensus.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-on-primary px-10 py-4 font-headline font-bold uppercase tracking-widest rounded-lg hover:scale-105 transition-transform">Deploy Now</button>
            <button className="bg-surface-container-highest border border-outline-variant/30 px-10 py-4 font-headline font-bold uppercase tracking-widest rounded-lg hover:bg-surface-bright transition-colors">Technical Audit</button>
          </div>
        </div>
      </section>
    </main>
  );
}
