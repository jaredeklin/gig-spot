/* eslint-disable */

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
        "startTime": "21:00",
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

export const mockReturnedCleanConcertData = [{"date": "2018 M04 8", "headlineArtist": {"Id": 123882, "Name": "Shawn James"}, "id": 3106726, "startTime": undefined, "supportArtists": [], "tickets": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1634017/tfly?utm_medium=api", "venue": {"address": "1501 E Colfax Ave", "city": "Denver", "id": 160831, "name": "Streets Of London Pub", "url": ""}}]

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
  supportArtists: [{"Id": '123882', "Name": "Shawn James"}],
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

export const mockExpectedCleanConcertData = [{"Artists": [{"Id": 123882, "Name": "Shawn James"}], "Date": "2018-04-08T21:00:00", "Id": 3106726, "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1634017/tfly?utm_medium=api", "Venue": {"Address": "1501 E Colfax Ave", "City": "Denver", "Country": "US", "CountryCode": "US", "Id": 160831, "Latitude": 0, "Longitude": 0, "Name": "Streets Of London Pub", "State": "Colorado", "StateCode": "CO", "Url": "", "ZipCode": "80218"}}, {"Artists": [{"Id": 123882, "Name": "Shawn James"}], "Date": "2018-04-08T21:00:00", "Id": 3106726, "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1634017/tfly?utm_medium=api", "Venue": {"Address": "1501 E Colfax Ave", "City": "Denver", "Country": "US", "CountryCode": "US", "Id": 160831, "Latitude": 0, "Longitude": 0, "Name": "Streets Of London Pub", "State": "Colorado", "StateCode": "CO", "Url": "", "ZipCode": "80218"}}]

export const mockFilterDataCall = [{
  "date": "2018 M04 8", 
  "headlineArtist": {"Id": '123882', "Name": "Shawn James"}, 
  "id": '3106726', 
  "startTime": "21:00", 
  "supportArtists": [], 
  "tickets": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1634017/tfly?utm_medium=api", 
  "venue": {"address": "1501 E Colfax Ave", "city": "Denver", "id": '160831', "name": "Streets Of London Pub", "url": ""},
  "image": "https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png"
}]

export const mockFilterDatesData = [{
        "Id": 3083885,
        "date": "2018-04-16T18:30:00",
        "Artists": [{
            "Id": 42467,
            "Name": "Cradle of Filth "
        }, {
            "Id": 118639,
            "Name": "Uncured"
        }, {
            "Id": 128218,
            "Name": "Jinjer"
        }],
    }, {
        "Id": 3109433,
        "date": "2018-04-18T00:00:00",
        "Artists": [{
            "Id": 101680,
            "Name": "Lapalux"
        }],
    }, {
        "Id": 3102725,
        "date": "2018-04-25T21:00:00",
        
        "Artists": [{
            "Id": 25778,
            "Name": "Chali 2na"
        }, {
            "Id": 36359,
            "Name": "Method Man"
        }, {
            "Id": 40914,
            "Name": "Redman"
        }, {
            "Id": 51319,
            "Name": "Collie Buddz "
        }],
    }
]

export const mockExpectedFilterDates = [[{"Artists": [{"Id": 42467, "Name": "Cradle of Filth "}, {"Id": 118639, "Name": "Uncured"}, {"Id": 128218, "Name": "Jinjer"}], "Id": 3083885, "date": "M04 16"}], 
[{"Artists": [{"Id": 101680, "Name": "Lapalux"}], "Id": 3109433, "date": "M04 18"}, ], 
[{"Artists": [{"Id": 25778, "Name": "Chali 2na"}, {"Id": 36359, "Name": "Method Man"}, {"Id": 40914, "Name": "Redman"}, {"Id": 51319, "Name": "Collie Buddz "}], "Id": 3102725, "date": "M04 25"}]]



