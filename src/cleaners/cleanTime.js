const moment = require('moment');

export const cleanTime = time => {
  const startTime = moment(time).format('h:mm A');

  return startTime === '12:00 AM' ? '' : startTime;
};
