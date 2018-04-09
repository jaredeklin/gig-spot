export const cleanTime = (time) => {
  // console.log(time)
  const startTime = new Date(time).toLocaleTimeString([], {
    hour: '2-digit', 
    minute: '2-digit'
  });
  // console.log(startTime)
  return (startTime === '12:00 AM' ? '' : startTime);
};