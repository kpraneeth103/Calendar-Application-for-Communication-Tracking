// src/utils/mockData.js
export const companiesData = [
  {
    id: 1,
    name: "ENTNT",
    location: "Abu Dhabi",
    lastCommunications: [
      { method: "LinkedIn Post", date: "12/20/2024" },
      { method: "Email", date: "12/15/2024" },
    ],
    nextDue: { method: "LinkedIn Post", date: "12/20/2024" },
  },
  {
    id: 2,
    name: "GOOGLE",
    location: "California, US",
    lastCommunications: [
      { method: "Email", date: "12/25/2024" },
      { method: "Webinar", date: "12/20/2024" },
    ],
    nextDue: { method: "Email", date: "12/25/2024" },
  },
  {
    id: 3,
    name: "MICROSOFT",
    location: "Washington,US",
    lastCommunications: [
      { method: "LinkedIn Post", date: "12/26/2024" },
      { method: "Conference Call", date: "12/19/2024" },
    ],
    nextDue: { method: "LinkedIn Post", date: "12/20/2024" },
  },
  {
    id: 4,
    name: "AMAZON",
    location: "Seattle,US",
    lastCommunications: [
      { method: "Email", date: "12/28/2024" },
      { method: "NewsLetter", date: "12/21/2024" },
      { method: "Conference Call", date: "12/17/2024" },
    ],
    nextDue: { method: "Email", date: "24/20/2024" },
  },

  // Add more company data...
];
export const communicationMethodsMockData = [
  {
    id: 1,
    name: "LinkedIn Post",
    description: "Post on LinkedIn",
    sequence: 1,
    mandatory: true,
  },
  {
    id: 2,
    name: "LinkedIn Message",
    description: "Direct message on LinkedIn",
    sequence: 2,
    mandatory: true,
  },
  {
    id: 3,
    name: "Email",
    description: "Send an email",
    sequence: 3,
    mandatory: true,
  },
  {
    id: 4,
    name: "Phone Call",
    description: "Call the company representative",
    sequence: 4,
    mandatory: true,
  },
  {
    id: 5,
    name: "Other",
    description: "Other communication methods",
    sequence: 5,
    mandatory: false,
  },
];

export const companyMockData = [
  {
    id: 1,
    name: "EntNT Pvt Ltd",
    location: "Hyderabad, India",
    linkedinProfile: "https://linkedin.com/company/entnt",
    emails: ["info@entnt.com", "hr@entnt.com"],
    phoneNumbers: ["+91-9876543210", "+91-1234567890"],
    comments: "Potential long-term partner.",
    communicationPeriodicity: "2 weeks",
  },
  {
    id: 2,
    name: "Zeta Corporation",
    location: "Bangalore, India",
    linkedinProfile: "https://linkedin.com/company/zeta",
    emails: ["contact@zeta.com"],
    phoneNumbers: ["+91-7654321098"],
    comments: "Strong interest in our services.",
    communicationPeriodicity: "1 month",
  },
];
