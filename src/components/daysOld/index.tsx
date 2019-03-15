export const DaysOld = () => {
  const to = +new Date("2016-09-12");
  const now = +new Date();

  return Math.floor((now - to) / (24 * 60 * 60 * 1000));
};
