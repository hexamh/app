import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Cpu,
  Coins,
  Network,
  Settings,
  Pickaxe,
  ChevronLeft,
  ChevronRight,
  Wallet,
  Bell,
  Menu,
  X,
  Clock,
  Hash,
} from 'lucide-react';
import { useState, useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard, description: 'Overview & stats' },
  { path: '/workers', label: 'Workers', icon: Cpu, description: 'Manage rigs' },
  { path: '/earnings', label: 'Earnings', icon: Coins, description: 'Revenue tracking' },
  { path: '/pool', label: 'Pool', icon: Network, description: 'Pool statistics' },
  { path: '/settings', label: 'Settings', icon: Settings, description: 'Configuration' },
];

function SidebarLink({
  item,
  isActive,
  collapsed,
  onClick,
}: {
  item: (typeof navItems)[0];
  isActive: boolean;
  collapsed: boolean;
  onClick?: () => void;
}) {
  const Icon = item.icon;

  const link = (
    <Link
      to={item.path}
      onClick={onClick}
      className={cn(
        'relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 group',
        isActive
          ? 'bg-primary/10 text-primary shadow-sm'
          : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
        collapsed && 'justify-center px-2'
      )}
    >
      {isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-gradient-to-b from-cyan-glow to-emerald-glow" />
      )}
      <Icon className={cn(
        'h-[18px] w-[18px] shrink-0 transition-transform duration-200',
        isActive && 'text-primary',
        !collapsed && 'group-hover:scale-110'
      )} />
      {!collapsed && (
        <div className="min-w-0 overflow-hidden">
          <span className="block truncate">{item.label}</span>
          {isActive && (
            <span className="block text-[10px] text-muted-foreground truncate">
              {item.description}
            </span>
          )}
        </div>
      )}
    </Link>
  );

  if (collapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{link}</TooltipTrigger>
        <TooltipContent side="right" sideOffset={8}>
          <div>
            <p className="font-medium">{item.label}</p>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    );
  }

  return link;
}

function LiveClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <Clock className="h-3 w-3" />
      <span className="font-mono tabular-nums">
        {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </span>
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const activeItem = navItems.find(
    (item) =>
      item.path === '/'
        ? location.pathname === '/'
        : location.pathname.startsWith(item.path)
  );

  const sidebarContent = (
    <>
      {/* Gradient top accent */}
      <div className="gradient-bar h-[2px] w-full shrink-0" />

      {/* Logo */}
      <div
        className={cn(
          'flex items-center gap-2.5 border-b border-border px-4 py-4',
          collapsed && !mobileOpen && 'justify-center px-2'
        )}
      >
        <div className="h-9 w-9 shrink-0 rounded-xl bg-gradient-to-br from-cyan-glow to-emerald-glow flex items-center justify-center shadow-lg shadow-cyan-glow/20">
          <Pickaxe className="h-4.5 w-4.5 text-background" />
        </div>
        {(!collapsed || mobileOpen) && (
          <div className="min-w-0">
            <h1 className="text-base font-bold tracking-tight truncate bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              HexaMine
            </h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              Mining Platform
            </p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 p-2 overflow-y-auto">
        <p className={cn(
          'px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60',
          (collapsed && !mobileOpen) && 'text-center px-0'
        )}>
          {collapsed && !mobileOpen ? '—' : 'Navigation'}
        </p>
        {navItems.map((item) => (
          <SidebarLink
            key={item.path}
            item={item}
            isActive={
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path)
            }
            collapsed={collapsed && !mobileOpen}
            onClick={() => mobileOpen && setMobileOpen(false)}
          />
        ))}
      </nav>

      {/* Bottom section */}
      <div className="border-t border-border p-3 space-y-2">
        {(!collapsed || mobileOpen) && (
          <div className="rounded-lg bg-secondary/30 px-3 py-2">
            <div className="flex items-center gap-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-glow pulse-online" />
              <span className="text-emerald-glow font-medium">Mining Active</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-muted-foreground font-mono">
              <Hash className="h-2.5 w-2.5" />
              <span>692.5 MH/s</span>
            </div>
          </div>
        )}
        {!mobileOpen && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex w-full items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
    </>
  );

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex h-screen overflow-hidden">
        {/* Mobile overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Sidebar — desktop */}
        <aside
          className={cn(
            'relative hidden lg:flex flex-col border-r border-border bg-sidebar transition-all duration-300',
            collapsed ? 'w-[68px]' : 'w-[250px]'
          )}
        >
          {sidebarContent}
        </aside>

        {/* Sidebar — mobile drawer */}
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-50 flex flex-col w-[280px] border-r border-border bg-sidebar transition-transform duration-300 lg:hidden',
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors z-10"
          >
            <X className="h-4 w-4" />
          </button>
          {sidebarContent}
        </aside>

        {/* Main content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Top header */}
          <header className="flex items-center justify-between border-b border-border bg-sidebar/50 backdrop-blur-sm px-4 sm:px-6 py-3">
            <div className="flex items-center gap-3">
              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>

              <div>
                <h2 className="text-lg font-semibold">
                  {activeItem?.label || 'Dashboard'}
                </h2>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  {activeItem?.description || 'Overview & stats'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Live clock */}
              <div className="hidden md:block">
                <LiveClock />
              </div>

              {/* Wallet badge */}
              <div className="hidden sm:flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-1.5 text-xs border border-border/50">
                <Wallet className="h-3.5 w-3.5 text-primary" />
                <span className="text-muted-foreground font-mono">0x8a7d...f4e2</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow pulse-online" />
              </div>

              {/* Notification bell */}
              <button className="relative rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-cyan-glow pulse-online" />
              </button>

              {/* Avatar */}
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-glow to-emerald-glow flex items-center justify-center text-xs font-bold text-background shadow-lg shadow-cyan-glow/20">
                HX
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 particles-bg">
            <div className="relative z-10 page-enter" key={location.pathname}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
