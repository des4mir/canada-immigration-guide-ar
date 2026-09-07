#!/bin/bash
find src/ -type f -name "*.tsx" -print0 | while IFS= read -r -d $'\0' file; do
  # Replace text-xs with text-sm
  sed -i 's/text-xs/text-sm/g' "$file"
  # Replace text-[11px] with text-sm
  sed -i 's/text-\[11px\]/text-sm/g' "$file"
  # Replace text-[10px] with text-xs
  sed -i 's/text-\[10px\]/text-xs/g' "$file"
done
