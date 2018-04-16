import { filterDates } from './filterDates';

describe('filterDates', () => {
  it('should filter the shows into date categories', () => {
    expect(filterDates(mockShows)).toEqual(expected)
  })
})

const mockShows = [{
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
        "date": "2018-04-20T21:00:00",
        
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

const expected = [[{"Artists": [{"Id": 42467, "Name": "Cradle of Filth "}, {"Id": 118639, "Name": "Uncured"}, {"Id": 128218, "Name": "Jinjer"}], "Id": 3083885, "date": "M04 16"}], [{"Artists": [{"Id": 101680, "Name": "Lapalux"}], "Id": 3109433, "date": "M04 18"}, {"Artists": [{"Id": 25778, "Name": "Chali 2na"}, {"Id": 36359, "Name": "Method Man"}, {"Id": 40914, "Name": "Redman"}, {"Id": 51319, "Name": "Collie Buddz "}], "Id": 3102725, "date": "M04 20"}], []]