import { useMemo } from 'react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';

interface MiniSparklineProps {
  data: number[];
  color?: string;
  height?: number;
  className?: string;
}

let sparkId = 0;

export function MiniSparkline({
  data,
  color = 'oklch(0.78 0.154 200)',
  height = 32,
  className,
}: MiniSparklineProps) {
  const gradientId = useMemo(() => `spark-${++sparkId}`, []);
  const chartData = useMemo(
    () => data.map((value, index) => ({ index, value })),
    [data]
  );

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={chartData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.35} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={1.5}
            fill={`url(#${gradientId})`}
            animationDuration={600}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
