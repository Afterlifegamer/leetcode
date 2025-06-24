import { Problem } from "../type/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-list";
import { search2DMatrix } from "./search-a-2d";
import { twoSum } from "./two-sums";
import { validParentheses } from "./valid-parantheses";

interface ProblemMap {
  [key: string]: Problem;
}
export const problems: ProblemMap = {
  "jump-game": jumpGame,
  "reverse-linked-list": reverseLinkedList,
  "search-a-2d-matrix": search2DMatrix,
  "valid-parentheses": validParentheses,
  "two-sum": twoSum,
};
