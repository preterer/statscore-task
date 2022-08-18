import { matches } from "./data";

class EventParser {
  makeEventName(match: any) {
    if (match.sport === "soccer") {
      return match.participant1 + " - " + match.participant2;
    } else if (match.sport === "tennis") {
      return match.participant1 + " vs " + match.participant2;
    } else if (match.sport === "volleyball") {
      return match.participant1 + " - " + match.participant2;
    } else if (match.sport === "handball") {
      return match.participant1 + " vs " + match.participant2;
    } else if (match.sport === "basketball") {
      return match.participant1 + " - " + match.participant2;
    } else {
      return "Exception: invalid sport";
    }
  }

  formatScore(match: any) {
    if (match.sport === "soccer") {
      return match.score;
    } else if (match.sport === "tennis") {
      const scores =
        /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(
          match.score
        ) as RegExpExecArray;
      const set1 = scores[2];
      const set2 = scores[3];
      const set3 = scores[4];

      return (
        "Main score: " +
        scores[1] +
        " (" +
        "set1 " +
        set1 +
        ", " +
        "set2 " +
        set2 +
        ", " +
        "set3 " +
        set3 +
        ")"
      );
    } else if (match.sport === "volleyball") {
      const scores =
        /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(
          match.score
        ) as RegExpExecArray;
      const set1 = scores[2];
      const set2 = scores[3];
      const set3 = scores[4];

      return (
        "Main score: " +
        scores[1] +
        " (" +
        "set1 " +
        set1 +
        ", " +
        "set2 " +
        set2 +
        ", " +
        "set3 " +
        set3 +
        ")"
      );
    } else if (match.sport === "basketball") {
      return (
        match.score[0][0] +
        "," +
        match.score[0][1] +
        "," +
        match.score[1][0] +
        "," +
        match.score[1][1]
      );
    } else if (match.sport === "handball") {
      return match.score;
    } else {
      return "Exception: invalid sport";
    }
  }
}

const parser = new EventParser();

const matchesParsed = matches
  .map((match) => {
    const name = parser.makeEventName(match);
    const score = parser.formatScore(match);

    return { name, score };
  })
  .filter((parsedMatch) => parsedMatch.name !== "Exception: invalid sport");

console.log(matchesParsed);
