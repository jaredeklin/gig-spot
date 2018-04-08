export const mockTonightCardData = {
  artist: "Selina Albright", 
  venue: "The Soiled Dove Underground", 
  date: {dayName: "Fri", day: "20", month: "Apr", year: "2018", startTime: "20:00"}, 
  id: 3108932, 
  image: "https://lastfm-img2.akamaized.net/i/u/300x300/2254265bbd13a9aea946244144459709.png" 
};


export const mockTonightCardDataWOImage = {
  artist: "Selina Albright", 
  venue: "The Soiled Dove Underground", 
  date: {dayName: "Fri", day: "20", month: "Apr", year: "2018", startTime: "20:00"}, 
  id: 3108932, 
  image: null
};

export const mockFetchImageConcertData = [{
  artist: "Shawn James", venue: "Streets Of London Pub", date: "Apr 8", startTime: "9:00 PM", id: 3106726
}];

export const mockFetchArtistImageReturnData = {
  artist: {
    bio: {links: {}, published: "18 Sep 2012, 01:00", summary: "Shawn James" },
    image: [
      {'#text': "https://lastfm-img2.akamaized.net/i/u/34s/ef281d679fd4707227ec33aaa633ca95.png", size: "small"},
      {'#text': "https://lastfm-img2.akamaized.net/i/u/64s/ef281d679fd4707227ec33aaa633ca95.png", size: "medium"},
      {'#text': "https://lastfm-img2.akamaized.net/i/u/174s/ef281d679fd4707227ec33aaa633ca95.png", size: "large"},
      {'#text': "https://lastfm-img2.akamaized.net/i/u/300x300/ef281d679fd4707227ec33aaa633ca95.png", size: "extralarge"},
      {'#text': "https://lastfm-img2.akamaized.net/i/u/300x300/ef281d679fd4707227ec33aaa633ca95.png", size: "mega"},
      {'#text': "https://lastfm-img2.akamaized.net/i/u/300x300/ef281d679fd4707227ec33aaa633ca95.png", size: ""}
      ],
    name: "Shawn James",
  }
}

export const mockFetchImageReturnData = [{"artist": "Shawn James", "date": "Apr 8", "id": 3106726, "image": "https://lastfm-img2.akamaized.net/i/u/300x300/ef281d679fd4707227ec33aaa633ca95.png", "startTime": "9:00 PM", "venue": "Streets Of London Pub"}]