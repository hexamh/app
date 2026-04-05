import {
  Network,
  Users,
  Blocks,
  Percent,
  Globe,
  Shield,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { StatCard } from '@/components/StatCard';
import {
  poolStats,
  networkInfo,
  blocksFound,
  getDifficultyHistory,
} from '@/lib/mining-data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

function DiffTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card rounded-lg px-3 py-2 text-sm shadow-xl border border-border/50">
      <p className="font-medium text-foreground mb-1">{label}</p>
      <p className="text-amber-glow">
        Difficulty: <span className="font-semibold font-mono">{payload[0].value} P</span>
      </p>
    </div>
  );
}

const shareData = [
  { name: 'Your Share', value: 0.0047 },
  { name: 'Pool', value: 99.9953 },
];
const SHARE_COLORS = ['oklch(0.78 0.154 200)', 'oklch(0.28 0.03 260)'];

export function Pool() {
  const diffHistory = getDifficultyHistory();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold">Pool Statistics</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Mining pool performance and network overview
        </p>
      </div>

      {/* Pool stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 stagger-children">
        <StatCard
          label="Pool Hashrate"
          value={poolStats.poolHashrate}
          icon={Network}
          variant="cyan"
          trend={{ value: '+2.1%', positive: true }}
        />
        <StatCard
          label="Connected Miners"
          value={poolStats.connectedMiners.toLocaleString()}
          icon={Users}
          variant="emerald"
        />
        <StatCard
          label="Blocks (24h)"
          value={poolStats.blocksFound24h.toString()}
          icon={Blocks}
          variant="amber"
        />
        <StatCard
          label="Pool Luck"
          value={`${poolStats.luck}%`}
          icon={Percent}
          variant="default"
          trend={{
            value: poolStats.luck >= 100 ? 'Lucky' : 'Unlucky',
            positive: poolStats.luck >= 100,
          }}
          progress={poolStats.luck}
        />
      </div>

      {/* Network info + share row */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Network stats */}
        <div className="lg:col-span-2 glass-card hover-glow rounded-xl p-5 transition-all duration-300">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-4 w-4 text-primary" />
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Network Info
            </h3>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Coin', value: networkInfo.coin, icon: '🪙' },
              {
                label: 'Price',
                value: `$${networkInfo.price.toLocaleString()}`,
                change: `${networkInfo.priceChange24h > 0 ? '+' : ''}${networkInfo.priceChange24h}%`,
                positive: networkInfo.priceChange24h > 0,
                icon: '💲',
              },
              { label: 'Network Hashrate', value: networkInfo.networkHashrate, icon: '⚡' },
              { label: 'Difficulty', value: networkInfo.difficulty, icon: '🎯' },
              { label: 'Block Height', value: networkInfo.blockHeight.toLocaleString(), icon: '📦' },
              { label: 'Block Time', value: networkInfo.blockTime, icon: '⏱️' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between py-2 border-b border-border/30 last:border-0"
              >
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold font-mono">{item.value}</span>
                  {'change' in item && (
                    <span
                      className={cn(
                        'text-[10px] font-semibold px-1.5 py-0.5 rounded-md',
                        item.positive
                          ? 'bg-emerald-glow/15 text-emerald-glow'
                          : 'bg-red-glow/15 text-red-glow'
                      )}
                    >
                      {item.change}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pool config + Your share */}
        <div className="lg:col-span-2 space-y-4">
          {/* Pool config */}
          <div className="glass-card hover-glow rounded-xl p-5 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-4 w-4 text-emerald-glow" />
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Pool Configuration
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Fee', value: `${poolStats.fee}%` },
                { label: 'Min Payout', value: `${poolStats.minPayout} ETH` },
                { label: 'Scheme', value: poolStats.payoutScheme },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-secondary/30 px-3 py-3 text-center">
                  <p className="text-[9px] text-muted-foreground uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm font-bold mt-1 font-mono">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Your hashrate share */}
          <div className="glass-card hover-glow rounded-xl p-5 transition-all duration-300">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Your Pool Share
            </h3>
            <div className="flex items-center gap-4">
              <div className="relative" style={{ width: 90, height: 90 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={shareData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={42}
                      paddingAngle={2}
                      dataKey="value"
                      animationDuration={1000}
                      stroke="none"
                    >
                      {shareData.map((_, i) => (
                        <Cell key={i} fill={SHARE_COLORS[i]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="donut-center">
                  <p className="text-xs font-bold text-cyan-glow">0.005%</p>
                </div>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-glow" />
                  <span className="text-muted-foreground">Your hashrate:</span>
                  <span className="font-mono font-semibold">692.5 MH/s</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">Pool total:</span>
                  <span className="font-mono font-semibold">{poolStats.poolHashrate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Difficulty chart */}
      <div className="glass-card hover-glow rounded-xl p-5 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Network Difficulty
            </h3>
            <p className="text-lg font-bold mt-0.5">30-Day Trend</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={diffHistory} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
            <defs>
              <linearGradient id="diffGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.8 0.16 80)" stopOpacity={0.35} />
                <stop offset="50%" stopColor="oklch(0.8 0.16 80)" stopOpacity={0.1} />
                <stop offset="95%" stopColor="oklch(0.8 0.16 80)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.03 260 / 0.4)" vertical={false} />
            <XAxis
              dataKey="time"
              tick={{ fill: 'oklch(0.65 0.02 240)', fontSize: 11 }}
              axisLine={{ stroke: 'oklch(0.28 0.03 260)' }}
              tickLine={false}
              interval={4}
            />
            <YAxis
              tick={{ fill: 'oklch(0.65 0.02 240)', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={['auto', 'auto']}
            />
            <Tooltip content={<DiffTooltip />} cursor={{ stroke: 'oklch(0.8 0.16 80 / 0.3)', strokeDasharray: '4 4' }} />
            <Area
              type="monotone"
              dataKey="difficulty"
              stroke="oklch(0.8 0.16 80)"
              strokeWidth={2}
              fill="url(#diffGrad)"
              animationDuration={1000}
              dot={false}
              activeDot={{ r: 4, fill: 'oklch(0.8 0.16 80)', stroke: 'oklch(0.13 0.015 260)', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Blocks found table */}
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Recent Blocks Found
          </h3>
          <span className="text-[11px] text-muted-foreground">{blocksFound.length} blocks</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3 text-left">Block #</th>
                <th className="px-4 py-3 text-left">Reward</th>
                <th className="px-4 py-3 text-left">Time</th>
                <th className="px-4 py-3 text-left">Finder</th>
                <th className="px-4 py-3 text-left">Confirmations</th>
              </tr>
            </thead>
            <tbody>
              {blocksFound.map((block) => (
                <tr
                  key={block.id}
                  className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                >
                  <td className="px-4 py-3 font-mono font-semibold text-primary">
                    #{block.blockNumber.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 font-mono">
                    <span className="text-emerald-glow font-semibold">{block.reward.toFixed(1)}</span> ETH
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {block.time}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {block.finder}
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-glow/15 text-emerald-glow border-emerald-glow/30 text-[10px] uppercase tracking-wider"
                    >
                      {block.confirmations.toLocaleString()} ✓
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
