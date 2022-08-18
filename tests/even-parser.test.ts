import { matches } from "../data";
import { EventParser } from "../event-parser";

const expectedResults = [
  { name: "Chelsea - Arsenal", score: "2:1" },
  {
    name: "Germany - France",
    score: "Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)",
  },
  { name: "Pogoń Szczeciń vs Azoty Puławy", score: "34:26" },
  { name: "GKS Tychy - GKS Katowice", score: "9:7,2:1,5:3,9:9" },
  {
    name: "Maria Sharapova vs Serena Williams",
    score: "Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)",
  },
];

describe("Event parser", () => {
  const cases = matches.map((match, index) => ({
    match,
    expected: expectedResults[index],
  }));

  const eventParser = new EventParser();

  it.each(cases)("Should parse $variable.sport", (testCase) => {
    const result = eventParser.parseMatch(testCase.match);
    expect(result.name).toBe(testCase.expected.name);
    expect(result.score).toBe(testCase.expected.score);
  });
});
