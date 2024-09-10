#!/usr/bin/env bash

set -eo pipefail
git add -A

# Check if a commit message is provided
if [ -z "$1" ]; then
  # Use a default commit message if none is provided
  COMMIT_MSG="chore: tmp"
else
  COMMIT_MSG="$1"
fi

git commit -am "${COMMIT_MSG}"
git push || {
  echo 'could not push'
}