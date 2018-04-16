export const mockFetchShowsData = {
    "Info": {
        "TotalResults": 174,
        "PageNumber": 0,
        "Message": null
    },
    "Events": [{
        "Id": 3106726,
        "Date": "2018-04-08T21:00:00",
        "Venue": {
            "Id": 160831,
            "Name": "Streets Of London Pub",
            "Address": "1501 E Colfax Ave",
            "City": "Denver",
            "State": "Colorado",
            "StateCode": "CO",
            "Country": "US",
            "CountryCode": "US",
            "ZipCode": "80218",
            "Url": "",
            "Latitude": 0.0,
            "Longitude": 0.0
        },
        "Artists": [{
            "Id": 123882,
            "Name": "Shawn James"
        }],
        "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1634017/tfly?utm_medium=api"
    }]
};


export const mockCleanConcertData = [{
        "Id": 3106726,
        "Date": "2018-04-08T21:00:00",
        "Venue": {
            "Id": 160831,
            "Name": "Streets Of London Pub",
            "Address": "1501 E Colfax Ave",
            "City": "Denver",
            "State": "Colorado",
            "StateCode": "CO",
            "Country": "US",
            "CountryCode": "US",
            "ZipCode": "80218",
            "Url": "",
            "Latitude": 0.0,
            "Longitude": 0.0
        },
        "Artists": [{
            "Id": 123882,
            "Name": "Shawn James"
        }],
        "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1634017/tfly?utm_medium=api"
    }]

export const mockReturnedCleanConcertData = [{"date": "2018 M04 8", "headlineArtist": {"Id": 123882, "Name": "Shawn James"}, "id": 3106726, "startTime": "21:00", "supportArtists": [], "tickets": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1634017/tfly?utm_medium=api", "venue": {"address": "1501 E Colfax Ave", "city": "Denver", "id": 160831, "name": "Streets Of London Pub", "url": ""}}]

export const mockTonightCardData = {
  artist: "Selina Albright", 
  venue: "The Soiled Dove Underground", 
  date: {dayName: "Fri", day: "20", month: "Apr", year: "2018", startTime: "20:00"}, 
  id: 3108932, 
  image: "https://lastfm-img2.akamaized.net/i/u/300x300/2254265bbd13a9aea946244144459709.png" 
};

export const mockTonightCardDataWOImage = {
  date: "Apr 13, 2018",
  headlineArtist: {
    Id: 34468,
    Name: "The English Beat"
  },
  id: 3092703,
  startTime: "8:00 PM",
  supportArtists: [],
  tickets: "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1612325/tfly?utm_medium=api",
  venue: {
    name: "The Soiled Dove Underground", 
    id: 59319, url: "http://www.soileddove.com/", 
    address: "7401 E. 1st Ave", city: "Denver"
  }
}

export const mockFetchImageConcertData = [{
  date: "Apr 13, 2018",
  headlineArtist: {
    Id: 34468,
    Name: "The English Beat"
  },
  id: 3092703,
  startTime: "8:00 PM",
  supportArtists: [],
  tickets: "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1612325/tfly?utm_medium=api",
  venue: {
    name: "The Soiled Dove Underground", 
    id: 59319, url: "http://www.soileddove.com/", 
    address: "7401 E. 1st Ave", city: "Denver"
  }
}]

export const mockFetchArtistImageReturnData = {
  artist: {
    image: [
      {'#text': "https://lastfm-img2.akamaized.net/i/u/34s/fa3db70a62ae49dbbbfbd4183d68289f.png", size: "small"},
      {'#text': "https://lastfm-img2.akamaized.net/i/u/64s/fa3db70a62ae49dbbbfbd4183d68289f.png", size: "medium"},
      {'#text': "https://lastfm-img2.akamaized.net/i/u/174s/fa3db70a62ae49dbbbfbd4183d68289f.png", size: "large"},
      {'#text': "https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png", size: "extralarge"},
      {'#text': "https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png", size: "mega"},
      {'#text': "https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png", size: ""}
    ],

    name: "The English Beat"
  }
}

export const mockFetchImageReturnData = [{
  date: "Apr 13, 2018",
  headlineArtist: {
    Id: 34468,
    Name: "The English Beat"
  },
  id: 3092703,
  startTime: "8:00 PM",
  supportArtists: [],
  tickets: "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1612325/tfly?utm_medium=api",
  venue: {
    name: "The Soiled Dove Underground", 
    id: 59319, url: "http://www.soileddove.com/", 
    address: "7401 E. 1st Ave", city: "Denver"
  },
  image: "https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png"
}];

export const mockConcertProps = {
  date: "Apr 13, 2018",
  headlineArtist: {
    Id: 34468,
    Name: "The English Beat"
  },
  id: 3092703,
  startTime: "8:00 PM",
  supportArtists: [],
  tickets: "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1612325/tfly?utm_medium=api",
  venue: {
    name: "The Soiled Dove Underground", 
    id: 59319, url: "http://www.soileddove.com/", 
    address: "7401 E. 1st Ave", city: "Denver"
  },
  image: "https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png"
}

export const mockFetchImageCallData = [{
  "date": "2018 M04 8", 
  "headlineArtist": {"Id": '123882', "Name": "Shawn James"}, 
  "id": '3106726', 
  "startTime": "21:00", 
  "supportArtists": [], 
  "tickets": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1634017/tfly?utm_medium=api", 
  "venue": {"address": "1501 E Colfax Ave", "city": "Denver", "id": '160831', "name": "Streets Of London Pub", "url": ""}
}]