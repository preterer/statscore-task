import { Sport } from "./enums/sport.enum";
import { Match } from "./interfaces/match";
import { ParsedMatch } from "./interfaces/parsed-match";

export class EventParser {
  private JOINTS = {
    [Sport.TENNIS]: " vs ",
    [Sport.HANDBALL]: " vs ",
    default: " - ",
  } as const;

  public parseMatch(match: Match): ParsedMatch {
    const name = this.makeEventName(match);
    const score = this.formatScore(match);

    return { name, score };
  }

  private makeEventName(match: Match): string {
    const joint = this.JOINTS[match.sport] || this.JOINTS.default;
    return `${match.participant1}${joint}${match.participant2}`;
  }

  private formatScore(match: Match): string {
    if (match.sport === "soccer") {
      return match.score as string;
    } else if (match.sport === "tennis") {
      const scores =
        /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(
          match.score as string
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
          match.score as string
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
      return match.score as string;
    } else {
      return "Exception: invalid sport";
    }
  }
}
