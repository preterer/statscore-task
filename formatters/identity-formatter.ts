import { InvalidScoreError } from "../errors/invalid-score-error";
import { Match } from "../interfaces/match";

export function identityFormatter(match: Match): string {
  if (typeof match.score !== "string") {
    throw new InvalidScoreError();
  }
  return match.score as string;
}
