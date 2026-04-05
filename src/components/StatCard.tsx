import { type ReactNode } from 'react';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string;
  subValue?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  variant?: 'cyan' | 'emerald' | 'amber' | 'purple' | 'default';
  progress?: number; // 0-100
  children?: ReactNode;
  className?: string;
}

const variantStyles = {
  cyan: 'glow-cyan',
  emerald: 'glow-emerald',
  amber: 'glow-amber',
  purple: 'glow-purple',
  default: '',
};

const iconColors = {
  cyan: 'text-cyan-glow bg-cyan-glow/10',
  emerald: 'text-emerald-glow bg-emerald-glow/10',
  amber: 'text-amber-glow bg-amber-glow/10',
  purple: 'text-purple-glow bg-purple-glow/10',
  default: 'text-muted-foreground bg-secondary/50',
};

const progressColors = {
  cyan: 'bg-cyan-glow',
  emerald: 'bg-emerald-glow',
  amber: 'bg-amber-glow',
  purple: 'bg-purple-glow',
  default: 'bg-muted-foreground',
};

export function StatCard({
  label,
  value,
  subValue,
  icon: Icon,
  trend,
  variant = 'default',
  progress,
  children,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        'glass-card hover-glow rounded-xl p-5 transition-all duration-300',
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between relative z-[1]">
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            {label}
          </p>
          <p className="text-2xl font-bold tracking-tight truncate">{value}</p>
          {subValue && (
            <p className="text-sm text-muted-foreground mt-0.5">{subValue}</p>
          )}
          {trend && (
            <div className="flex items-center gap-1.5 mt-2">
              <span
                className={cn(
                  'inline-flex items-center gap-0.5 text-[11px] font-semibold px-1.5 py-0.5 rounded-md',
                  trend.positive
                    ? 'bg-emerald-glow/15 text-emerald-glow'
                    : 'bg-red-glow/15 text-red-glow'
                )}
              >
                {trend.positive ? '↑' : '↓'} {trend.value}
              </span>
            </div>
          )}
        </div>
        <div
          className={cn(
            'p-2.5 rounded-xl shrink-0',
            iconColors[variant]
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {progress !== undefined && (
        <div className="mt-3 relative z-[1]">
          <div className="h-1.5 rounded-full bg-secondary/50 overflow-hidden">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-1000 ease-out relative progress-shimmer',
                progressColors[variant]
              )}
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        </div>
      )}
      {children && <div className="mt-3 relative z-[1]">{children}</div>}
    </div>
  );
}
