export default function Home() {
  return (
    <main>
      {/* Top Banner: Deposit Bonus */}
      <div className="bg-primary-container/10 border-b border-outline-variant/15 py-3 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8 flex justify-center items-center gap-4 animate-pulse">
          <span className="material-symbols-outlined text-primary">bolt</span>
          <p className="font-headline font-medium text-primary tracking-wide text-sm uppercase">Limited-Time Offer: 10% Deposit Bonus on all New Mining Nodes</p>
          <span className="material-symbols-outlined text-primary">bolt</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 kinetic-glow pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 bg-surface-container-highest px-3 py-1 rounded-full mb-6 border border-outline-variant/10">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#3aedce]"></span>
              <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest">Network Status: Optimized</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] mb-6 tracking-tight">
              The Kinetic Ledger: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">Future-Proof Mining.</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-body">
              Harness high-density hashing power and secure your digital assets with the world's most efficient autonomous ledger system. Engineered for professional-grade liquidity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all text-sm">
                Start Mining Now
              </button>
              <button className="bg-surface-container-highest border border-outline-variant/20 text-on-surface px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-widest hover:bg-surface-container-high active:scale-95 transition-all text-sm">
                See Plans
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square relative rounded-xl overflow-hidden border border-outline-variant/10 shadow-2xl">
              <img className="w-full h-full object-cover" alt="Futuristic high-tech cryptocurrency mining rig" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfj0GN6BH6izk1AZ4KHlFLTmmxnWVa9ZzfmrD7NqdbDVMUI3vO2O1zFXKSkRhiOtyGC9X5wqs28IiVz5mzx6C7r7UL4tZL7T1AFYO9OK4ZiQetFylC0202BgzEKpiB-d5-h0vvmg6CzYSupetDkMt_UE7OwPprZG0oTx9FHGlnRYewmEuOVjyDXLIcRL4p0PXDa9RXr08gvzy6LM1UBJb0q7pcsBRFLkT8sjPe9S5jWSk--xc2kGqkPt1q1CyAMT0YJcESyzCOpoUP"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-xl border border-outline-variant/20">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-on-surface-variant font-label uppercase mb-1">Global Hashrate</p>
                    <p className="text-2xl font-headline font-bold text-primary">128.42 EH/s</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-on-surface-variant font-label uppercase mb-1">Difficulty</p>
                    <p className="text-xl font-headline font-medium text-secondary">34.2T</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/5">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-lg border-l-2 border-primary">
              <p className="text-on-surface-variant text-xs font-label uppercase tracking-widest mb-2">Total Paid Out</p>
              <h3 className="font-headline text-3xl font-bold text-on-surface">$1.24B+</h3>
              <p className="text-primary-dim text-xs mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                +12% from yesterday
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-lg">
              <p className="text-on-surface-variant text-xs font-label uppercase tracking-widest mb-2">Active Nodes</p>
              <h3 className="font-headline text-3xl font-bold text-on-surface">42,891</h3>
              <p className="text-secondary text-xs mt-2">Verified Hardware</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-lg">
              <p className="text-on-surface-variant text-xs font-label uppercase tracking-widest mb-2">Average Uptime</p>
              <h3 className="font-headline text-3xl font-bold text-on-surface">99.98%</h3>
              <p className="text-on-surface-variant text-xs mt-2">Enterprise Grade</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-lg">
              <p className="text-on-surface-variant text-xs font-label uppercase tracking-widest mb-2">Network Energy</p>
              <h3 className="font-headline text-3xl font-bold text-on-surface">Renewable</h3>
              <p className="text-primary text-xs mt-2">Carbon Neutral Path</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl font-bold mb-4">Precision Engineering for Every Hash</h2>
              <p className="text-on-surface-variant leading-relaxed">Our infrastructure is built for high-density data processing, ensuring that every cycle spent contributes to your net worth with maximum efficiency.</p>
            </div>
            <span className="text-xs text-outline font-label uppercase tracking-[0.3em]">Hardware Ecosystem / 2024</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-high rounded-xl p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">shield_lock</span>
                <h3 className="font-headline text-2xl font-bold mb-4">Fortress-Grade Security</h3>
                <p className="text-on-surface-variant max-w-sm">Every mining session is encrypted with multi-sig protocols and real-time threat detection to protect your pending rewards.</p>
              </div>
              <div className="mt-12 flex gap-4">
                <span className="bg-surface-container-lowest border border-outline-variant/10 px-3 py-1 rounded text-[10px] uppercase font-label tracking-widest">TLS 1.3</span>
                <span className="bg-surface-container-lowest border border-outline-variant/10 px-3 py-1 rounded text-[10px] uppercase font-label tracking-widest">AES-256</span>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <span className="material-symbols-outlined text-[240px]">fingerprint</span>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-xl p-10 border-t-2 border-primary/20">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">currency_exchange</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Instant Payouts</h3>
              <p className="text-on-surface-variant">No withdrawal delays. Once the block is confirmed, your rewards are instantly liquid and available in your integrated wallet.</p>
            </div>
            <div className="bg-surface-container-high rounded-xl p-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">visibility</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Full Transparency</h3>
              <p className="text-on-surface-variant">Real-time telemetry for every hashing node. Watch your power consumption, chip temperature, and hash performance live.</p>
            </div>
            <div className="md:col-span-2 bg-gradient-to-br from-surface-container-highest to-surface-container-high rounded-xl p-10 flex items-center justify-between gap-8">
              <div>
                <h3 className="font-headline text-2xl font-bold mb-2 text-primary">Scalable Capacity</h3>
                <p className="text-on-surface-variant">Increase your hashing power instantly with our flexible scaling nodes. No hardware setup required.</p>
              </div>
              <button className="bg-primary/10 border border-primary text-primary px-6 py-3 rounded-lg font-headline font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-surface-container-low/50 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-bold mb-4 uppercase tracking-tighter">The Mining Sequence</h2>
            <p className="text-on-surface-variant">From connection to confirmation in three simple steps.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="relative">
              <div className="text-8xl font-headline font-extrabold text-outline-variant/10 absolute -top-10 -left-4">01</div>
              <div className="relative">
                <h4 className="font-headline text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="bg-primary text-on-primary w-8 h-8 rounded flex items-center justify-center text-sm">1</span>
                  Synchronize Wallet
                </h4>
                <p className="text-on-surface-variant leading-relaxed">Connect your secure digital vault to the Kinetic Ledger. We support all major hardware and software wallets via encrypted bridge.</p>
              </div>
            </div>
            <div className="relative">
              <div className="text-8xl font-headline font-extrabold text-outline-variant/10 absolute -top-10 -left-4">02</div>
              <div className="relative">
                <h4 className="font-headline text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="bg-primary text-on-primary w-8 h-8 rounded flex items-center justify-center text-sm">2</span>
                  Deploy Hashing Node
                </h4>
                <p className="text-on-surface-variant leading-relaxed">Select your desired computational density. Our automated system provisions your dedicated mining node in under 60 seconds.</p>
              </div>
            </div>
            <div className="relative">
              <div className="text-8xl font-headline font-extrabold text-outline-variant/10 absolute -top-10 -left-4">03</div>
              <div className="relative">
                <h4 className="font-headline text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="bg-primary text-on-primary w-8 h-8 rounded flex items-center justify-center text-sm">3</span>
                  Accumulate Assets
                </h4>
                <p className="text-on-surface-variant leading-relaxed">Watch your balance grow in real-time. Automated payouts transfer confirmed rewards directly to your wallet every 4 hours.</p>
              </div>
            </div>
          </div>
          <div className="mt-24 p-12 bg-surface-container-highest rounded-2xl border border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-headline text-3xl font-bold mb-2">Ready to secure the future?</h3>
              <p className="text-on-surface-variant">Join 40,000+ active miners on the Kinetic network today.</p>
            </div>
            <button className="bg-primary text-on-primary px-10 py-5 rounded-lg font-headline font-bold uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-105 transition-all text-sm">
              Initialize Mining Console
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-5 pointer-events-none">
          <img className="w-full h-full object-contain" alt="Abstract digital grid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW0j3gYKJxusQaUhDcJwUlP579o8boIIssjLh_l3SujFB7cjywzkQ4XQ04RxbUnx26vD_rurS58cPkbBba0gHP2qK415BGEONOjrqjz1GmnjBwg4yBZm7-8TqqGq1Xl3hfyyfpSkSJ31uqU6SMfTLFJGVyYeC-rlw7QG64jvfFL-75tmyfQEQDgUjhNspvCN31vpa61X3oq9JeqrnPloIWKfBUIburQZE9Z43BMuCymhYXupvCrARmoWw2EpiQ1R394aLnTC79wznJ"/>
        </div>
      </section>
    </main>
  );
}
