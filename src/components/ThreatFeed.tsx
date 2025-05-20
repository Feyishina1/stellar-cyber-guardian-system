
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { threatIntelligence } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

const ThreatSeverityBadge = ({ severity }: { severity: string }) => {
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
    <Badge className={`${getSeverityStyles()} rounded-sm text-[10px] uppercase`}>
      {severity}
    </Badge>
  );
};

const ThreatTypeBadge = ({ type }: { type: string }) => {
  const getTypeStyles = () => {
    switch (type.toLowerCase()) {
      case 'ransomware':
        return 'bg-purple-600/20 text-purple-400 border-purple-600';
      case 'vulnerability':
        return 'bg-cyber-info/20 text-cyber-info border-cyber-info';
      case 'phishing':
        return 'bg-amber-500/20 text-amber-500 border-amber-500';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted';
    }
  };

  return (
    <Badge variant="outline" className={`${getTypeStyles()} rounded-sm text-[10px]`}>
      {type}
    </Badge>
  );
};

const ThreatFeed = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Threat Intelligence</h2>
        <Button variant="outline" size="sm" className="text-xs border-muted/30 hover:bg-muted/20">
          View All
        </Button>
      </div>
      
      <ScrollArea className="h-[280px] border border-muted/20 rounded-md bg-card/50 backdrop-blur-sm">
        <div className="p-4 space-y-4">
          {threatIntelligence.map((threat) => (
            <div key={threat.id} className="p-3 rounded-md border border-muted/20 bg-background/50 hover:bg-muted/10 transition-colors">
              <div className="flex flex-wrap gap-2 mb-2">
                <ThreatSeverityBadge severity={threat.severity} />
                <ThreatTypeBadge type={threat.type} />
              </div>
              <h3 className="font-medium mb-1">{threat.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{threat.description}</p>
              <div className="text-xs text-muted-foreground">
                {new Date(threat.published).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ThreatFeed;
