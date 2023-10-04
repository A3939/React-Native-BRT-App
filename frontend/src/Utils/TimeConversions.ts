import moment from 'moment';

export const formateDate = date => {
  return moment(date).format('Do MMM YYYY');
};

export const convertInIST = time => {
  var utcMoment = moment.utc(time);
  var istMoment = utcMoment.utcOffset('+05:30');
  var istTimeString = istMoment.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
  return istTimeString;
};

export const convertInHourMin = time => {
  var istMoment = moment(time);
  var formattedTime = istMoment.format('hh:mm A');
  return formattedTime;
};

export const minutesDiff = (startTimeUTC, endTimeUTC) => {
  var startTime = moment.utc(startTimeUTC);
  var endTime = moment.utc(endTimeUTC);
  var duration = moment.duration(endTime.diff(startTime));
  var minutesDiff = duration.asMinutes();
  return minutesDiff;
};
