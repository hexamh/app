import { useState } from 'react';
import {
  Wallet,
  Bell,
  Shield,
  Save,
  AlertTriangle,
  Copy,
  Check,
  Mail,
  Webhook,
  Lock,
  Eye,
  EyeOff,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export function Settings() {
  const [walletAddress, setWalletAddress] = useState(
    '0x8a7d3b4c5e6f1a2b9c0d8e7f6543210abcdef4e2'
  );
  const [showWallet, setShowWallet] = useState(false);
  const [coin, setCoin] = useState('ETH');
  const [payoutThreshold, setPayoutThreshold] = useState([0.1]);
  const [autoPayout, setAutoPayout] = useState(true);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [webhookNotifs, setWebhookNotifs] = useState(false);
  const [workerAlerts, setWorkerAlerts] = useState(true);
  const [payoutAlerts, setPayoutAlerts] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [emailAddress, setEmailAddress] = useState('miner@hexamine.io');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const maskedWallet = walletAddress
    ? `${walletAddress.slice(0, 6)}${'•'.repeat(30)}${walletAddress.slice(-4)}`
    : '';

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold">Settings</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Configure your mining preferences and account
        </p>
      </div>

      {/* Wallet configuration */}
      <div className="glass-card hover-glow rounded-xl p-6 transition-all duration-300">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-2 rounded-xl bg-primary/10">
            <Wallet className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="text-base font-semibold">Wallet Configuration</h3>
            <p className="text-xs text-muted-foreground">Manage your mining wallet and coin</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="wallet" className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
              Wallet Address
            </Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  id="wallet"
                  value={showWallet ? walletAddress : maskedWallet}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="font-mono text-xs pr-10"
                  placeholder="0x..."
                  readOnly={!showWallet}
                />
                <button
                  onClick={() => setShowWallet(!showWallet)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showWallet ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                </button>
              </div>
              <Button
                variant="secondary"
                size="icon"
                onClick={handleCopy}
                className="shrink-0"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-glow" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
              Mining Coin
            </Label>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'ETH', label: 'Ethereum', icon: '⟠' },
                { id: 'BTC', label: 'Bitcoin', icon: '₿' },
                { id: 'ETC', label: 'Eth Classic', icon: '⟐' },
                { id: 'RVN', label: 'Ravencoin', icon: '🐦' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCoin(c.id)}
                  className={cn(
                    'rounded-xl px-4 py-2.5 text-sm font-medium transition-all border flex items-center gap-2',
                    coin === c.id
                      ? 'bg-primary text-primary-foreground shadow-sm border-primary/30'
                      : 'bg-secondary/30 text-muted-foreground border-border/50 hover:bg-secondary hover:text-foreground'
                  )}
                >
                  <span>{c.icon}</span>
                  <span>{c.id}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payout settings */}
      <div className="glass-card hover-glow rounded-xl p-6 transition-all duration-300">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-2 rounded-xl bg-emerald-glow/10">
            <Shield className="h-4 w-4 text-emerald-glow" />
          </div>
          <div>
            <h3 className="text-base font-semibold">Payout Settings</h3>
            <p className="text-xs text-muted-foreground">Configure when and how you get paid</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                Minimum Payout Threshold
              </Label>
              <Badge variant="secondary" className="font-mono text-xs">
                {payoutThreshold[0].toFixed(2)} {coin}
              </Badge>
            </div>
            <Slider
              value={payoutThreshold}
              onValueChange={(v) => setPayoutThreshold(typeof v === 'number' ? [v] : [...v])}
              min={0.01}
              max={1}
              step={0.01}
              className="py-2"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
              <span>0.01 {coin}</span>
              <span>0.50 {coin}</span>
              <span>1.00 {coin}</span>
            </div>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Auto Payout</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Automatically send payouts when threshold is reached
              </p>
            </div>
            <Switch checked={autoPayout} onCheckedChange={setAutoPayout} />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="glass-card hover-glow rounded-xl p-6 transition-all duration-300">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-2 rounded-xl bg-amber-glow/10">
            <Bell className="h-4 w-4 text-amber-glow" />
          </div>
          <div>
            <h3 className="text-base font-semibold">Notifications</h3>
            <p className="text-xs text-muted-foreground">Choose how you want to be notified</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Email section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email Notifications</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Receive mining updates via email</p>
                </div>
              </div>
              <Switch checked={emailNotifs} onCheckedChange={setEmailNotifs} />
            </div>
            {emailNotifs && (
              <div className="pl-6">
                <Input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="your@email.com"
                  className="text-xs h-8"
                />
              </div>
            )}
          </div>

          <Separator />

          {/* Webhook section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Webhook className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Webhook Notifications</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Send events to your webhook endpoint</p>
                </div>
              </div>
              <Switch checked={webhookNotifs} onCheckedChange={setWebhookNotifs} />
            </div>
            {webhookNotifs && (
              <div className="pl-6">
                <Input
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  placeholder="https://your-webhook-url.com/events"
                  className="text-xs font-mono h-8"
                />
              </div>
            )}
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Worker Offline Alerts</p>
              <p className="text-xs text-muted-foreground mt-0.5">Get notified when a worker goes offline</p>
            </div>
            <Switch checked={workerAlerts} onCheckedChange={setWorkerAlerts} />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Payout Alerts</p>
              <p className="text-xs text-muted-foreground mt-0.5">Get notified on payout events</p>
            </div>
            <Switch checked={payoutAlerts} onCheckedChange={setPayoutAlerts} />
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="glass-card hover-glow rounded-xl p-6 transition-all duration-300">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-2 rounded-xl bg-purple-glow/10">
            <Lock className="h-4 w-4 text-purple-glow" />
          </div>
          <div>
            <h3 className="text-base font-semibold">Security</h3>
            <p className="text-xs text-muted-foreground">Protect your account and funds</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Two-Factor Authentication</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Add an extra layer of security to your account
            </p>
          </div>
          <div className="flex items-center gap-2">
            {twoFactor && (
              <Badge variant="secondary" className="bg-emerald-glow/15 text-emerald-glow border-emerald-glow/30 text-[10px]">
                Enabled
              </Badge>
            )}
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="flex items-center gap-3">
        <Button
          onClick={handleSave}
          className={cn(
            'bg-gradient-to-r from-cyan-glow to-emerald-glow text-background font-semibold transition-all shadow-lg shadow-cyan-glow/20',
            saved ? 'opacity-80' : 'hover:shadow-cyan-glow/30 hover:opacity-90'
          )}
        >
          {saved ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Saved!
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      {/* Danger zone */}
      <div className="rounded-xl border border-red-glow/30 p-6 bg-red-glow/5">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="h-4 w-4 text-red-glow" />
          <h3 className="text-base font-semibold text-red-glow">Danger Zone</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Disconnect Wallet</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Remove your wallet and stop mining
              </p>
            </div>
            <Button variant="destructive" size="sm">
              Disconnect
            </Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Reset Statistics</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Clear all mining data and history
              </p>
            </div>
            <Button variant="destructive" size="sm">
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
