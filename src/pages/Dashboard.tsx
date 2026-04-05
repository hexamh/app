import {
  Activity,
  Cpu,
  Coins,
  Zap,
  TrendingUp,
  Thermometer,
  DollarSign,
  Clock,
  Pickaxe,
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { StatCard } from '@/components/StatCard';
import { HashrateChart } from '@/components/HashrateChart';
import { MiniSparkline } from '@/components/MiniSparkline';
import {
  getDashboardStats,
  workers,
  recentActivity,
  networkInfo,
} from '@/lib/mining-data';
import { cn } from '@/lib/utils';

const DONUT_COLORS = [
  'oklch(0.78 0.154 200)',  // cyan
  'oklch(0.72 0.17 160)',   // emerald
  'oklch(0.8 0.16 80)',     // amber
  'oklch(0.7 0.15 300)',    // purple
  'oklch(0.65 0.1 200)',    // steel
  'oklch(0.55 0.08 260)',   // dim
];

function DonutTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card rounded-lg px-3 py-2 text-sm shadow-xl border border-border/50">
      <p className="font-medium font-mono">{payload[0].name}</p>
      <p className="text-cyan-glow font-semibold">{payload[0].value} MH/s</p>
    </div>
  );
}

export function Dashboard() {
  const stats = getDashboardStats();
  const topWorkers = workers.filter((w) => w.status === 'online').slice(0, 4);
  const onlineWorkers = workers.filter((w) => w.status === 'online');

  // Data for donut chart  
  const donutData = onlineWorkers.map((w) => ({
    name: w.name,
    value: w.hashrate,
  }));

  return (
    <div className="space-y-6">
      {/* Live status banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-cyan-glow/5 via-transparent to-emerald-glow/5 border border-border/50 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Pickaxe className="h-5 w-5 text-cyan-glow" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-glow pulse-online" />
          </div>
          <div>
            <p className="text-sm font-semibold">Mining Active</p>
            <p className="text-xs text-muted-foreground">
              {onlineWorkers.length} rigs online · Algorithm: Ethash
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <DollarSign className="h-3.5 w-3.5 text-emerald-glow" />
            <span className="font-mono font-medium">ETH ${networkInfo.price.toLocaleString()}</span>
            <span className={cn(
              'font-semibold px-1 py-0.5 rounded',
              networkInfo.priceChange24h > 0
                ? 'text-emerald-glow bg-emerald-glow/10'
                : 'text-red-glow bg-red-glow/10'
            )}>
              {networkInfo.priceChange24h > 0 ? '+' : ''}{networkInfo.priceChange24h}%
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>Block #{networkInfo.blockHeight.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 stagger-children">
        <StatCard
          label="Total Hashrate"
          value={stats.totalHashrate}
          icon={Activity}
          variant="cyan"
          trend={{ value: '+3.2%', positive: true }}
          progress={75}
        />
        <StatCard
          label="Active Workers"
          value={stats.activeWorkers}
          icon={Cpu}
          variant="emerald"
          trend={{ value: '1 idle', positive: false }}
          progress={(onlineWorkers.length / workers.length) * 100}
        />
        <StatCard
          label="24h Earnings"
          value={stats.dailyEarnings}
          subValue={stats.dailyEarningsUsd}
          icon={Coins}
          variant="amber"
          trend={{ value: '+1.8%', positive: true }}
        />
        <StatCard
          label="Monthly Estimate"
          value={stats.monthlyEstimate}
          subValue={stats.monthlyEstimateUsd}
          icon={TrendingUp}
          variant="purple"
        />
      </div>

      {/* Chart + Activity row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Hashrate chart — takes 2 cols */}
        <div className="lg:col-span-2">
          <HashrateChart />
        </div>

        {/* Recent activity */}
        <div className="glass-card hover-glow rounded-xl p-5 transition-all duration-300 flex flex-col">
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Recent Activity
          </h3>
          <div className="space-y-2 flex-1 overflow-y-auto">
            {recentActivity.map((act, i) => (
              <div
                key={act.id}
                className="flex items-start gap-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 p-3 text-sm transition-colors"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="text-base mt-0.5 shrink-0">{act.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate text-[13px]">{act.message}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {act.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick stats + GPU chart */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <StatCard
          label="Unpaid Balance"
          value={stats.unpaidBalance}
          subValue={stats.unpaidBalanceUsd}
          icon={Coins}
          variant="default"
        />
        <StatCard
          label="Avg. Temperature"
          value={stats.avgTemperature}
          icon={Thermometer}
          variant="default"
          progress={parseInt(stats.avgTemperature) / 100 * 100}
        />
        <StatCard
          label="Total Power Draw"
          value={stats.totalPower}
          icon={Zap}
          variant="default"
        />

        {/* Donut chart card */}
        <div className="glass-card hover-glow rounded-xl p-5 transition-all duration-300">
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Hashrate Distribution
          </h3>
          <div className="relative" style={{ height: 130 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={36}
                  outerRadius={56}
                  paddingAngle={3}
                  dataKey="value"
                  animationDuration={1000}
                  stroke="none"
                >
                  {donutData.map((_, i) => (
                    <Cell key={i} fill={DONUT_COLORS[i % DONUT_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<DonutTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="donut-center">
              <p className="text-lg font-bold">{onlineWorkers.length}</p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-wider">Rigs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top workers grid */}
      <div>
        <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Top Workers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 stagger-children">
          {topWorkers.map((worker) => (
            <div
              key={worker.id}
              className="glass-card hover-glow rounded-xl p-4 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      'h-2 w-2 rounded-full',
                      worker.status === 'online'
                        ? 'bg-emerald-glow pulse-online'
                        : worker.status === 'idle'
                        ? 'bg-amber-glow'
                        : 'bg-red-glow'
                    )}
                  />
                  <span className="text-sm font-semibold font-mono">
                    {worker.name}
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-between mb-3">
                <div>
                  <p className="text-xl font-bold text-cyan-glow">
                    {worker.hashrate} <span className="text-[10px] font-normal text-muted-foreground">MH/s</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    {worker.power}W · {worker.fanSpeed}%
                  </p>
                </div>
                <MiniSparkline data={worker.sparkline} className="w-20 h-8" />
              </div>
              {/* Temperature bar */}
              <div>
                <div className="flex items-center justify-between text-[10px] mb-1">
                  <span className="text-muted-foreground">Temperature</span>
                  <span className={cn(
                    'font-mono font-semibold',
                    worker.temperature > 70 ? 'text-red-glow' :
                    worker.temperature > 60 ? 'text-amber-glow' :
                    'text-emerald-glow'
                  )}>
                    {worker.temperature}°C
                  </span>
                </div>
                <div className="temp-bar">
                  <div
                    className={cn(
                      'temp-bar-fill',
                      worker.temperature > 70 ? 'bg-red-glow' :
                      worker.temperature > 60 ? 'bg-amber-glow' :
                      'bg-emerald-glow'
                    )}
                    style={{ width: `${(worker.temperature / 100) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
