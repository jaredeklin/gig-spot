const moment = require('moment');

export class Dates {
  getDates() {
    return {
      today: moment().format('YYYYMMDD00'),
      tommorrow: moment()
        .add(1, 'days')
        .format('YYYYMMDD00'),
      nextWeek: moment()
        .add(7, 'days')
        .format('YYYYMMDD00'),
      upcoming: moment()
        .add(8, 'days')
        .format('YYYYMMDD00'),
      upcomingEnd: moment()
        .add(3, 'months')
        .format('YYYYMMDD00')
    };
  }
}
