#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output
cd dist

# place .nojekyll to bypass Jekyll processing 
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B master
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:fuwhis/react-typescript-facial-recognize.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -