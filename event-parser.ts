import { Sport } from "./enums/sport.enum";
import { InvalidSportError } from "./errors/invalid-sport-error";
import { basketballFormatter } from "./formatters/basketball-formatter";
import { commaSeparatedFormatter } from "./formatters/comma-separated-formatter";
import { identityFormatter } from "./formatters/identity-formatter";
import { Match } from "./interfaces/match";
import { ParsedMatch } from "./interfaces/parsed-match";

export class EventParser {
  private JOINTS: Record<string, string> & { default: string } = {
    [Sport.TENNIS]: " vs ",
    [Sport.HANDBALL]: " vs ",
    default: " - ",
  } as const;

  private FORMATTERS: Record<string, (match: Match) => string> = {
    [Sport.SOCCER]: identityFormatter,
    [Sport.HANDBALL]: identityFormatter,
    [Sport.TENNIS]: commaSeparatedFormatter,
    [Sport.VOLLEYBALL]: commaSeparatedFormatter,
    [Sport.BASKETBALL]: basketballFormatter,
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
    const formatter = this.FORMATTERS[match.sport];
    if (formatter) {
      return formatter(match);
    }

    throw new InvalidSportError();
  }
}
