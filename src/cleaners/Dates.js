export class Dates {

  getDates() {
    const tommorrow = new Date();
    const nextWeek = new Date();
    const upcoming = new Date();
    const upcomingEnd = new Date();
    tommorrow.setDate(tommorrow.getDate() + 1);
    nextWeek.setDate(nextWeek.getDate() + 7);
    upcoming.setDate(upcoming.getDate() + 8);
    upcomingEnd.setMonth(upcomingEnd.getMonth() + 3);

    return { 
      tommorrow: this.formatDate(tommorrow),
      nextWeek: this.formatDate(nextWeek),
      upcoming: this.formatDate(upcoming), 
      upcomingEnd: this.formatDate(upcomingEnd)
    };
  }

  formatDate = (date) => {
    return date
      .toISOString()
      .substr(0, 10)
      .replace(/[-]/gi, '') + '00';
  };
}