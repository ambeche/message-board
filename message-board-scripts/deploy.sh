#!/bin/bash

PURPLE="\033[0;35m"
NC='\033[0m' # No Color

uiBuild="./react-client/dist"

echo -e "${PURPLE}Removing previous builds...${NC}" &&

  # Removes any previous builds
  rm -rf ./build ${uiBuild} && echo "done"

# Checks the new project build, commits the static UI (dist) and deploys to Heroku
npm run build && git add ${uiBuild} && git commit -m "deploy: Added react-ui build for heroku deployment" && git push heroku master
