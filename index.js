import { readFile } from "fs/promises";
import path from "path";
import slugify from "slugify";

import { EXTRACTS } from "./src/config.js";
import { extractStrings } from "./src/extract.js";
import { getFilesFromDir } from "./src/files.js";
import { addResource, writeXliff } from "./src/xliff.js";

const npcDir =
  process.env.NPC_DIRECTORY || path.join(process.cwd(), "tmp", "npc");
const outputDir =
  process.env.OUTPUT_DIRECTORY || path.join(process.cwd(), "dist");

const files = await getFilesFromDir(npcDir, [".txt"]);

for (let i in files) {
  const file = files[i];
  const fileContent = await readFile(path.join(npcDir, file), "utf8");
  const fileLines = fileContent.split("\n");
  let resource = slugify(file.replace(".txt", "").replaceAll("/", "-"));
  if (resource.startsWith("-")) {
    resource = resource.substring(1);
  }
  fileLines.forEach((line) => {
    const commands = line.trim().split(";");
    commands.forEach((command) => {
      const commandTrimmed = command.trim();
      for (let i in EXTRACTS) {
        const extract = EXTRACTS[i];
        if (commandTrimmed.startsWith(extract.name)) {
          let params = commandTrimmed.substring(
            extract.name.length,
            commandTrimmed.length
          );
          return extractStrings(
            params,
            extract.limit,
            extract.startPosition
          ).forEach((param) => {
            addResource(resource, param);
          });
        }
      }
    });
  });
}

await writeXliff(outputDir, "npc.xliff");
