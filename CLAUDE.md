# RankPilot public mirror — guidance for agents

This repository is a scrubbed public snapshot of RankPilot (see `README.md`). Development and production deploys happen in the private home repository.

- Every commit here is public. Commit only scrubbed content written for the mirror: no history, branches or files carried over from the private repository, and no credential of any kind.
- Production deploys run only from the private repository. `.firebaserc` and the `deploy:*` scripts here still target the live project `rankpilot-h3jpc`, so a deploy from this checkout would replace production with the mirror.
- Commit as `digiscalability <digiscalability@gmail.com>` (the repo-local config already does this).
