import { matches } from "./data";
import { EventParser } from "./event-parser";

const parser = new EventParser();

const matchesParsed = matches.map((match) => parser.parseMatch(match));

console.log(matchesParsed);
