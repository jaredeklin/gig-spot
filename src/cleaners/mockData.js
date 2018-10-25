export const mockConcertData = [
  {
    all_day: '0',
    calendar_count: null,
    calendars: null,
    city_name: 'Denver',
    comment_count: null,
    country_abbr: 'USA',
    country_abbr2: 'US',
    country_name: 'United States',
    created: '2018-02-26 16:26:04',
    description: null,
    geocode_type: 'EVDB Geocoder',
    going: null,
    going_count: null,
    groups: null,
    id: 'E0-001-112093347-3',
    image: { block250: { url: 'www.image.com' } },
    latitude: '39.7442397',
    link_count: null,
    links: { link: [{ url: 'www.axs.com' }] },
    longitude: '-104.9901931',
    modified: '2018-03-03 05:28:50',
    olson_path: 'America/Denver',
    owner: 'evdb',
    performers: null,
    postal_code: '80202',
    privacy: '1',
    recur_string: null,
    region_abbr: 'CO',
    region_name: 'Colorado',
    start_time: '2018-10-24 20:00:00',
    stop_time: null,
    tickets: { link: [{ url: 'www.axs.com' }] },
    title: 'Joan Baez',
    tz_city: null,
    tz_country: null,
    tz_id: null,
    tz_olson_path: null,
    url:
      'http://denver.eventful.com/events/joan-baez-/E0-001-112093347-3?utm_source=apis&utm_medium=apim&utm_campaign=apic',
    venue_address: '1621 Glenarm Place',
    venue_display: '1',
    venue_id: 'V0-001-000198697-3',
    venue_name: 'Paramount Theatre',
    venue_url:
      'http://denver.eventful.com/venues/paramount-theatre-/V0-001-000198697-3?utm_source=apis&utm_medium=apim&utm_campaign=apic',
    watching_count: null
  },
  {
    all_day: '0',
    calendar_count: null,
    calendars: null,
    city_name: 'Denver',
    comment_count: null,
    country_abbr: 'USA',
    country_abbr2: 'US',
    country_name: 'United States',
    created: '2018-02-26 16:26:04',
    description: null,
    geocode_type: 'EVDB Geocoder',
    going: null,
    going_count: null,
    groups: null,
    id: 'E0-001-112093347-34',
    image: { block250: { url: 'www.image.com' } },
    latitude: '39.7442397',
    link_count: null,
    links: { link: [] },
    longitude: '-104.9901931',
    modified: '2018-03-03 05:28:50',
    olson_path: 'America/Denver',
    owner: 'evdb',
    performers: null,
    postal_code: '80202',
    privacy: '1',
    recur_string: null,
    region_abbr: 'CO',
    region_name: 'Colorado',
    start_time: '2018-10-24 20:00:00',
    stop_time: null,
    tickets: { link: [] },
    title: 'Joan Baez Tickets',
    tz_city: null,
    tz_country: null,
    tz_id: null,
    tz_olson_path: null,
    url:
      'http://denver.eventful.com/events/joan-baez-/E0-001-112093347-3?utm_source=apis&utm_medium=apim&utm_campaign=apic',
    venue_address: '1621 Glenarm Place',
    venue_display: '1',
    venue_id: 'V0-001-000198697-3',
    venue_name: 'Paramount Theatre',
    venue_url:
      'http://denver.eventful.com/venues/paramount-theatre-/V0-001-000198697-3?utm_source=apis&utm_medium=apim&utm_campaign=apic',
    watching_count: null
  },
  {
    all_day: '0',
    calendar_count: null,
    calendars: null,
    city_name: 'Denver',
    comment_count: null,
    country_abbr: 'USA',
    country_abbr2: 'US',
    country_name: 'United States',
    created: '2018-02-26 16:26:04',
    description: null,
    geocode_type: 'EVDB Geocoder',
    going: null,
    going_count: null,
    groups: null,
    id: 'E0-001-112093347-4',
    image: { block250: { url: 'www.image.com' } },
    latitude: '39.7442397',
    link_count: null,
    links: { link: [] },
    longitude: '-104.9901931',
    modified: '2018-03-03 05:28:50',
    olson_path: 'America/Denver',
    owner: 'evdb',
    performers: null,
    postal_code: '80202',
    privacy: '1',
    recur_string: null,
    region_abbr: 'CO',
    region_name: 'Colorado',
    start_time: '2018-10-24 20:00:00',
    stop_time: null,
    tickets: { link: [] },
    title: 'Joan Baez Parking',
    tz_city: null,
    tz_country: null,
    tz_id: null,
    tz_olson_path: null,
    url:
      'http://denver.eventful.com/events/joan-baez-/E0-001-112093347-3?utm_source=apis&utm_medium=apim&utm_campaign=apic',
    venue_address: '1621 Glenarm Place',
    venue_display: '1',
    venue_id: 'V0-001-000198697-3',
    venue_name: 'Paramount Theatre',
    venue_url:
      'http://denver.eventful.com/venues/paramount-theatre-/V0-001-000198697-3?utm_source=apis&utm_medium=apim&utm_campaign=apic',
    watching_count: null
  }
];

