export const cleanTime = time => {
  const startTime = new Date(time).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  return startTime === '12:00 AM' ? '' : startTime;
};
