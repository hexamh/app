import { useState, useMemo, Fragment } from 'react';
import {
  Search,
  ChevronDown,
  ChevronUp,
  Cpu,
  Wifi,
  WifiOff,
  LayoutGrid,
  List,
  Pause,
  Zap,
  Thermometer,
  Activity,
} from 'lucide-react';
import { workers } from '@/lib/mining-data';
import { MiniSparkline } from '@/components/MiniSparkline';
import { StatCard } from '@/components/StatCard';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

type SortKey = 'name' | 'status' | 'hashrate' | 'temperature' | 'power';
type SortDir = 'asc' | 'desc';
type FilterTab = 'all' | 'online' | 'offline' | 'idle';
type ViewMode = 'list' | 'grid';

export function Workers() {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterTab, setFilterTab] = useState<FilterTab>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  const filteredWorkers = useMemo(() => {
    return workers
      .filter((w) => {
        if (filterTab !== 'all' && w.status !== filterTab) return false;
        return w.name.toLowerCase().includes(search.toLowerCase());
      })
      .sort((a, b) => {
        let cmp = 0;
        switch (sortKey) {
          case 'name': cmp = a.name.localeCompare(b.name); break;
          case 'status': cmp = a.status.localeCompare(b.status); break;
          case 'hashrate': cmp = a.hashrate - b.hashrate; break;
          case 'temperature': cmp = a.temperature - b.temperature; break;
          case 'power': cmp = a.power - b.power; break;
        }
        return sortDir === 'asc' ? cmp : -cmp;
      });
  }, [search, sortKey, sortDir, filterTab]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) return <ChevronDown className="h-3 w-3 opacity-30" />;
    return sortDir === 'asc' ? (
      <ChevronUp className="h-3 w-3 text-primary" />
    ) : (
      <ChevronDown className="h-3 w-3 text-primary" />
    );
  };

  const onlineCount = workers.filter((w) => w.status === 'online').length;
  const offlineCount = workers.filter((w) => w.status === 'offline').length;
  const idleCount = workers.filter((w) => w.status === 'idle').length;
  const totalHashrate = workers.filter(w => w.status === 'online').reduce((s, w) => s + w.hashrate, 0);
  const avgTemp = Math.round(
    workers.filter(w => w.status === 'online').reduce((s, w) => s + w.temperature, 0) / onlineCount
  );
  const totalPower = workers.filter(w => w.status === 'online').reduce((s, w) => s + w.power, 0);

  const filterTabs: { key: FilterTab; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: workers.length },
    { key: 'online', label: 'Online', count: onlineCount },
    { key: 'offline', label: 'Offline', count: offlineCount },
    { key: 'idle', label: 'Idle', count: idleCount },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">Mining Workers</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Manage and monitor your connected rigs
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs">
            <Wifi className="h-3.5 w-3.5 text-emerald-glow" />
            <span className="text-emerald-glow font-medium">{onlineCount} Online</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <WifiOff className="h-3.5 w-3.5 text-red-glow" />
            <span className="text-red-glow font-medium">{offlineCount} Offline</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <Pause className="h-3.5 w-3.5 text-amber-glow" />
            <span className="text-amber-glow font-medium">{idleCount} Idle</span>
          </div>
        </div>
      </div>

      {/* Stats summary row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children">
        <StatCard
          label="Combined Hashrate"
          value={`${totalHashrate.toFixed(1)} MH/s`}
          icon={Activity}
          variant="cyan"
        />
        <StatCard
          label="Avg. Temperature"
          value={`${avgTemp}°C`}
          icon={Thermometer}
          variant={avgTemp > 70 ? 'amber' : 'emerald'}
          progress={avgTemp}
        />
        <StatCard
          label="Total Power"
          value={`${totalPower} W`}
          icon={Zap}
          variant="amber"
        />
      </div>

      {/* Filter + Search + View mode */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        {/* Filter tabs */}
        <div className="flex items-center gap-1 bg-secondary/30 rounded-lg p-0.5">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilterTab(tab.key)}
              className={cn(
                'px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5',
                filterTab === tab.key
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {tab.label}
              <span className={cn(
                'text-[10px] font-semibold px-1 rounded',
                filterTab === tab.key ? 'bg-primary-foreground/20' : 'bg-secondary'
              )}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="flex-1" />

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search workers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-8"
          />
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-0.5 bg-secondary/30 rounded-lg p-0.5">
          <button
            onClick={() => setViewMode('list')}
            className={cn(
              'p-1.5 rounded-md transition-all',
              viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <List className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={cn(
              'p-1.5 rounded-md transition-all',
              viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Grid view */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 stagger-children">
          {filteredWorkers.map((worker) => (
            <div
              key={worker.id}
              className="glass-card hover-glow rounded-xl p-4 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold font-mono">{worker.name}</span>
                </div>
                <Badge
                  variant="secondary"
                  className={cn(
                    'text-[10px] uppercase tracking-wider',
                    worker.status === 'online' && 'bg-emerald-glow/15 text-emerald-glow border-emerald-glow/30',
                    worker.status === 'idle' && 'bg-amber-glow/15 text-amber-glow border-amber-glow/30',
                    worker.status === 'offline' && 'bg-red-glow/15 text-red-glow border-red-glow/30'
                  )}
                >
                  <span className={cn(
                    'mr-1 inline-block h-1.5 w-1.5 rounded-full',
                    worker.status === 'online' && 'bg-emerald-glow pulse-online',
                    worker.status === 'idle' && 'bg-amber-glow',
                    worker.status === 'offline' && 'bg-red-glow'
                  )} />
                  {worker.status}
                </Badge>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-2xl font-bold text-cyan-glow">
                    {worker.hashrate > 0 ? worker.hashrate : '—'}
                    <span className="text-[10px] font-normal text-muted-foreground ml-1">MH/s</span>
                  </p>
                </div>

                <MiniSparkline
                  data={worker.sparkline}
                  className="w-full h-10"
                  color={worker.status === 'online' ? 'oklch(0.78 0.154 200)' : 'oklch(0.5 0.02 240)'}
                />

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-secondary/20 py-1.5">
                    <p className="text-[9px] text-muted-foreground uppercase">Temp</p>
                    <p className={cn(
                      'text-xs font-mono font-semibold',
                      worker.temperature > 70 ? 'text-red-glow' : worker.temperature > 60 ? 'text-amber-glow' : 'text-emerald-glow'
                    )}>
                      {worker.temperature > 0 ? `${worker.temperature}°C` : '—'}
                    </p>
                  </div>
                  <div className="rounded-lg bg-secondary/20 py-1.5">
                    <p className="text-[9px] text-muted-foreground uppercase">Power</p>
                    <p className="text-xs font-mono font-semibold">{worker.power > 0 ? `${worker.power}W` : '—'}</p>
                  </div>
                  <div className="rounded-lg bg-secondary/20 py-1.5">
                    <p className="text-[9px] text-muted-foreground uppercase">Fan</p>
                    <p className="text-xs font-mono font-semibold">{worker.fanSpeed > 0 ? `${worker.fanSpeed}%` : '—'}</p>
                  </div>
                </div>

                {/* Temperature bar */}
                {worker.temperature > 0 && (
                  <div className="temp-bar">
                    <div
                      className={cn(
                        'temp-bar-fill',
                        worker.temperature > 70 ? 'bg-red-glow' : worker.temperature > 60 ? 'bg-amber-glow' : 'bg-emerald-glow'
                      )}
                      style={{ width: `${worker.temperature}%` }}
                    />
                  </div>
                )}

                <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>{worker.uptime !== '0d 0h 0m' ? worker.uptime : '—'}</span>
                  <span>{worker.lastSeen}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Table view */
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-[10px] uppercase tracking-wider text-muted-foreground">
                  {([
                    ['name', 'Worker'],
                    ['status', 'Status'],
                    ['hashrate', 'Hashrate'],
                    ['temperature', 'Temp'],
                    ['power', 'Power'],
                  ] as const).map(([key, label]) => (
                    <th
                      key={key}
                      className="px-4 py-3 text-left cursor-pointer hover:text-foreground transition-colors"
                      onClick={() => handleSort(key)}
                    >
                      <div className="flex items-center gap-1">
                        {label}
                        <SortIcon column={key} />
                      </div>
                    </th>
                  ))}
                  <th className="px-4 py-3 text-left">Fan</th>
                  <th className="px-4 py-3 text-left">Uptime</th>
                  <th className="px-4 py-3 text-left">Trend</th>
                </tr>
              </thead>
              <tbody>
                {filteredWorkers.map((worker) => (
                  <Fragment key={worker.id}>
                    <tr
                      className={cn(
                        'border-b border-border/50 hover:bg-secondary/30 cursor-pointer transition-colors table-row-enter',
                        expandedId === worker.id && 'bg-secondary/20'
                      )}
                      onClick={() =>
                        setExpandedId(expandedId === worker.id ? null : worker.id)
                      }
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-muted-foreground shrink-0" />
                          <span className="font-mono font-medium">{worker.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant={
                            worker.status === 'online' ? 'default' :
                            worker.status === 'idle' ? 'secondary' : 'destructive'
                          }
                          className={cn(
                            'text-[10px] uppercase tracking-wider',
                            worker.status === 'online' && 'bg-emerald-glow/15 text-emerald-glow border-emerald-glow/30',
                            worker.status === 'idle' && 'bg-amber-glow/15 text-amber-glow border-amber-glow/30'
                          )}
                        >
                          <span className={cn(
                            'mr-1 inline-block h-1.5 w-1.5 rounded-full',
                            worker.status === 'online' && 'bg-emerald-glow pulse-online',
                            worker.status === 'idle' && 'bg-amber-glow',
                            worker.status === 'offline' && 'bg-red-glow'
                          )} />
                          {worker.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 font-mono font-semibold text-cyan-glow">
                        {worker.hashrate > 0 ? `${worker.hashrate} MH/s` : '—'}
                      </td>
                      <td className="px-4 py-3">
                        <span className={cn(
                          'font-mono',
                          worker.temperature > 70 ? 'text-red-glow' :
                          worker.temperature > 60 ? 'text-amber-glow' : 'text-emerald-glow'
                        )}>
                          {worker.temperature > 0 ? `${worker.temperature}°C` : '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-muted-foreground">
                        {worker.power > 0 ? `${worker.power}W` : '—'}
                      </td>
                      <td className="px-4 py-3 font-mono text-muted-foreground">
                        {worker.fanSpeed > 0 ? `${worker.fanSpeed}%` : '—'}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">
                        {worker.uptime !== '0d 0h 0m' ? worker.uptime : '—'}
                      </td>
                      <td className="px-4 py-3">
                        <MiniSparkline
                          data={worker.sparkline}
                          className="w-20 h-6"
                          height={24}
                          color={worker.status === 'online' ? 'oklch(0.78 0.154 200)' : 'oklch(0.5 0.02 240)'}
                        />
                      </td>
                    </tr>
                    {expandedId === worker.id && (
                      <tr className="bg-secondary/10">
                        <td colSpan={8} className="px-4 py-4">
                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs">
                            <div>
                              <span className="text-muted-foreground uppercase tracking-wider block mb-1">Algorithm</span>
                              <span className="font-medium">{worker.algorithm}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground uppercase tracking-wider block mb-1">Last Seen</span>
                              <span className="font-medium">{worker.lastSeen}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground uppercase tracking-wider block mb-1">Fan Speed</span>
                              <span className="font-medium">{worker.fanSpeed}%</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground uppercase tracking-wider block mb-1">Efficiency</span>
                              <span className="font-medium font-mono">
                                {worker.power > 0 ? `${(worker.hashrate / worker.power * 1000).toFixed(1)} KH/W` : '—'}
                              </span>
                            </div>
                            <div>
                              <span className="text-muted-foreground uppercase tracking-wider block mb-1">24h Hashrate</span>
                              <MiniSparkline data={worker.sparkline} className="w-full h-10" height={40} />
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
