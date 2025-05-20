
export const securityMetrics = {
  totalAlerts: 42,
  criticalAlerts: 8,
  resolvedAlerts: 27,
  meanTimeToDetect: '1.8h',
  meanTimeToResolve: '4.2h',
  securityScore: 78,
};

export const systemHealth = {
  firewallStatus: 'Operational',
  idpStatus: 'Operational',
  endpointProtection: 'Warning',
  dataEncryption: 'Operational',
  networkMonitoring: 'Operational',
  securityUpdates: 'Critical',
};

export const alerts = [
  {
    id: 'alert-001',
    severity: 'critical',
    title: 'Multiple Failed Login Attempts',
    source: 'Authentication Service',
    timestamp: '2023-05-20T14:32:00',
    status: 'active',
  },
  {
    id: 'alert-002',
    severity: 'high',
    title: 'Suspicious File Download',
    source: 'Endpoint Protection',
    timestamp: '2023-05-20T13:45:00',
    status: 'investigating',
  },
  {
    id: 'alert-003',
    severity: 'medium',
    title: 'Unusual Network Traffic',
    source: 'Network Monitor',
    timestamp: '2023-05-20T11:17:00',
    status: 'investigating',
  },
  {
    id: 'alert-004',
    severity: 'critical',
    title: 'Potential Data Exfiltration',
    source: 'DLP System',
    timestamp: '2023-05-20T10:05:00',
    status: 'active',
  },
  {
    id: 'alert-005',
    severity: 'low',
    title: 'Outdated System Software',
    source: 'Vulnerability Scanner',
    timestamp: '2023-05-20T09:22:00',
    status: 'resolved',
  },
];

export const networkData = [
  { time: '00:00', traffic: 42, malicious: 0 },
  { time: '01:00', traffic: 38, malicious: 0 },
  { time: '02:00', traffic: 31, malicious: 0 },
  { time: '03:00', traffic: 28, malicious: 1 },
  { time: '04:00', traffic: 35, malicious: 0 },
  { time: '05:00', traffic: 47, malicious: 0 },
  { time: '06:00', traffic: 65, malicious: 2 },
  { time: '07:00', traffic: 98, malicious: 3 },
  { time: '08:00', traffic: 127, malicious: 2 },
  { time: '09:00', traffic: 145, malicious: 0 },
  { time: '10:00', traffic: 159, malicious: 4 },
  { time: '11:00', traffic: 168, malicious: 7 },
  { time: '12:00', traffic: 143, malicious: 5 },
];

export const threatIntelligence = [
  {
    id: 'threat-001',
    title: 'New Ransomware Variant Detected',
    type: 'Ransomware',
    severity: 'high',
    description: 'A new variant of BlackCat ransomware has been observed in the wild with enhanced encryption capabilities.',
    published: '2023-05-19T12:30:00',
  },
  {
    id: 'threat-002',
    title: 'Critical Vulnerability in OpenSSL',
    type: 'Vulnerability',
    severity: 'critical',
    description: 'A heap-based buffer overflow in OpenSSL may allow remote code execution (CVE-2023-XXXX).',
    published: '2023-05-18T09:15:00',
  },
  {
    id: 'threat-003',
    title: 'Phishing Campaign Targeting Financial Sector',
    type: 'Phishing',
    severity: 'medium',
    description: 'A sophisticated phishing campaign impersonating major banks has been observed with improved evasion techniques.',
    published: '2023-05-17T16:45:00',
  },
];

export const userActivity = [
  { hour: 0, logins: 5, failedAttempts: 1 },
  { hour: 1, logins: 3, failedAttempts: 0 },
  { hour: 2, logins: 2, failedAttempts: 0 },
  { hour: 3, logins: 1, failedAttempts: 0 },
  { hour: 4, logins: 2, failedAttempts: 0 },
  { hour: 5, logins: 7, failedAttempts: 1 },
  { hour: 6, logins: 15, failedAttempts: 2 },
  { hour: 7, logins: 32, failedAttempts: 5 },
  { hour: 8, logins: 68, failedAttempts: 8 },
  { hour: 9, logins: 74, failedAttempts: 3 },
  { hour: 10, logins: 52, failedAttempts: 2 },
  { hour: 11, logins: 43, failedAttempts: 0 },
];
