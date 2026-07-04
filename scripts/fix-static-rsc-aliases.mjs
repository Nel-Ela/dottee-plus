import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");

function visit(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      visit(fullPath);
      continue;
    }

    if (!/^__next\.[^.]+\.txt$/.test(entry)) continue;

    const aliasName = entry.replace(/\.txt$/, ".__PAGE__.txt");
    const aliasPath = join(dir, aliasName);
    if (!existsSync(aliasPath)) {
      copyFileSync(fullPath, aliasPath);
    }
  }
}

if (existsSync(outDir)) {
  visit(outDir);
}
