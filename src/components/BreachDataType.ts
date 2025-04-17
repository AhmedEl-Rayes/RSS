
export type IndustryType = 
  | 'Healthcare' 
  | 'Finance' 
  | 'Retail' 
  | 'Technology' 
  | 'Manufacturing' 
  | 'Government' 
  | 'Education'
  | 'Energy';

export type CompanySizeType = 'Small' | 'Medium' | 'Large' | 'Enterprise';

export type BreachExample = {
  company: string;
  year: number;
  industry: IndustryType;
  size: CompanySizeType;
  impact: string;
  cost: number; // in millions
  recordsLost?: number;
  link: string;
};

export const breachExamples: BreachExample[] = [
  {
    company: "Anthem",
    year: 2015,
    industry: "Healthcare",
    size: "Enterprise",
    impact: "78.8 million patient records exposed",
    cost: 115,
    recordsLost: 78800000,
    link: "https://www.healthcareitnews.com/news/anthem-hit-record-data-breach-settlement-following-2015-attack"
  },
  {
    company: "Equifax",
    year: 2017,
    industry: "Finance",
    size: "Large",
    impact: "147 million customers affected",
    cost: 700,
    recordsLost: 147000000,
    link: "https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement"
  },
  {
    company: "Target",
    year: 2013,
    industry: "Retail",
    size: "Enterprise",
    impact: "40 million credit cards compromised",
    cost: 162,
    recordsLost: 40000000,
    link: "https://www.businessinsider.com/target-data-breach-cost-2017-5"
  },
  {
    company: "Capital One",
    year: 2019,
    industry: "Finance",
    size: "Large",
    impact: "106 million records exposed",
    cost: 190,
    recordsLost: 106000000,
    link: "https://www.forbes.com/sites/bishopjordan/2019/07/30/capital-one-data-breach-hack/"
  },
  {
    company: "Marriott International",
    year: 2018,
    industry: "Retail",
    size: "Enterprise",
    impact: "500 million guest records exposed",
    cost: 72,
    recordsLost: 500000000,
    link: "https://www.csoonline.com/article/3441220/marriott-data-breach-faq-how-did-it-happen-and-what-was-the-impact.html"
  },
  {
    company: "Yahoo",
    year: 2016,
    industry: "Technology",
    size: "Enterprise",
    impact: "3 billion user accounts compromised",
    cost: 350,
    recordsLost: 3000000000,
    link: "https://www.wired.com/story/yahoo-breach-three-billion-accounts/"
  },
  {
    company: "Adobe",
    year: 2013,
    industry: "Technology",
    size: "Large",
    impact: "38 million user records exposed",
    cost: 1.2,
    recordsLost: 38000000,
    link: "https://krebsonsecurity.com/2013/10/adobe-breach-impacted-at-least-38-million-users/"
  },
  {
    company: "Sony PlayStation Network",
    year: 2011,
    industry: "Technology",
    size: "Large",
    impact: "77 million accounts compromised",
    cost: 171,
    recordsLost: 77000000,
    link: "https://www.theguardian.com/technology/2011/apr/26/playstation-network-hackers-data"
  },
  {
    company: "Home Depot",
    year: 2014,
    industry: "Retail",
    size: "Enterprise",
    impact: "56 million credit card details stolen",
    cost: 179,
    recordsLost: 56000000,
    link: "https://www.businessinsider.com/home-depot-data-breach-settlement-2020-11"
  },
  {
    company: "T-Mobile",
    year: 2021,
    industry: "Technology",
    size: "Enterprise",
    impact: "100 million customers affected",
    cost: 350,
    recordsLost: 100000000,
    link: "https://www.cnbc.com/2021/08/26/t-mobile-hack-impacted-54-million-people.html"
  },
  {
    company: "Heartland Payment Systems",
    year: 2009,
    industry: "Finance",
    size: "Medium",
    impact: "134 million credit cards exposed",
    cost: 140,
    recordsLost: 134000000,
    link: "https://www.csoonline.com/article/2130877/the-15-biggest-data-breaches-of-the-21st-century.html"
  },
  {
    company: "Magellan Health",
    year: 2020,
    industry: "Healthcare",
    size: "Medium",
    impact: "365,000 patient records compromised",
    cost: 8.5,
    recordsLost: 365000,
    link: "https://www.hipaajournal.com/magellan-health-ransomware-attack-and-data-breach-affects-365000-patients/"
  },
  {
    company: "Colonial Pipeline",
    year: 2021,
    industry: "Energy",
    size: "Large",
    impact: "Operational shutdown and data theft",
    cost: 4.4,
    link: "https://www.nytimes.com/2021/05/13/us/politics/biden-colonial-pipeline-ransomware.html"
  },
  {
    company: "SolarWinds",
    year: 2020,
    industry: "Technology",
    size: "Medium",
    impact: "18,000 customers affected",
    cost: 90,
    recordsLost: 18000,
    link: "https://www.csoonline.com/article/3601508/solarwinds-supply-chain-attack-explained-why-organizations-were-not-prepared.html"
  },
  {
    company: "Blackbaud",
    year: 2020,
    industry: "Technology",
    size: "Medium",
    impact: "Thousands of nonprofits, healthcare organizations, and educational institutions affected",
    cost: 3.6,
    link: "https://www.darkreading.com/attacks-breaches/blackbaud-data-breach-impacted-6-million-people"
  },
  {
    company: "University of California",
    year: 2021,
    industry: "Education",
    size: "Large",
    impact: "Personal data of students and staff exposed",
    cost: 2.8,
    link: "https://www.insidehighered.com/news/2021/04/05/university-california-victim-nationwide-hack-attack"
  },
  {
    company: "Kronos",
    year: 2021,
    industry: "Technology",
    size: "Medium",
    impact: "Payroll systems down for weeks",
    cost: 15,
    link: "https://www.shrm.org/resourcesandtools/hr-topics/technology/pages/kronos-ransomware-attack-leads-to-lawsuit.aspx"
  },
  {
    company: "City of Atlanta",
    year: 2018,
    industry: "Government",
    size: "Medium",
    impact: "City services disrupted for months",
    cost: 17,
    link: "https://www.wired.com/story/atlanta-spent-26m-recover-from-ransomware-scare/"
  },
  {
    company: "Cencora (formerly AmerisourceBergen)",
    year: 2023,
    industry: "Healthcare",
    size: "Enterprise",
    impact: "Supply chain disruption for pharmaceutical distribution",
    cost: 1000,
    link: "https://www.fiercehealthcare.com/finance/amerisourcebergen-tallies-1b-hit-2023-profits-due-cyber-attack"
  },
  {
    company: "Medibank",
    year: 2022,
    industry: "Healthcare",
    size: "Medium",
    impact: "9.7 million customers affected",
    cost: 35,
    recordsLost: 9700000,
    link: "https://www.zdnet.com/article/medibank-data-breach-exposes-personal-information-of-all-customers/"
  }
];
