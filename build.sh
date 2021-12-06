#!/bin/bash
cd "$(dirname "$0")"

# Remove gitignore files in content
cd content
find . -name '.gitignore' -exec rm {} +
cd ..

# Run eleventy
npx @11ty/eleventy
