export const getUpcomingDates: (noOfDays: number) => Array<Date> = (noOfDays) =>
  [...Array(noOfDays).keys()].map((i) => new Date(Date.now() + i * 86400000));

export const getDateDiffInDays = (date1: Date, date2: Date) =>
  Math.floor(Math.abs(date2.getTime() - date1.getTime()) / (24 * 3600 * 1000));

