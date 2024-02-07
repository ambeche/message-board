
@echo off

:: Setting variables
set "frontend=../react-client"
set "serverTitle=Backend Console"
set "clientTitle=Frontend Console"

echo Starting Backend and Frontend of Message-Board app in 2 separate CMD terminals...


:: Starting the server with a custom title
start cmd.exe /c "title %serverTitle% &&  echo %serverTitle% && npm run dev:server"

:: Starting the client with a custom title
start cmd.exe /c "title %clientTitle% && echo %clientTitle% && cd %frontend% && npm run dev"

