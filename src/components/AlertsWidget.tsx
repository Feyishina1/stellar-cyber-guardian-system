
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { alerts } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

const AlertSeverityBadge = ({ severity }: { severity: string }) => {
  const getSeverityStyles = () => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'bg-cyber-critical text-white';
      case 'high':
        return 'bg-cyber-warning text-black';
      case 'medium':
        return 'bg-amber-500 text-black';
      case 'low':
        return 'bg-cyber-info text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Badge className={`${getSeverityStyles()} rounded-sm uppercase text-[10px]`}>
      {severity}
    </Badge>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = () => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-cyber-critical/20 text-cyber-critical border-cyber-critical';
      case 'investigating':
        return 'bg-cyber-warning/20 text-cyber-warning border-cyber-warning';
      case 'resolved':
        return 'bg-cyber-success/20 text-cyber-success border-cyber-success';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted';
    }
  };

  return (
    <Badge variant="outline" className={`${getStatusStyles()} rounded-sm text-[10px] capitalize`}>
      {status}
    </Badge>
  );
};

const AlertsWidget = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Security Alerts</h2>
        <Button variant="outline" size="sm" className="text-xs border-muted/30 hover:bg-muted/20">
          View All
        </Button>
      </div>
      
      <ScrollArea className="h-[320px] rounded-md border border-muted/20 bg-card/50 backdrop-blur-sm">
        <div className="p-4 space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="p-3 rounded-md border border-muted/20 bg-background/50 hover:bg-muted/10 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <AlertSeverityBadge severity={alert.severity} />
                <StatusBadge status={alert.status} />
              </div>
              <h3 className="font-medium mb-1">{alert.title}</h3>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{alert.source}</span>
                <span>{new Date(alert.timestamp).toLocaleTimeString()}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default AlertsWidget;
