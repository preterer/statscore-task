import { InvalidScoreError } from "../errors/invalid-score-error";
import { Match } from "../interfaces/match";

export function basketballFormatter(match: Match): string {
  if (!Array.isArray(match.score)) {
    throw new InvalidScoreError();
  }

  return match.score.flat().join(",");
}
