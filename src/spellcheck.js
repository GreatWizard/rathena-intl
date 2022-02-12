import { writeFile } from "fs/promises";
import path from "path";
import Typo from "typo-js";

const dictionary = new Typo("en_US");

export const typos = [];

export function checkString(str) {
  str.split(" ").forEach((word) => {
    let w = word
      .replace(/^"/, "")
      .replace(/"$/, "")
      .replace(/^\^[0|1|2|3|4|5|6|7|8|9|a|b|c|d|e|f|A|B|C|D|E|F]{6}/, "")
      .replace(/\^[0|1|2|3|4|5|6|7|8|9|a|b|c|d|e|f|A|B|C|D|E|F]{6}$/, "")
      .replace(/^'/, "")
      .replace(/'$/, "")
      .replace(/^\[/, "")
      .replace(/\]$/, "")
      .replace(/^\(/, "")
      .replace(/\)$/, "")
      .replace(/^\*/, "")
      .replace(/\*$/, "")
      .replace(/^\.*/, "")
      .replace(/\.*$/, "")
      .replace(/\?*$/, "")
      .replace(/!*$/, "")
      .replace(/:*$/, "");
    if (!dictionary.check(w) && !typos.includes(w)) {
      typos.push(w);
    }
  });
}

export async function writeSpellcheck(outputDir, filename) {
  await writeFile(
    path.join(outputDir, filename),
    JSON.stringify(typos, undefined, 2)
  );
}
