#!/bin/bash
find src/ -type f -name "*.tsx" -print0 | while IFS= read -r -d $'\0' file; do
  # Replace text-sm with text-base
  sed -i 's/text-sm/text-base/g' "$file"
  # Replace text-xs with text-sm
  sed -i 's/text-xs/text-sm/g' "$file"
done
