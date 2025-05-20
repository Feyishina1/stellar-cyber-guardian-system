
import React from 'react';
import { Bell, Settings, Shield, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-4 px-1">
      <div className="flex items-center space-x-3">
        <div className="bg-cyber-primary/20 p-2 rounded-lg">
          <ShieldAlert className="h-8 w-8 text-cyber-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-glow">CyberGuard SOC</h1>
          <p className="text-sm text-muted-foreground">Security Operations Center</p>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-x-2">
        <Button variant="outline" size="icon" className="border-muted/30 bg-background/50 hover:bg-accent/20 hover:text-accent">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="border-muted/30 bg-background/50 hover:bg-accent/20 hover:text-accent">
          <Settings className="h-5 w-5" />
        </Button>
        <div className="w-px h-6 bg-muted/30"></div>
        <div className="flex items-center gap-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyber-primary to-cyber-accent flex items-center justify-center text-white font-medium">
            SA
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
