
import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import SecurityOverview from '@/components/SecurityOverview';
import AlertsWidget from '@/components/AlertsWidget';
import NetworkTraffic from '@/components/NetworkTraffic';
import SystemHealth from '@/components/SystemHealth';
import ThreatFeed from '@/components/ThreatFeed';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-background cyber-grid">
      {/* Decorative gradients */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top right gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyber-primary opacity-10 rounded-full blur-[150px]" />
        {/* Bottom left gradient */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyber-accent opacity-10 rounded-full blur-[150px]" />
      </div>
      
      {/* Main content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        <DashboardHeader />
        
        {/* Grid Layout for Dashboard Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Security Overview */}
          <div className="lg:col-span-3">
            <SecurityOverview />
          </div>
          
          {/* Network Traffic */}
          <div className="lg:col-span-2">
            <NetworkTraffic />
          </div>
          
          {/* System Health */}
          <div className="lg:col-span-1">
            <SystemHealth />
          </div>
          
          {/* Security Alerts */}
          <div className="lg:col-span-1">
            <AlertsWidget />
          </div>
          
          {/* Threat Intelligence */}
          <div className="lg:col-span-2">
            <ThreatFeed />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-muted/20 py-6 mt-12 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="CyberGuard" className="h-6 w-6" />
            <p className="text-sm text-muted-foreground">CyberGuard Security Operations Center</p>
          </div>
          <p className="text-sm text-muted-foreground">© 2023 CyberGuard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
