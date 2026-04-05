// Mock data generators for the crypto mining platform

export interface Worker {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'idle';
  hashrate: number; // MH/s
  temperature: number; // °C
  fanSpeed: number; // %
  power: number; // W
  uptime: string;
  lastSeen: string;
  algorithm: string;
  sparkline: number[];
}

export interface HashratePoint {
  time: string;
  hashrate: number;
  average: number;
}

export interface EarningsPoint {
  date: string;
  amount: number;
  usdValue: number;
}

export interface Payout {
  id: string;
  txHash: string;
  amount: number;
  usdValue: number;
  date: string;
  status: 'confirmed' | 'pending' | 'processing';
  coin: string;
}

export interface BlockFound {
  id: string;
  blockNumber: number;
  reward: number;
  time: string;
  finder: string;
  confirmations: number;
}

export interface PoolStats {
  poolHashrate: string;
  connectedMiners: number;
  blocksFound24h: number;
  luck: number;
  fee: number;
  minPayout: number;
  payoutScheme: string;
}

export interface NetworkInfo {
  difficulty: string;
  blockHeight: number;
  blockTime: string;
  networkHashrate: string;
  coin: string;
  price: number;
  priceChange24h: number;
}

// Seed-based pseudo-random for consistent data
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const rand = seededRandom(42);

function generateSparkline(points: number, base: number, variance: number): number[] {
  const data: number[] = [];
  let current = base;
  for (let i = 0; i < points; i++) {
    current = base + (rand() - 0.5) * variance * 2;
    data.push(Math.max(0, Math.round(current * 100) / 100));
  }
  return data;
}

// Workers
export const workers: Worker[] = [
  {
    id: 'rig-001',
    name: 'RIG-ALPHA-01',
    status: 'online',
    hashrate: 125.4,
    temperature: 62,
    fanSpeed: 72,
    power: 245,
    uptime: '14d 7h 32m',
    lastSeen: '2 seconds ago',
    algorithm: 'Ethash',
    sparkline: generateSparkline(24, 125, 8),
  },
  {
    id: 'rig-002',
    name: 'RIG-ALPHA-02',
    status: 'online',
    hashrate: 118.7,
    temperature: 58,
    fanSpeed: 68,
    power: 232,
    uptime: '14d 7h 32m',
    lastSeen: '5 seconds ago',
    algorithm: 'Ethash',
    sparkline: generateSparkline(24, 118, 10),
  },
  {
    id: 'rig-003',
    name: 'RIG-BETA-01',
    status: 'online',
    hashrate: 98.2,
    temperature: 65,
    fanSpeed: 78,
    power: 198,
    uptime: '7d 18h 15m',
    lastSeen: '1 second ago',
    algorithm: 'Ethash',
    sparkline: generateSparkline(24, 98, 6),
  },
  {
    id: 'rig-004',
    name: 'RIG-BETA-02',
    status: 'online',
    hashrate: 105.1,
    temperature: 60,
    fanSpeed: 70,
    power: 210,
    uptime: '7d 18h 15m',
    lastSeen: '3 seconds ago',
    algorithm: 'Ethash',
    sparkline: generateSparkline(24, 105, 7),
  },
  {
    id: 'rig-005',
    name: 'RIG-GAMMA-01',
    status: 'idle',
    hashrate: 0,
    temperature: 34,
    fanSpeed: 25,
    power: 15,
    uptime: '0d 0h 0m',
    lastSeen: '2 hours ago',
    algorithm: 'Ethash',
    sparkline: generateSparkline(24, 2, 2),
  },
  {
    id: 'rig-006',
    name: 'RIG-GAMMA-02',
    status: 'online',
    hashrate: 132.8,
    temperature: 67,
    fanSpeed: 82,
    power: 268,
    uptime: '21d 3h 44m',
    lastSeen: '1 second ago',
    algorithm: 'Ethash',
    sparkline: generateSparkline(24, 132, 9),
  },
  {
    id: 'rig-007',
    name: 'RIG-DELTA-01',
    status: 'offline',
    hashrate: 0,
    temperature: 0,
    fanSpeed: 0,
    power: 0,
    uptime: '0d 0h 0m',
    lastSeen: '3 days ago',
    algorithm: 'Ethash',
    sparkline: generateSparkline(24, 0, 0),
  },
  {
    id: 'rig-008',
    name: 'RIG-DELTA-02',
    status: 'online',
    hashrate: 112.3,
    temperature: 59,
    fanSpeed: 71,
    power: 225,
    uptime: '12d 11h 8m',
    lastSeen: '4 seconds ago',
    algorithm: 'Ethash',
    sparkline: generateSparkline(24, 112, 8),
  },
];

// Hashrate history (30 days)
export function getHashrateHistory(): HashratePoint[] {
  const data: HashratePoint[] = [];
  const now = new Date();
  const baseHashrate = 692;

  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dayLabel = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const hashrate = baseHashrate + (rand() - 0.4) * 80;
    data.push({
      time: dayLabel,
      hashrate: Math.round(hashrate * 10) / 10,
      average: baseHashrate,
    });
  }
  return data;
}

// Earnings history (30 days)
export function getEarningsHistory(): EarningsPoint[] {
  const data: EarningsPoint[] = [];
  const now = new Date();
  const ethPrice = 3247.82;

  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dayLabel = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const amount = 0.0045 + (rand() - 0.3) * 0.003;
    data.push({
      date: dayLabel,
      amount: Math.round(amount * 10000) / 10000,
      usdValue: Math.round(amount * ethPrice * 100) / 100,
    });
  }
  return data;
}

