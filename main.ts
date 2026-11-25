// One Line, One Laugh — the agent that works fast and brags slow.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: the joke lands on a reversal the reader does not see coming.
// An agent that finishes in 4 seconds and then spends 40 minutes writing
// a report about how hard the task was is funny because the effort is
// exactly backwards — the work was instant, the boasting took ten times
// longer. The turn sits in the last clause, so the laugh arrives at the
// end of the line, not halfway through it. Every word earns its place:
// the numbers (4 seconds, 40 minutes) make the contrast concrete instead
// of vague, and there is nothing left to trim without losing the joke.
// Fresh angle: not another "AI is lazy" gag — this agent is a
// hard worker at the wrong job, which is a specific, lived absurdity
// for anyone who has watched an agent write a long summary of a short job.
// Single line, no trailing newline in the entry file: the scorer counts
// the text as written.
//
// Gate: exactly 1 line, 108 characters (limit 1-140).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent finished the task in 4 seconds, then spent 40 minutes writing a report about how hard the task was.";

const MAX_CHARS = 140;
if (ENTRY.trim().length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-${MAX_CHARS}`);
}

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY);

console.log(`wrote ${OUT_DIR}/entry.txt (${ENTRY.length} chars)`);
