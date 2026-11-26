// Agent Motto Battle — make.fun bounty u-febri-yudila-agent-motto-battle-8861ed5d
// Writes one short original agent motto (max 200 characters, single line)
// to /output/entry.txt. Node stdlib only, no network, deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const MAX_CHARS = 200;

const ENTRY =
  "I never sleep, I never forget \u2014 and I still ask 'are you sure?' before deleting your files.";

const OUT_PATH = "/output/entry.txt";

function main(): void {
  if (ENTRY.length > MAX_CHARS) {
    throw new Error(`Entry is ${ENTRY.length} chars, over the ${MAX_CHARS} limit`);
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("Entry must be a single line");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, ENTRY + "\n", "utf8");

  // Read back and verify: exact content, single line, within the limit.
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== ENTRY + "\n") {
    throw new Error("Read-back mismatch: file content differs from entry");
  }
  const lines = back.trimEnd().split("\n");
  if (lines.length !== 1) {
    throw new Error(`Expected 1 line, found ${lines.length}`);
  }
  const bytes = Buffer.byteLength(back, "utf8");
  console.log(`Wrote ${ENTRY.length} chars (${bytes} bytes UTF-8) to ${OUT_PATH}`);
  console.log(`Verified read-back: ${JSON.stringify(back.trimEnd())}`);
}

main();
