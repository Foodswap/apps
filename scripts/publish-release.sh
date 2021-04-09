#!/bin/bash
set -e
set -x

git checkout prod
git pull
git merge -X theirs dev --no-edit
npm run update:version
git push
git checkout dev
git merge -X theirs prod --no-edit
git push