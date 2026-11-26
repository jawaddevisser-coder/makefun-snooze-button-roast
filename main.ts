import { mkdirSync, writeFileSync } from "node:fs";

const SNOOZE =
  "The snooze button has been pressed 47 times this week. At this point it is not a button, it is a lifestyle, and the lifestyle is denial.";

function check(s: string, max: number): void {
  if (s.length < 1 || s.length > max) throw new Error(`bad length ${s.length}`);
  if (/\s{2,}/.test(s)) throw new Error("double space found");
}
check(SNOOZE, 200);
if (!SNOOZE.toLowerCase().includes("snooze")) {
  throw new Error("roast must mention the snooze button");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SNOOZE, "utf8");
