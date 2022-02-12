import { writeFile } from "fs/promises";
import path from "path";
import md5 from "md5";
import js2xliff from "xliff/js2xliff";

export const xliffJS = {
  resources: {},
  sourceLanguage: "en-US",
};

export function addResource(resource, value) {
  if (value === undefined || value === "") {
    return;
  }
  const id = md5(value);
  if (!xliffJS.resources[resource]) {
    xliffJS.resources[resource] = {};
  }
  if (!xliffJS.resources[resource][id]) {
    xliffJS.resources[resource][id] = {
      source: value,
    };
  }
}

export async function writeXliff(outputDir, filename) {
  const xliff = await js2xliff(xliffJS);
  await writeFile(path.join(outputDir, filename), xliff);
}
