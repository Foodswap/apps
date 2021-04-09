#!/bin/bash
set -e
set -x

git checkout prod
git pull
git merge --squash -X theirs dev --no-commit
npm run update:version
git push
git checkout dev
git merge -X theirs prod --no-edit
git push