import { CleanArtists } from './CleanArtists';

describe('CleanArtists clean method', () => {
  const artist = new CleanArtists();

  const mock1 = { title: 'Jared- Bob (16+ Event)', performers: null };
  const mock2 = { title: 'Jared and Bob', performers: null };
  const mock3 = { title: '', performers: { performer: { name: 'Jared' } } };
  const mock4 = {
    title: '',
    performers: { performer: [{ name: 'Jared' }, { name: 'Bob' }] }
  };

  it('It should return a cleaned correct value without performers', () => {
    const expected = ['Jared', 'Bob'];
    expect(artist.clean(mock1)).toEqual(expected);
  });

  it('It should return a correct value without performers', () => {
    const expected = ['Jared and Bob'];
    expect(artist.clean(mock2)).toEqual(expected);
  });

  it('It should return a correct value with a single performer', () => {
    const expected = ['Jared'];
    expect(artist.clean(mock3)).toEqual(expected);
  });

  it('It should return a correct value with multiple performers', () => {
    const expected = ['Jared', 'Bob'];
    expect(artist.clean(mock4)).toEqual(expected);
  });
});
