import { Channels } from './models/channel';

// In-memory database for channels and their messages
const channelStore: Channels = new Map([
  [
    'MarketInsights',
    {
      id: 'MarketInsights',
      description: 'Discussions on global market trends and insights',
      messages: [],
    },
  ],
  [
    'AIResearch',
    {
      id: 'AIResearch',
      description: 'Sharing AI and machine learning advancements',
      messages: [],
    },
  ],
  [
    'FinTechInnovations',
    {
      id: 'FinTechInnovations',
      description: 'Latest developments in financial technology',
      messages: [],
    },
  ],
  [
    'ClientSuccessStories',
    {
      id: 'ClientSuccessStories',
      description: 'Stories and testimonials from clients',
      messages: [],
    },
  ],
  [
    'ProductFeedback',
    {
      id: 'ProductFeedback',
      description: 'Feedback on AlphaSense products and features',
      messages: [],
    },
  ],
  [
    'IndustryNews',
    {
      id: 'IndustryNews',
      description: 'Current news relevant to finance and investment',
      messages: [],
    },
  ],
  [
    'AlphaSenseCulture',
    {
      id: 'AlphaSenseCulture',
      description: 'Company culture, events, and employee engagement',
      messages: [],
    },
  ],
  [
    'RegulatoryUpdates',
    {
      id: 'RegulatoryUpdates',
      description: 'Discussions on financial regulations and compliance',
      messages: [],
    },
  ],
  [
    'TechTalks',
    {
      id: 'TechTalks',
      description: 'Place for tech teams to share and discuss technology',
      messages: [],
    },
  ],
  [
    'DataAnalytics',
    {
      id: 'DataAnalytics',
      description: 'Data analysis techniques and best practices in finance',
      messages: [],
    },
  ],
]);

export default channelStore;
