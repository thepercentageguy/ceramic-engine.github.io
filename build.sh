#!/bin/bash
cd "$(dirname "$0")"

# Run eleventy
npx @11ty/eleventy

# Remove gitignore files in _site
cd _site
find . -name '.gitignore' -exec rm {} +
cd ..