export const mockReturnedCleanConcertData = [
  {
    date: 'Oct 24',
    headlineArtist: 'Joan Baez',
    id: 'E0-001-112093347-3',
    image: 'www.image.com',
    startTime: '8:00 PM',
    supportArtists: [],
    tickets: 'www.axs.com',
    venue: {
      address: '1621 Glenarm Place',
      city: 'Denver',
      id: 'V0-001-000198697-3',
      name: 'Paramount Theatre',
      state: 'CO',
      url:
        'http://denver.eventful.com/venues/paramount-theatre-/V0-001-000198697-3?utm_source=apis&utm_medium=apim&utm_campaign=apic',
      zip: '80202'
    }
  }
];
export const mockTonightCardData = {
  artist: 'Selina Albright',
  venue: 'The Soiled Dove Underground',
  date: {
    dayName: 'Fri',
    day: '20',
    month: 'Apr',
    year: '2018',
    startTime: '20:00'
  },
  id: 3108932,
  image:
    'https://lastfm-img2.akamaized.net/i/u/300x300/2254265bbd13a9aea946244144459709.png'
};

export const mockTonightCardDataWOImage = {
  date: 'Apr 13, 2018',
  headlineArtist: {
    Id: 34468,
    Name: 'The English Beat'
  },
  id: 3092703,
  startTime: '8:00 PM',
  supportArtists: [],
  tickets:
    'http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1612325/tfly?utm_medium=api',
  venue: {
    name: 'The Soiled Dove Underground',
    id: 59319,
    url: 'http://www.soileddove.com/',
    address: '7401 E. 1st Ave',
    city: 'Denver'
  }
};

export const mockFetchImageConcertData = [
  {
    date: 'Apr 13, 2018',
    headlineArtist: {
      Id: 34468,
      Name: 'The English Beat'
    },
    id: 3092703,
    startTime: '8:00 PM',
    supportArtists: [],
    tickets:
      'http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1612325/tfly?utm_medium=api',
    venue: {
      name: 'The Soiled Dove Underground',
      id: 59319,
      url: 'http://www.soileddove.com/',
      address: '7401 E. 1st Ave',
      city: 'Denver'
    }
  }
];

export const mockLastFmReturnData = {
  artist: {
    name: 'The English Beat',
    bio: { summary: 'So many beats  <a href=www.lastfm.com>' },
    image: [
      {
        '#text':
          'https://lastfm-img2.akamaized.net/i/u/34s/fa3db70a62ae49dbbbfbd4183d68289f.png',
        size: 'small'
      },
      {
        '#text':
          'https://lastfm-img2.akamaized.net/i/u/64s/fa3db70a62ae49dbbbfbd4183d68289f.png',
        size: 'medium'
      },
      {
        '#text':
          'https://lastfm-img2.akamaized.net/i/u/174s/fa3db70a62ae49dbbbfbd4183d68289f.png',
        size: 'large'
      },
      {
        '#text':
          'https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png',
        size: 'extralarge'
      },
      {
        '#text':
          'https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png',
        size: 'mega'
      },
      {
        '#text':
          'https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png',
        size: ''
      }
    ]
  }
};

export const mockGetLastFmReturnData = [
  {
    bio: 'So many beats ',
    date: 'Oct 24',
    headlineArtist: 'Joan Baez',
    id: 'E0-001-112093347-3',
    image:
      'https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png',
    startTime: '8:00 PM',
    supportArtists: [],
    tickets: 'www.axs.com',
    venue: {
      address: '1621 Glenarm Place',
      city: 'Denver',
      id: 'V0-001-000198697-3',
      name: 'Paramount Theatre',
      state: 'CO',
      url:
        'http://denver.eventful.com/venues/paramount-theatre-/V0-001-000198697-3?utm_source=apis&utm_medium=apim&utm_campaign=apic',
      zip: '80202'
    }
  }
];

export const mockFetchImageReturnData = [
  {
    date: 'Oct 24',
    headlineArtist: 'Joan Baez',
    id: 'E0-001-112093347-3',
    image:
      'https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png',
    startTime: '8:00 PM',
    supportArtists: [],
    tickets: 'www.axs.com',
    bio: 'Yada yada yada',
    venue: {
      address: '1621 Glenarm Place',
      city: 'Denver',
      id: 'V0-001-000198697-3',
      name: 'Paramount Theatre',
      state: 'CO',
      url:
        'http://denver.eventful.com/venues/paramount-theatre-/V0-001-000198697-3?utm_source=apis&utm_medium=apim&utm_campaign=apic',
      zip: '80202'
    }
  }
];

export const mockConcertProps = {
  date: 'Apr 13, 2018',
  headlineArtist: {
    Id: 34468,
    Name: 'The English Beat'
  },
  id: 3092703,
  startTime: '8:00 PM',
  supportArtists: [{ Id: '123882', Name: 'Shawn James' }],
  tickets:
    'http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1612325/tfly?utm_medium=api',
  venue: {
    name: 'The Soiled Dove Underground',
    id: 59319,
    url: 'http://www.soileddove.com/',
    address: '7401 E. 1st Ave',
    city: 'Denver'
  },
  image:
    'https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png'
};

// export const mockFetchImageCallData = [
//   {
//     date: '2018 M04 8',
//     headlineArtist: { Id: '123882', Name: 'Shawn James' },
//     id: '3106726',
//     startTime: '21:00',
//     supportArtists: [],
//     tickets:
//       'http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1634017/tfly?utm_medium=api',
//     venue: {
//       address: '1501 E Colfax Ave',
//       city: 'Denver',
//       id: '160831',
//       name: 'Streets Of London Pub',
//       url: ''
//     }
//   }
// ];

export const mockInitialReturnEventData = {
  events: { event: mockConcertData },
  first_item: null,
  last_item: null,
  page_count: '2',
  page_items: null,
  page_number: '1',
  page_size: '25',
  search_time: '0.04',
  total_items: '31'
};
