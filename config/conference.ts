import moment from 'moment'
import { orderBy } from '../components/utils/arraySort'
import SponsorData from '../config/sponsors'
import { Conference as IConference, TicketNumberWhileVoting, TicketPurchasingOptions, TicketsProvider } from './types'
import venue from './venue'

const name = 'DDD Melbourne'
const tagLine = `${name} is an inclusive non-profit conference for the software community`

const hideDate = false
const ticketPurchasingOptions = TicketPurchasingOptions.SoldOut
const date = moment.parseZone('2019-08-10T08:00:00+10:00')
const endDate = date.clone().add(12, 'h')
const currentInstance = parseInt(date.format('YYYY'), 10)
const firstInstance = 2010
const wave1RegistrationOpenFrom = moment.parseZone('2019-05-06T12:00:00+10:00')
const wave2RegistrationOpenFrom = moment.parseZone('2019-06-08T15:00:00+10:00')
const registrationOpenUntil = true
  ? null
  : date
    .clone()
    .add(-1, 'd')
    .startOf('day')
    .add(17, 'h')
const presentationSubmissionsOpenFrom = moment.parseZone('2019-04-13T17:00:00+10:00')
const presentationSubmissionsOpenUntil = moment.parseZone('2019-06-15T23:59:59+10:00')
const votingOpenFrom = moment.parseZone('2019-06-16T12:00:00+10:00')
const votingOpenUntil = moment.parseZone('2019-06-27T15:00:00+10:00')
const agendaPublishedFrom = moment.parseZone('2019-07-15T19:00:00+10:00')
const feedbackOpenFrom = date.clone()
const feedbackOpenUntil = endDate
const importantDates = [
  {
    Date: presentationSubmissionsOpenFrom,
    Description: 'Call for presentations open',
    Type: 'content',
  },
  {
    Date: presentationSubmissionsOpenUntil,
    Description: 'Call for presentations close',
    Type: 'content',
  },
  { Description: 'Ticket Release - Wave 1', Date: wave1RegistrationOpenFrom, Type: 'tickets' },
  { Description: 'Ticket Release - Wave 2', Date: wave2RegistrationOpenFrom, Type: 'tickets' },
  { Description: 'Voting open', Date: votingOpenFrom, Type: 'voting' },
  { Description: 'Voting close', Date: votingOpenUntil, Type: 'voting' },
  {
    Date: agendaPublishedFrom,
    Description: 'Agenda published',
    Type: 'agenda',
  },
]

if (registrationOpenUntil !== null && ticketPurchasingOptions === TicketPurchasingOptions.OnSale) {
  importantDates.push({
    Date: registrationOpenUntil,
    Description: 'Ticket sales close',
    Type: 'tickets',
  })
}

if (!hideDate) {
  importantDates.push({
    Date: date,
    Description: 'Conference day',
    Type: 'conference',
  })
}

