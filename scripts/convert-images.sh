#!/usr/bin/env bash

set -eo pipefail;
cd .. && cd coaching/imgs;

# Loop through all files in the current directory
for file in *; do
  # Extract the filename without the extension
  filename="${file%.*}"

  # Check if the file is not already a .jpg and if the .jpg doesn't exist
  if [[ "$file" != *.jpg ]] && [[ ! -f "$filename.jpg" ]]; then
    # Convert the file to .jpg
    convert "$file" "$filename.jpg"
    echo "Converted $file to $filename.jpg"
  else
    echo "Skipping $file (already a .jpg or .jpg already exists)"
  fi
done