#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-app-demo-video-186628-186706/recipe_app_video_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

