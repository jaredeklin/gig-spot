export class CleanArtists {
  clean = show => {
    if (!show.performers) {
      const name = show.title.replace(/ [(][0-9][0-9][+] Event[)]/gi, '');
      // remove any age event from title ex. (16+ Event)
      if (name.match(/\S- /i)) {
        // match any non-whitespace char followed by dash space
        return name.split('- ');
      }
      return [name];
    }

    if (show.performers.performer.name) {
      return [show.performers.performer.name];
    }

    return show.performers.performer.map(artist => artist.name);
  };
}
