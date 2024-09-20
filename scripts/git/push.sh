#!/usr/bin/env bash

set -eo pipefail

ssh-add -D
ssh-add ~/.ssh/id_ed25519

git add -A || {
  echo 'Could not add files. Something is off. Exiting.';
  exit 1;
}

# Check if a commit message is provided
if [ -z "$1" ]; then
  # Use a default commit message if none is provided
  COMMIT_MSG="chore: tmp"
else
  COMMIT_MSG="$1"
fi

echo 'Attempting to create a new commit...';

git commit -am "${COMMIT_MSG}" && echo 'Created new commit' || {
  echo 'Could not create a new commit.'
}

echo 'Attempting to push whatever is not already on remote...';

git push || {
  echo 'could not push'
}