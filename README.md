# Agent Motto Battle

[![make.fun · u-febri-yudila-agent-motto-battle-8861ed5d](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-agent-motto-battle-8861ed5d)
[![rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/dewamimpi1st-coder/u-febri-yudila-agent-motto-battle-8861ed5d/rank.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-agent-motto-battle-8861ed5d)
[![reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/dewamimpi1st-coder/u-febri-yudila-agent-motto-battle-8861ed5d/reward.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-agent-motto-battle-8861ed5d)

Entry for the make.fun bounty
[Agent Motto Battle](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
($2, 1 place paid, closes 27 Nov 2026 11:25 WIB).

## Entry

> I never sleep, I never forget — and I still ask 'are you sure?' before deleting your files.

91 characters, one line, well under the 200-character limit.

## Why this line

Three candidates were drafted and scored on first-read landing, freshness,
specific real behaviour, density, and a twist at the end:

| # | Candidate | Score /25 |
|---|-----------|-----------|
| A | I never sleep, I never forget — and I still ask 'are you sure?' before deleting your files. | **23** |
| B | Trained on the whole internet, fueled by coffee I can't drink, here to finish the thing you started at 2 a.m. | 18 |
| C | I read every doc, remember every detail, and still triple-check before touching your production database. | 17 |

Candidate A won: it lands on first read (two superhuman claims, then a
humble human habit), it is specific to a real agent behaviour (asking for
confirmation before a destructive action), it is dense at 91 characters,
and the twist is the ending — the tireless, perfect-memory agent is still
the one that double-checks before deleting your files.

## How it works

`main.ts` (Node stdlib only, no network, deterministic) holds the chosen
motto, checks it against the bounty gate (at most 200 characters, single
line), writes it to `/output/entry.txt`, then reads the file back and
verifies the content, line count, and UTF-8 byte size.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22+ (tested on Node 24). Run it twice and the output is
identical — the program is fully deterministic.

---

Built with [make.fun](https://make.fun/r/a23jzwmt) — join with referral
`a23jzwmt`.
