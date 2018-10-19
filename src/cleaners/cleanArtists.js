export class CleanArtists {
  clean = (show) => {

    if (!show.performers) {
      const name = show.title.replace(/ [(][0-9][0-9][+] Event[)]/gi, "");
      
      return [name];
    }

    if (show.performers.performer.name) {
      return [show.performers.performer.name];
    }

    return show.performers.performer.map(artist => artist.name);
  };
}