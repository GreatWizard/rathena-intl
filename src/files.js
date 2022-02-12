import { readdir, stat } from "fs/promises";
import path from "path";

export async function getFilesFromDir(dir, fileTypes) {
  const filesToReturn = [];
  async function walkDir(currentPath) {
    const files = await readdir(currentPath);
    for (let i in files) {
      const curFile = path.join(currentPath, files[i]);
      if (
        (await stat(curFile)).isFile() &&
        fileTypes.indexOf(path.extname(curFile)) != -1
      ) {
        filesToReturn.push(curFile.replace(dir, ""));
      } else if ((await stat(curFile)).isDirectory()) {
        await walkDir(curFile);
      }
    }
  }
  await walkDir(dir);
  return filesToReturn;
}
