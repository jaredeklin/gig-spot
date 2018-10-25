import { Query } from './Query';

describe('Query', () => {
  const query = new Query();
  it('get url should return correct query url', () => {
    const expected = 'https://salty-waters-47393.herokuapp.com/http://api.eventful.com/json/events/search?app_key=fXn9D3Xfj44jjsj7&location=Denver&category=music&image_sizes=block250&sort_order=popularity&page_size=25&include=tickets,links'; //eslint-disable-line
    expect(query.getUrl('Denver')).toEqual(expected);
  });
});
