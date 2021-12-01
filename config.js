// Configuration
window.Config = {

  // Site Name
  SiteName: 'Uptime Status',

  // Site URL
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // Enter domain name part. default isuptimerobot.com's domain
  // Uptimerobot's api sometimes will report CROS error, you can fill in you own reverse proxy domain name
  // more details are from https://github.com/yb/uptime-status/ 
  ApiDomain: 'api.uptimerobot.com',
  
  // UptimeRobot Api Keys
  // Support both Monitor-Specific and  Read-Only type's Api Key
  ApiKeys: [
    'm789912221-5aedbf82715aeea4a93939da',
    'm789912253-9fd8fb37fb05d92a83577340',
  ],

  // if shows monitored site's URL
  ShowLink: false,

  // Show how many days of log. 
  // API can have 90 days, although free plan says only for 60 days.
  // 60 is the free plan's number for log days. 
  CountDays: 90,

  // Navigation menu at top right. 
  Navi: [
    {
      text: 'Homepage',
      url: 'https://comingsoon.org/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/51sec/uptime-status'
    }
  ]
};
