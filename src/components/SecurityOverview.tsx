
import { Shield, ShieldAlert, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import StatCard from './StatCard';
import { securityMetrics } from '@/lib/mockData';

const SecurityOverview = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Security Overview</h2>
        <span className="text-xs text-muted-foreground">Last updated: Just now</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          title="Total Alerts"
          value={securityMetrics.totalAlerts}
          icon={<ShieldAlert className="h-4 w-4" />}
          description="Last 24 hours"
        />
        <StatCard
          title="Critical Alerts"
          value={securityMetrics.criticalAlerts}
          icon={<AlertTriangle className="h-4 w-4" />}
          valueClassName="text-cyber-critical"
          description="Requiring immediate attention"
        />
        <StatCard
          title="Resolved Issues"
          value={securityMetrics.resolvedAlerts}
          icon={<CheckCircle className="h-4 w-4" />}
          description="Last 24 hours"
        />
        <StatCard
          title="Mean Time to Detect"
          value={securityMetrics.meanTimeToDetect}
          icon={<Clock className="h-4 w-4" />}
          description="Average detection time"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Mean Time to Resolve"
          value={securityMetrics.meanTimeToResolve}
          icon={<Clock className="h-4 w-4" />}
          description="Average resolution time"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Security Score"
          value={`${securityMetrics.securityScore}/100`}
          icon={<Shield className="h-4 w-4" />}
          description="Overall security posture"
          trend={{ value: 5, isPositive: true }}
        />
      </div>
    </div>
  );
};

export default SecurityOverview;
