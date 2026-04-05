export default function Deposit() {
  return (
    <main className="max-w-screen-2xl mx-auto px-8 py-10">
      {/* Dashboard Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-headline text-primary-dim uppercase tracking-widest text-xs font-bold block mb-2">Financial Operations</span>
          <h1 className="font-headline text-5xl font-bold tracking-tight text-on-surface">Deposit <span className="text-primary-dim">&amp;</span> Assets</h1>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-low px-6 py-4 rounded border-l-2 border-primary">
            <p className="text-on-surface-variant text-xs uppercase tracking-tighter mb-1">Active Bonus Tier</p>
            <p className="font-headline text-2xl font-bold text-primary">+10% Kinetic Boost</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Deposit Form */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Select Currency */}
          <section className="bg-surface-container-low p-8 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <h2 className="font-headline text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded text-sm">01</span>
              Select Asset
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex flex-col gap-4 p-5 rounded-lg bg-surface-container-highest border border-primary ring-2 ring-primary/20 transition-all">
                <div className="flex justify-between items-start w-full">
                  <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>currency_bitcoin</span>
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                </div>
                <div className="text-left">
                  <p className="font-headline font-bold text-on-surface">Bitcoin</p>
                  <p className="text-xs text-on-surface-variant">BTC (Native SegWit)</p>
                </div>
              </button>
              <button className="flex flex-col gap-4 p-5 rounded-lg bg-surface-container-lowest border border-outline-variant/15 hover:border-primary/50 transition-all group">
                <div className="flex justify-between items-start w-full">
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary transition-colors">currency_exchange</span>
                </div>
                <div className="text-left">
                  <p className="font-headline font-bold text-on-surface">Ethereum</p>
                  <p className="text-xs text-on-surface-variant">ETH (ERC-20)</p>
                </div>
              </button>
              <button className="flex flex-col gap-4 p-5 rounded-lg bg-surface-container-lowest border border-outline-variant/15 hover:border-primary/50 transition-all group">
                <div className="flex justify-between items-start w-full">
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary transition-colors">monetization_on</span>
                </div>
                <div className="text-left">
                  <p className="font-headline font-bold text-on-surface">Tether</p>
                  <p className="text-xs text-on-surface-variant">USDT (TRC-20)</p>
                </div>
              </button>
            </div>
          </section>

          {/* Step 2: Deposit Logic */}
          <section className="bg-surface-container-low p-8 rounded-xl shadow-2xl relative">
            <h2 className="font-headline text-xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded text-sm">02</span>
              Configure Deposit
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Deposit Amount (USD)</label>
                  <div className="relative">
                    <input className="w-full bg-surface-container-lowest border-none rounded-lg p-4 font-headline text-2xl font-bold text-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-surface-variant" type="number" defaultValue="1000" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-headline font-bold">$ USD</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center bg-surface-container-highest/50 p-4 rounded-lg border-l-4 border-secondary shadow-inner">
                  <p className="text-xs text-secondary font-bold uppercase tracking-widest flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined text-sm">bolt</span> Kinetic Bonus (10%)
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline text-3xl font-bold text-on-surface">+$100</span>
                    <span className="text-on-surface-variant text-xs line-through">$0.00</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-on-surface-variant text-sm">Total Expected Credit</span>
                  <span className="font-headline text-2xl font-bold text-primary">$1,100.00</span>
                </div>
                <div className="h-1 bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[90%]"></div>
                </div>
                <p className="text-[10px] text-on-surface-variant mt-3 leading-relaxed uppercase tracking-tighter">Calculation based on real-time kinetic multiplier. Bonus applied instantly upon confirmation.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Address & Details */}
        <div className="lg:col-span-5 space-y-8">
          {/* Address Card */}
          <section className="bg-surface-container-high p-8 rounded-xl shadow-2xl border-t-2 border-primary/30">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-lg mb-6 shadow-[0_0_50px_rgba(170,255,220,0.1)]">
                <img className="w-40 h-40" alt="QR code" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZg8Azel5AGwbp8GmvC6WiMsCcLKvI2ELX9onml2Tmle8oIXoGDPwpg6YPDF_SQpJC8M2TDZT1WAVKFYejhHYNXr0TWu2NG6RjqBrgqps8tbf5-I28AM9HRE6n1tZ7Z18f4RbHLRrrGx6xZcdhy34ChTbEOvnBvUbA5CYWqiBZldt4Gcp_vkCSugKJhipQHJayJgLDzcVMjAdlKWRvOSLiojEjARjQr4SReOgH47zxAtPLrL_a4zSFoLQNRYNgbqfbo6BHiXHYUdax"/>
              </div>
              <div className="w-full space-y-4">
                <div>
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2 block">Your Unique BTC Deposit Address</label>
                  <div className="flex gap-2">
                    <code className="flex-1 bg-surface-container-lowest p-3 rounded text-primary-dim font-mono text-sm break-all border border-outline-variant/10">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</code>
                    <button className="bg-surface-container-highest p-3 rounded hover:bg-primary hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined block">content_copy</span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div className="bg-surface-container-low p-3 rounded">
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter mb-1">Network</p>
                    <p className="text-xs font-bold">Bitcoin Mainnet</p>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded">
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter mb-1">Confirmations</p>
                    <p className="text-xs font-bold">3 Blocks Required</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-error-container/10 rounded-lg border border-error/20 text-left">
                  <span className="material-symbols-outlined text-error text-lg">warning</span>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed">Ensure you are sending <span className="text-error font-bold">BTC</span> over the <span className="text-error font-bold">Bitcoin Network</span>. Sending any other asset or using a different network will result in permanent loss.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Mining Efficiency Stats */}
          <section className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
            <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-primary mb-4">Network Status</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-on-surface-variant">Global Hash Rate</span>
                <span className="font-headline font-medium">428.52 EH/s</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-on-surface-variant">Kinetic Pool Load</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-2/3"></div>
                  </div>
                  <span className="font-headline font-medium text-secondary">Optimal</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* History Table Section */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-headline text-2xl font-bold">Recent Transactional <span className="text-on-surface-variant font-light">Ledger</span></h2>
          <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">Download Report</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                <th className="px-6 py-4 font-medium">Tx Hash / Asset</th>
                <th className="px-6 py-4 font-medium">Date &amp; Time</th>
                <th className="px-6 py-4 font-medium text-right">Base Amount</th>
                <th className="px-6 py-4 font-medium text-right">Kinetic Bonus</th>
                <th className="px-6 py-4 font-medium text-right">Total Credit</th>
                <th className="px-6 py-4 font-medium text-center">Status</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              <tr className="bg-surface-container-low group hover:bg-surface-container transition-colors">
                <td className="px-6 py-5 rounded-l-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">north_east</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold font-headline">0x4a...c92</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">Bitcoin Deposit</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="text-sm">Oct 24, 2023</p>
                  <p className="text-[10px] text-on-surface-variant">14:22:10 UTC</p>
                </td>
                <td className="px-6 py-5 text-right font-headline text-sm font-medium">$5,000.00</td>
                <td className="px-6 py-5 text-right">
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">+$500.00</span>
                </td>
                <td className="px-6 py-5 text-right font-headline text-sm font-bold text-primary">$5,500.00</td>
                <td className="px-6 py-5 rounded-r-lg text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Completed
                  </span>
                </td>
              </tr>
              <tr className="bg-surface-container-low group hover:bg-surface-container transition-colors">
                <td className="px-6 py-5 rounded-l-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">north_east</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold font-headline">0x12...f8a</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">Ethereum Deposit</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="text-sm">Oct 22, 2023</p>
                  <p className="text-[10px] text-on-surface-variant">09:15:44 UTC</p>
                </td>
                <td className="px-6 py-5 text-right font-headline text-sm font-medium">$1,200.00</td>
                <td className="px-6 py-5 text-right">
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">+$120.00</span>
                </td>
                <td className="px-6 py-5 text-right font-headline text-sm font-bold text-primary">$1,320.00</td>
                <td className="px-6 py-5 rounded-r-lg text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Completed
                  </span>
                </td>
              </tr>
              <tr className="bg-surface-container-low/50 group hover:bg-surface-container transition-colors">
                <td className="px-6 py-5 rounded-l-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
                      <span className="material-symbols-outlined text-tertiary text-sm">pending</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold font-headline">0x88...3e2</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">Tether Deposit</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="text-sm">Oct 26, 2023</p>
                  <p className="text-[10px] text-on-surface-variant">Just Now</p>
                </td>
                <td className="px-6 py-5 text-right font-headline text-sm font-medium">$25,000.00</td>
                <td className="px-6 py-5 text-right">
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">+$2,500.00</span>
                </td>
                <td className="px-6 py-5 text-right font-headline text-sm font-bold text-primary">$27,500.00</td>
                <td className="px-6 py-5 rounded-r-lg text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Pending (1/3)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
