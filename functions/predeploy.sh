#!/bin/bash

# Check if an environment argument is provided
if [ -z "$1" ]; then
  echo "Error: No environment argument provided."
  echo "Usage: ./predeploy.sh [production|dev]"
  exit 1
fi

ENV=$1

# Remove the .runtimeconfig.json file
rm -rf ./.runtimeconfig.json

# Switch to the specified Firebase project
firebase use $ENV

# Set the Firebase functions environment configurations
firebase functions:config:set env="$(cat ./env.$ENV.json)"
