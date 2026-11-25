#!/usr/bin/env bash
set -euo pipefail

readme="${1:-.}/README.md"
if [[ ! -f "$readme" ]] || ! grep -q '[^[:space:]]' "$readme"; then
  printf 'NAMED STOP [README_MISSING_OR_BLANK] No project overview found at %s\n' "$readme" >&2
  exit 1
fi
printf 'OUTPUT 1 repository file validated\n'
