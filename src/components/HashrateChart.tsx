import { useState, useMemo } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { getHashrateHistory } from '@/lib/mining-data';
import { cn } from '@/lib/utils';

type Period = '7d' | '14d' | '30d';

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card rounded-lg px-3 py-2 text-sm shadow-xl border border-border/50">
      <p className="font-medium text-foreground mb-1">{label}</p>
      <p className="text-cyan-glow">
        Hashrate: <span className="font-semibold font-mono">{payload[0].value} MH/s</span>
      </p>
      {payload[1] && (
        <p className="text-muted-foreground text-xs mt-0.5">
          Average: <span className="font-semibold font-mono">{payload[1].value} MH/s</span>
        </p>
      )}
    </div>
  );
}

export function HashrateChart() {
  const [period, setPeriod] = useState<Period>('30d');
  const allData = useMemo(() => getHashrateHistory(), []);

  const data = useMemo(() => {
    const days = period === '7d' ? 7 : period === '14d' ? 14 : 30;
    return allData.slice(-days);
  }, [allData, period]);

  const avgHashrate = Math.round(
    data.reduce((s, d) => s + d.hashrate, 0) / data.length
  );
  const maxHashrate = Math.max(...data.map(d => d.hashrate));
  const minHashrate = Math.min(...data.map(d => d.hashrate));

  return (
    <div className="glass-card hover-glow rounded-xl p-5 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Hashrate History
          </h3>
          <div className="flex items-baseline gap-3 mt-1">
            <p className="text-xl font-bold">{avgHashrate} MH/s</p>
            <span className="text-xs text-muted-foreground">avg</span>
            <span className="text-xs font-mono text-cyan-glow">⬆ {maxHashrate.toFixed(1)}</span>
            <span className="text-xs font-mono text-red-glow">⬇ {minHashrate.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-secondary/30 rounded-lg p-0.5">
          {(['7d', '14d', '30d'] as Period[]).map((p) => (
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
          <span className="h-2 w-2 rounded-full bg-cyan-glow" />
          Hashrate
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1 w-4 rounded-full bg-muted-foreground/50 border-dashed" />
          Average
        </span>
      </div>

      <ResponsiveContainer width="100%" height={270}>
        <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
          <defs>
            <linearGradient id="hashrateGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="oklch(0.78 0.154 200)" stopOpacity={0.35} />
              <stop offset="50%" stopColor="oklch(0.78 0.154 200)" stopOpacity={0.1} />
              <stop offset="95%" stopColor="oklch(0.78 0.154 200)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.03 260 / 0.4)" vertical={false} />
          <XAxis
            dataKey="time"
            tick={{ fill: 'oklch(0.65 0.02 240)', fontSize: 11 }}
            axisLine={{ stroke: 'oklch(0.28 0.03 260)' }}
            tickLine={false}
            interval={period === '7d' ? 0 : period === '14d' ? 1 : 4}
          />
          <YAxis
            tick={{ fill: 'oklch(0.65 0.02 240)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={['auto', 'auto']}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'oklch(0.78 0.154 200 / 0.3)', strokeDasharray: '4 4' }} />
          <ReferenceLine
            y={avgHashrate}
            stroke="oklch(0.65 0.02 240)"
            strokeDasharray="4 4"
            strokeOpacity={0.5}
          />
          <Area
            type="monotone"
            dataKey="hashrate"
            stroke="oklch(0.78 0.154 200)"
            strokeWidth={2}
            fill="url(#hashrateGradient)"
            animationDuration={1000}
            dot={false}
            activeDot={{
              r: 4,
              fill: 'oklch(0.78 0.154 200)',
              stroke: 'oklch(0.13 0.015 260)',
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
