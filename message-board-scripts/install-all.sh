#!/bin/bash

GREEN='\033[0;32m'
BLUE="\033[0;34m"
BBLUE="\033[1;34m"
UBLUE="\033[4;34m"
PURPLE="\033[0;35m"
BPURPLE="\033[1;35m"
UPURPLE="\033[4;35m"
NC='\033[0m' # No Color

frontend="./react-client"

echo "----------------" &&
  echo -e "${PURPLE}Installing Backend dependencies...${NC}" &&
  echo "----------------" &&
  npm install && cd ${frontend} &&
  echo -e "${PURPLE}Now installing Frontend dependencies...${NC}" &&
  npm install &&
  echo -e "----------------" &&
  echo -e "${GREEN}Installations completed successfully!${NC}"
echo -e "           "
echo -e "${UPURPLE} You can now run both the react-client and the server of ${UBLUE}Message-Board app ${UPURPLE}in a single command:${NC}"
echo -e "           "
echo -e " =>  ${BBLUE}npm run dev ${NC}"
