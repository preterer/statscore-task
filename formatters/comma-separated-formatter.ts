import { InvalidScoreError } from "../errors/invalid-score-error";
import { Match } from "../interfaces/match";

export function commaSeparatedFormatter(match: Match): string {
  if (typeof match.score !== "string") {
    throw new InvalidScoreError();
  }

  // We could keep using the crazy regexp or modify it, but it's slower and we have safe data that does not need to be validated with it
  const scores = match.score.split(",");
  if (scores.length !== 4) {
    throw new InvalidScoreError();
  }

  const [mainScore, ...sets] = scores;

  const parsedSets = sets
    .map((setScore, index) => `set${index + 1} ${setScore}`)
    .join(", ");

  return `Main score: ${mainScore} (${parsedSets})`;
}
