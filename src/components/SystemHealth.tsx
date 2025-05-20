
import React from 'react';
import { Check, AlertTriangle, XCircle } from 'lucide-react';
import { systemHealth } from '@/lib/mockData';
import { Progress } from '@/components/ui/progress';

const SystemHealthItem = ({ name, status }: { name: string; status: string }) => {
  const getStatusInfo = () => {
    switch (status.toLowerCase()) {
      case 'operational':
        return {
          icon: <Check className="h-4 w-4 text-cyber-success" />,
          color: 'bg-cyber-success',
          textColor: 'text-cyber-success',
          percent: 100,
        };
      case 'warning':
        return {
          icon: <AlertTriangle className="h-4 w-4 text-cyber-warning" />,
          color: 'bg-cyber-warning',
          textColor: 'text-cyber-warning',
          percent: 70,
        };
      case 'critical':
        return {
          icon: <XCircle className="h-4 w-4 text-cyber-critical" />,
          color: 'bg-cyber-critical',
          textColor: 'text-cyber-critical',
          percent: 25,
        };
      default:
        return {
          icon: <Check className="h-4 w-4 text-muted" />,
          color: 'bg-muted',
          textColor: 'text-muted',
          percent: 50,
        };
    }
  };

  const { icon, color, textColor, percent } = getStatusInfo();

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm">{name}</span>
        <div className="flex items-center space-x-2">
          <span className={`text-xs ${textColor}`}>{status}</span>
          {icon}
        </div>
      </div>
      <Progress value={percent} className="h-1.5" indicatorClassName={color} />
    </div>
  );
};

const SystemHealth = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">System Health</h2>
        <span className="text-xs text-muted-foreground">Real-time</span>
      </div>
      
      <div className="border border-muted/20 rounded-md p-4 bg-card/50 backdrop-blur-sm">
        <SystemHealthItem name="Firewall" status={systemHealth.firewallStatus} />
        <SystemHealthItem name="Identity Provider" status={systemHealth.idpStatus} />
        <SystemHealthItem name="Endpoint Protection" status={systemHealth.endpointProtection} />
        <SystemHealthItem name="Data Encryption" status={systemHealth.dataEncryption} />
        <SystemHealthItem name="Network Monitoring" status={systemHealth.networkMonitoring} />
        <SystemHealthItem name="Security Updates" status={systemHealth.securityUpdates} />
      </div>
    </div>
  );
};

export default SystemHealth;