// tslint:disable:object-literal-sort-keys
const Conference: IConference = {
  Name: name,
  Instance: currentInstance.toString(),
  PreviousInstance: (currentInstance - 1).toString(),
  PreviousInstances: [...Array(currentInstance - firstInstance).keys()].map((_, i) => (firstInstance + i).toString()),
  Organiser: {
    Name: 'Oz Dev Inc.',
    Url: 'https://medium.com/ddd-melbourne/the-ddd-melbourne-crew-5f0dd3da09df',
    ShirtColour: 'blue',
  },
  TagLine: tagLine,
  SiteDescription: `${tagLine}.`,
  Goal:
    'Our goal is to create an approachable event that appeals to the whole community, especially people who usually don’t have the opportunity to attend, or speak at, conferences.',
  GoogleAnalyticsId: 'UA-60040308-1', // TODO
  TicketPrice: '$79',
  TicketsProviderId: TicketsProvider.Tito,
  TicketsProviderAccountId: 'ddd-melbourne',
  TicketsProviderEventId: 'ddd-2019',
  TicketsProviderFinancialAssistanceCode: 'financialassistance', // TODO
  TicketPurchasingOptions: ticketPurchasingOptions,
  HashTag: 'DDDMelbourne',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  Handbook: 'handbook2019.pdf',
  SessionizeUrl: 'https://sessionize.com/ddd-melbourne-2019/',
  SessionizeEditUrl: 'https://sessionize.com/app/speaker/',
  PrivateSubmissionUrl: 'https://forms.gle/Hbfn1fiEZqkcwJ8p7',
  PreviouslySubmittedTopics:
    'Agile, building great teams, UI design, software testing, virtual reality, women in tech, web accessibility, open source software, feedback culture, self-employment tips, mentoring, Scrum, pair programming, bots, IoT, machine learning, neural networks, quantum encryption, Assembly language, automated deployments, mobile development, mobile test automation, architecture, microservices, serverless, APIs, GraphQL, actors, JavaScript, authentication, React, UWP,  HTTP protocol, Git, Docker and pointers',

  ContactEmail: 'info@dddmelbourne.com',
  SponsorshipEmail: 'sponsorship@dddmelbourne.com',
  MentoringEmail: 'speakers@dddmelbourne.com',
  EmergencyContactName: 'Tien Phan', // TODO
  EmergencyContactPhoneNumber: 'TBC', // TODO
  MediaOfficerName: 'Yolanie Gamage', // TODO

  AnonymousReportFormUrl: 'https://forms.gle/7GkewmN8BrHQtwWQA',
  AnonymousVoting: true,
  PreferentialVoting: true,
  TicketNumberWhileVoting: TicketNumberWhileVoting.Required,
  MinVotes: 6,
  MaxVotes: 10,

  Date: date,
  EndDate: endDate,
  DoorsOpenTime: '8:00am',
  FinishTime: '6:00pm',
  Wave1RegistrationOpenFrom: wave1RegistrationOpenFrom,
  Wave2RegistrationOpenFrom: wave2RegistrationOpenFrom,
  RegistrationOpenUntil: registrationOpenUntil,
  PresentationSubmissionsOpenFrom: presentationSubmissionsOpenFrom,
  PresentationSubmissionsOpenUntil: presentationSubmissionsOpenUntil,
  VotingOpenFrom: votingOpenFrom,
  VotingOpenUntil: votingOpenUntil,
  AgendaPublishedFrom: agendaPublishedFrom,
  FeedbackOpenFrom: feedbackOpenFrom,
  FeedbackOpenUntil: feedbackOpenUntil,

  ConferenceFeedbackLink: '/conference-feedback',
  SessionFeedbackLink: '/feedback',

  HideDate: hideDate,
  HideSponsors: false,
  HideSponsorshipUpsell: false,
  HideVenue: venue === null,
  HideAfterpartyVenue: venue === null || venue.Afterparty === null,
  ShowNextSessions: true,

  Venue: venue,

  Socials: {
    Twitter: {
      Id: '971044039',
      Name: 'DDDMelb',
    },
    Instagram: 'dddmelb',
    Flickr: 'https://www.flickr.com/photos/135717775@N07/albums',
    Youtube: 'https://www.youtube.com/channel/UCj4UnNYakbLAh2xTWTjeoAQ',
    Blog: 'https://medium.com/ddd-melbourne',
    Email: 'dddmelbourne@gmail.com',
    GitHub: 'OpenDDD',
  },

  ImageStrip: [
    { Url: '/static/images/strip/1.jpg', Alternate: 'Ladies networking breakfast 2018' },
    { Url: '/static/images/strip/2.jpg', Alternate: 'Our 2018 speakers' },
    { Url: '/static/images/strip/3.jpg', Alternate: 'DDD 2018 Organisers & Volunteers' },
    { Url: '/static/images/strip/4.jpg', Alternate: 'Socialising with the Liberty Robot' },
    { Url: '/static/images/strip/5.jpg', Alternate: 'Crowd of attendees in 2018' },
  ],

  ImportantContacts: {
    Police: {
      Details: 'Melbourne West Police Station, 313 Spencer St, Docklands VIC 3008',
      MapUrl:
        'https://www.google.com/maps/place/Melbourne+West+Police+Station/@-37.813749,144.9488465,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad65d4f44719edf:0xc5a10f192bea4367!8m2!3d-37.8137533!4d144.9510352',
    },
    CentreAgainstSexualAssault: {
      Details: '1800 806 292',
    },
    EmergencyMedical: {
      Details: 'Royal Melbourne Hospital, 300 Grattan St, Melbourne VIC 3000',
      MapUrl:
        'https://www.google.com/maps/place/The+Royal+Melbourne+Hospital/@-37.7990618,144.9538002,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad65d2e7f540971:0x9d8b2b9975e322e7!8m2!3d-37.7990618!4d144.9559889',
    },
    NonEmergencyMedical: {
      Details: 'Swanston Street Medical Centre, Level 3, 255 Bourke St, Melbourne VIC 3000',
      MapUrl:
        'https://www.google.com/maps/place/Swanston+Street+Medical+Centre/@-37.8135749,144.9639683,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad642cb0cd76b79:0xd7d3d0b9719c23c0!8m2!3d-37.8135749!4d144.966157',
    },
  },

  ImportantDates: orderBy(importantDates, i => i.Date),

  Sponsors: SponsorData,

  Keynotes: [],

  RoomNames: ['Theatre', 'ER1', 'ER2', 'ER3', 'JD'],

  SessionGroups: [
    {
      sessions: ['b67e6e68-ea07-4bf2-b8d6-deb77c7bb9db'],
      timeEnd: date.clone().set({ hour: 9, minutes: 45 }),
      timeStart: date.clone().set({ hour: 9, minutes: 0 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        '44f3ab17-52bf-43df-915d-a9f1cd2decf5',
        '1ad725d0-da57-484c-b363-cb8fbcc1bb3b',
        '80081d86-2371-4c03-9dbf-78874d311cac',
        '876f300e-c8a1-488f-9d67-b94655c61e67',
        '61ec6c7b-65bf-47f4-980a-a5043bb1f658'
      ],
      timeEnd: date.clone().set({ hour: 11, minutes: 0 }),
      timeStart: date.clone().set({ hour: 10, minutes: 15 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        '80f58dce-fff6-4c9d-9e5f-536ecac3cf78',
        '1eff322d-e7f7-4d47-a474-738025ed068f',
        '431b57f6-be91-4b56-a4e3-cf0df13a61ec',
        '531eb2c2-e4b2-43c8-868f-e2b31a138970',
        '1ab27723-dac5-4bea-a66a-3c3ef81836eb'
      ],
      timeEnd: date.clone().set({ hour: 12, minute: 0 }),
      timeStart: date.clone().set({ hour: 11, minute: 15 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        'aeb1a7d8-8f0d-476a-8b04-dcc0ac85583d',
        '6738e367-d528-469f-8706-5693321ffee9',
        'a712613f-826b-475c-9ba5-8a299b482e38',
        'ec2e9258-5779-4a9b-931f-3ca43cebd182',
        '2633de08-2d54-49ca-ad8a-6c1868627d92'
      ],
      timeEnd: date.clone().set({ hour: 12, minute: 35 }),
      timeStart: date.clone().set({ hour: 12, minute: 15 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        '9c0d43ec-25b4-4e38-9d80-1ce5566b4e22',
        'e2eeecf8-d878-47af-b676-64c2eeb869ff',
        '1372ab63-42fe-4357-8099-05b911a6b895',
        'a6902460-f114-4d04-8c42-79051275c032',
        'fb3884d6-0081-4edd-bf2c-8f48e9353964'
      ],
      timeEnd: date.clone().set({ hour: 14, minute: 20 }),
      timeStart: date.clone().set({ hour: 13, minute: 35 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        '5a8030cd-0a3d-48f5-8106-d61012032a27',
        '1ff00730-7315-46ab-8894-202d32161a8b',
        '9cd0d9fd-98d3-46a9-8803-05da7b163bfb',
        '8e6dea80-4928-49a9-8a30-490f2e82fd0d',
        '208b50ae-b13d-4041-95a4-1d11a3e9cbf7'
      ],
      timeEnd: date.clone().set({ hour: 14, minute: 55 }),
      timeStart: date.clone().set({ hour: 14, minute: 35 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        'ae3a2ce9-c0a2-451c-a4b6-246fe9eb711a',
        'ca70ba13-26c4-4583-a6fe-1710a5a30362',
        '510bdecd-c23b-43d6-944b-86423b0b10f0',
        'c212d5d9-76a5-44ab-b73a-ffcba4d2d26a',
        'ca4fae67-13b2-42ea-a4b7-b5e00bf442ea',
        '3d89ac57-d69c-4a00-bb9b-0f31d7bd0002'
      ],
      timeEnd: date.clone().set({ hour: 15, minute: 25 }),
      timeStart: date.clone().set({ hour: 15, minute: 25 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        '619a1e2b-26d0-4af3-8c96-ed6de432402c',
        '8737fcc4-eb38-4871-b81e-6e3812218c42',
        '207baae6-4ff5-49db-80ad-9527c57b88f6',
        'ca8dce34-a2da-4379-ad62-ee67642ee602',
        '18a87e6e-23ba-4c9f-a939-0ef92bc03e04',
        '712a9de9-e4eb-4570-96d6-47c906e69ccb'
      ],
      timeEnd: date.clone().set({ hour: 17, minute: 10 }),
      timeStart: date.clone().set({ hour: 16, minute: 25 }),
      type: 'SessionIds',
    },
    {
      sessions: ['94a556e1-398d-4988-888e-bb2538ba90a7'],
      timeEnd: date.clone().set({ hour: 18, minute: 0 }),
      timeStart: date.clone().set({ hour: 17, minute: 15 }),
      type: 'SessionIds',
    },
  ]
}

export default Conference
