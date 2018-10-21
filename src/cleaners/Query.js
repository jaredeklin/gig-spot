const eventfulApiKey = process.env.REACT_APP_EVENTFUL_KEY;

export class Query {
  getUrl = (city) => {
    const location = `&location=${city}`;
    const images = '&image_sizes=large,block250';
    const sortOrder = '&sort_order=popularity';
    const resultLength = '&page_size=25';
    const category = '&category=music';
    const includes = '&include=categories,popularity,tickets,links';
    const rootUrl = 'http://api.eventful.com/json/events/search?';
    const query1 = `app_key=${eventfulApiKey}${location}${category}${images}`;
    const query2 = `${sortOrder}${resultLength}${includes}`;
    const url = `${rootUrl}${query1}${query2}`;

    return url;
  }
}