// Payout history
export const payouts: Payout[] = [
  {
    id: 'pay-001',
    txHash: '0x8a7d3b...f4e21c',
    amount: 0.1524,
    usdValue: 494.87,
    date: '2026-04-04',
    status: 'confirmed',
    coin: 'ETH',
  },
  {
    id: 'pay-002',
    txHash: '0x2f91ab...c83d7e',
    amount: 0.1487,
    usdValue: 482.84,
    date: '2026-03-28',
    status: 'confirmed',
    coin: 'ETH',
  },
  {
    id: 'pay-003',
    txHash: '0xd4e7f2...91a5b3',
    amount: 0.1601,
    usdValue: 519.88,
    date: '2026-03-21',
    status: 'confirmed',
    coin: 'ETH',
  },
  {
    id: 'pay-004',
    txHash: '0x7c3a8d...e2f904',
    amount: 0.1392,
    usdValue: 452.00,
    date: '2026-03-14',
    status: 'confirmed',
    coin: 'ETH',
  },
  {
    id: 'pay-005',
    txHash: '0xb1d9e6...4a7c28',
    amount: 0.1455,
    usdValue: 472.48,
    date: '2026-03-07',
    status: 'confirmed',
    coin: 'ETH',
  },
  {
    id: 'pay-006',
    txHash: '0x93f2a1...d8b54e',
    amount: 0.0832,
    usdValue: 270.22,
    date: '2026-04-05',
    status: 'pending',
    coin: 'ETH',
  },
];

// Blocks found
export const blocksFound: BlockFound[] = [
  { id: 'blk-1', blockNumber: 19847231, reward: 2.0, time: '2 hours ago', finder: 'Pool', confirmations: 128 },
  { id: 'blk-2', blockNumber: 19847089, reward: 2.0, time: '6 hours ago', finder: 'Pool', confirmations: 342 },
  { id: 'blk-3', blockNumber: 19846712, reward: 2.0, time: '14 hours ago', finder: 'Pool', confirmations: 891 },
  { id: 'blk-4', blockNumber: 19846401, reward: 2.0, time: '1 day ago', finder: 'Pool', confirmations: 1204 },
  { id: 'blk-5', blockNumber: 19845998, reward: 2.0, time: '1 day ago', finder: 'Pool', confirmations: 1587 },
  { id: 'blk-6', blockNumber: 19845623, reward: 2.0, time: '2 days ago', finder: 'Pool', confirmations: 2103 },
];

// Pool stats
export const poolStats: PoolStats = {
  poolHashrate: '14.8 TH/s',
  connectedMiners: 2847,
  blocksFound24h: 3,
  luck: 94.7,
  fee: 1.0,
  minPayout: 0.05,
  payoutScheme: 'PPLNS',
};

// Network info
export const networkInfo: NetworkInfo = {
  difficulty: '18.42 P',
  blockHeight: 19847231,
  blockTime: '12.1s',
  networkHashrate: '1.02 EH/s',
  coin: 'ETH',
  price: 3247.82,
  priceChange24h: 2.34,
};

// Computed dashboard stats
export function getDashboardStats() {
  const onlineWorkers = workers.filter(w => w.status === 'online');
  const totalHashrate = onlineWorkers.reduce((sum, w) => sum + w.hashrate, 0);
  const dailyEarnings = 0.0048;
  const ethPrice = networkInfo.price;

  return {
    totalHashrate: `${totalHashrate.toFixed(1)} MH/s`,
    activeWorkers: `${onlineWorkers.length}/${workers.length}`,
    dailyEarnings: `${dailyEarnings.toFixed(4)} ETH`,
    dailyEarningsUsd: `$${(dailyEarnings * ethPrice).toFixed(2)}`,
    monthlyEstimate: `${(dailyEarnings * 30).toFixed(4)} ETH`,
    monthlyEstimateUsd: `$${(dailyEarnings * 30 * ethPrice).toFixed(2)}`,
    unpaidBalance: '0.0832 ETH',
    unpaidBalanceUsd: `$${(0.0832 * ethPrice).toFixed(2)}`,
    totalEarned: '1.8724 ETH',
    totalEarnedUsd: `$${(1.8724 * ethPrice).toFixed(2)}`,
    avgTemperature: `${Math.round(onlineWorkers.reduce((s, w) => s + w.temperature, 0) / onlineWorkers.length)}°C`,
    totalPower: `${onlineWorkers.reduce((s, w) => s + w.power, 0)} W`,
  };
}

// Difficulty history
export function getDifficultyHistory(): { time: string; difficulty: number }[] {
  const data: { time: string; difficulty: number }[] = [];
  const now = new Date();
  const baseDiff = 18.42;

  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dayLabel = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    data.push({
      time: dayLabel,
      difficulty: Math.round((baseDiff + (rand() - 0.5) * 2) * 100) / 100,
    });
  }
  return data;
}

// Recent activity for dashboard
export interface Activity {
  id: string;
  type: 'payout' | 'worker_online' | 'worker_offline' | 'block_found';
  message: string;
  time: string;
  icon: string;
}

export const recentActivity: Activity[] = [
  { id: 'act-1', type: 'payout', message: 'Payout of 0.0832 ETH processing', time: '15 min ago', icon: '💰' },
  { id: 'act-2', type: 'block_found', message: 'Pool found block #19847231', time: '2 hours ago', icon: '⛏️' },
  { id: 'act-3', type: 'worker_offline', message: 'RIG-DELTA-01 went offline', time: '3 days ago', icon: '🔴' },
  { id: 'act-4', type: 'worker_online', message: 'RIG-GAMMA-02 came online', time: '3 days ago', icon: '🟢' },
  { id: 'act-5', type: 'payout', message: 'Payout of 0.1524 ETH confirmed', time: '1 day ago', icon: '✅' },
  { id: 'act-6', type: 'block_found', message: 'Pool found block #19847089', time: '6 hours ago', icon: '⛏️' },
];
