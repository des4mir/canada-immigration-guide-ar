#!/bin/bash
find src/ -type f -name "*.tsx" -print0 | while IFS= read -r -d $'\0' file; do
  sed -i 's/size={12}/size={16}/g' "$file"
  sed -i 's/size={14}/size={18}/g' "$file"
  sed -i 's/size={16}/size={20}/g' "$file"
done
