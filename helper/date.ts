export const getUpcomingDates: (noOfDays: number) => Array<Date> = (noOfDays) =>
  [...Array(noOfDays).keys()].map((i) => new Date(Date.now() + i * 86400000));

export const getDateDiffInDays = (date1: Date, date2: Date) =>
  Math.floor(Math.abs(date2.getTime() - date1.getTime()) / (24 * 3600 * 1000));


export const formatDate = (value: Date) => {
  let date = new Date(value);
  const day = date.toLocaleString('default', { day: '2-digit' });
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  return day + ' ' + month + ' ' + year;
}