import { matches } from "./data";
import { MatchParser } from "./match-parser";

const parser = new MatchParser();

const matchesParsed = matches.map((match) => parser.parseMatch(match));

console.log(matchesParsed);
