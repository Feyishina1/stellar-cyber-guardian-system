
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { networkData } from '@/lib/mockData';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-cyber-background border border-muted/20 p-2 rounded shadow text-xs">
        <p className="label">{`Time: ${label}`}</p>
        <p className="text-cyber-info">{`Total Traffic: ${payload[0].value}`}</p>
        <p className="text-cyber-critical">{`Malicious: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const NetworkTraffic = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Network Traffic</h2>
        <span className="text-xs text-muted-foreground">Last 12 hours</span>
      </div>
      
      <div className="h-[320px] border border-muted/20 rounded-md p-4 bg-card/50 backdrop-blur-sm">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={networkData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 20,
            }}
          >
            <defs>
              <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorMalicious" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="time" 
              tick={{ fill: '#94a3b8', fontSize: 10 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            />
            <YAxis 
              tick={{ fill: '#94a3b8', fontSize: 10 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top"
              height={36}
              wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }}
            />
            <Area 
              type="monotone" 
              dataKey="traffic" 
              name="Total Traffic" 
              stroke="#4f46e5" 
              fillOpacity={1} 
              fill="url(#colorTraffic)" 
            />
            <Area 
              type="monotone" 
              dataKey="malicious" 
              name="Malicious Traffic" 
              stroke="#ef4444" 
              fillOpacity={1} 
              fill="url(#colorMalicious)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NetworkTraffic;
