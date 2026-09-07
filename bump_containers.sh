#!/bin/bash
find src/ -type f -name "*.tsx" -print0 | while IFS= read -r -d $'\0' file; do
  sed -i 's/w-6 h-6/w-8 h-8/g' "$file"
  sed -i 's/w-8 h-8/w-10 h-10/g' "$file"
done
