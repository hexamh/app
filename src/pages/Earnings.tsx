import { useState, useMemo } from 'react';
import {
  Wallet,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Download,
  CalendarDays,
} from 'lucide-react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
  Area,
} from 'recharts';
import { StatCard } from '@/components/StatCard';
import {
  getDashboardStats,
  getEarningsHistory,
  payouts,
} from '@/lib/mining-data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Period = '7d' | '30d' | '90d';

function EarningsTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card rounded-lg px-3 py-2 text-sm shadow-xl border border-border/50">
      <p className="font-medium text-foreground mb-1">{label}</p>
      <p className="text-emerald-glow">
        ETH: <span className="font-semibold font-mono">{payload[0]?.value?.toFixed(4)}</span>
      </p>
      {payload[1] && (
        <p className="text-cyan-glow text-xs mt-0.5">
          USD: <span className="font-semibold font-mono">${payload[1]?.value?.toFixed(2)}</span>
        </p>
      )}
    </div>
  );
}

export function Earnings() {
  const stats = getDashboardStats();
  const [period, setPeriod] = useState<Period>('30d');
  const allData = useMemo(() => getEarningsHistory(), []);

  const earningsData = useMemo(() => {
    const days = period === '7d' ? 7 : period === '90d' ? 30 : 30; // mock only has 30 days
    return allData.slice(-days);
  }, [allData, period]);

  const totalEarned = earningsData.reduce((s, d) => s + d.amount, 0);
  const totalUsd = earningsData.reduce((s, d) => s + d.usdValue, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">Earnings</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Track your mining revenue and payout history
          </p>
        </div>
        <button className="hidden sm:flex items-center gap-2 rounded-lg bg-secondary/50 border border-border/50 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
          <Download className="h-3.5 w-3.5" />
          Export CSV
        </button>
      </div>

      {/* Balance cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children">
        <StatCard
          label="Available Balance"
          value={stats.unpaidBalance}
          subValue={stats.unpaidBalanceUsd}
          icon={Wallet}
          variant="emerald"
          progress={83}
        >
          <p className="text-[10px] text-muted-foreground">
            83% to payout threshold (0.10 ETH)
          </p>
        </StatCard>
        <StatCard
          label="Total Earned"
          value={stats.totalEarned}
          subValue={stats.totalEarnedUsd}
          icon={TrendingUp}
          variant="cyan"
        />
        <StatCard
          label="24h Earnings"
          value={stats.dailyEarnings}
          subValue={stats.dailyEarningsUsd}
          icon={Clock}
          variant="amber"
          trend={{ value: '+1.8%', positive: true }}
        />
      </div>

      {/* Earnings chart */}
      <div className="glass-card hover-glow rounded-xl p-5 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Earnings Over Time
            </h3>
            <div className="flex items-baseline gap-3 mt-1">
              <p className="text-xl font-bold">{totalEarned.toFixed(4)} ETH</p>
              <span className="text-xs text-muted-foreground font-mono">≈ ${totalUsd.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-secondary/30 rounded-lg p-0.5">
            {(['7d', '30d', '90d'] as Period[]).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={cn(
                  'px-3 py-1 text-xs font-medium rounded-md transition-all',
                  period === p
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs mb-3">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-glow" />
            ETH Amount
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan-glow" />
            USD Value
          </span>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={earningsData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
            <defs>
              <linearGradient id="earningsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.72 0.17 160)" stopOpacity={0.35} />
                <stop offset="50%" stopColor="oklch(0.72 0.17 160)" stopOpacity={0.1} />
                <stop offset="95%" stopColor="oklch(0.72 0.17 160)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.03 260 / 0.4)" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fill: 'oklch(0.65 0.02 240)', fontSize: 11 }}
              axisLine={{ stroke: 'oklch(0.28 0.03 260)' }}
              tickLine={false}
              interval={period === '7d' ? 0 : 4}
            />
            <YAxis
              yAxisId="eth"
              tick={{ fill: 'oklch(0.65 0.02 240)', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="usd"
              orientation="right"
              tick={{ fill: 'oklch(0.65 0.02 240)', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              hide
            />
            <Tooltip content={<EarningsTooltip />} cursor={{ stroke: 'oklch(0.72 0.17 160 / 0.3)', strokeDasharray: '4 4' }} />
            <Area
              yAxisId="eth"
              type="monotone"
              dataKey="amount"
              stroke="oklch(0.72 0.17 160)"
              strokeWidth={2}
              fill="url(#earningsGrad)"
              animationDuration={1000}
              dot={false}
              activeDot={{ r: 4, fill: 'oklch(0.72 0.17 160)', stroke: 'oklch(0.13 0.015 260)', strokeWidth: 2 }}
            />
            <Line
              yAxisId="usd"
              type="monotone"
              dataKey="usdValue"
              stroke="oklch(0.78 0.154 200)"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              dot={false}
              animationDuration={1000}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Payout history */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Payout History
          </h3>
          <span className="text-[11px] text-muted-foreground">{payouts.length} payouts</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">TX Hash</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">USD Value</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((payout) => (
                <tr
                  key={payout.id}
                  className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                >
                  <td className="px-4 py-3 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays className="h-3 w-3 shrink-0" />
                      {payout.date}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs text-primary hover:underline cursor-pointer">
                      {payout.txHash}
                      <ArrowUpRight className="h-3 w-3 shrink-0" />
                    </div>
                  </td>
                  <td className="px-4 py-3 font-mono font-semibold">
                    {payout.amount.toFixed(4)} {payout.coin}
                  </td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">
                    ${payout.usdValue.toFixed(2)}
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      variant="secondary"
                      className={cn(
                        'text-[10px] uppercase tracking-wider',
                        payout.status === 'confirmed' && 'bg-emerald-glow/15 text-emerald-glow border-emerald-glow/30',
                        payout.status === 'pending' && 'bg-amber-glow/15 text-amber-glow border-amber-glow/30',
                        payout.status === 'processing' && 'bg-cyan-glow/15 text-cyan-glow border-cyan-glow/30'
                      )}
                    >
                      {payout.status === 'pending' && <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-glow pulse-online" />}
                      {payout.status === 'processing' && <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-glow pulse-online" />}
                      {payout.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
