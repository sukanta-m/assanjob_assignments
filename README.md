## Branches

* `master`
  This branch contains solutions to the challenges.

## Challenges

#### 1. Custom JSON parser
  * run `CustomJSON.parse(str)`

#### 2. Web App using GRAPHQL:
  * go to `cd assignment2`
  * run `npm i`
  * run `npm start` to start app
  * to test PWA 
    * run `npm run start-sw`
    * navigate to `127.0.0.1:8080` in your Chrome browser
    * then open chrome devtool
    * then select to `audit` tab
    * then scroll down and select `Progressive Web App` checkbox
    * then click audit button
    * To check for page caching
      * Select `Application` tab in devtool
      * Select `offnile` checkbox
      * Then select `Network` tab and reload the page, you can see the static contents
  * run `npm test` to run test
  * one sample pwa audit html file added in root dir `pwa-audit-sample.html` on production mode
  * for request cancelling here `axios` cancelToken feature used. You can check in ./components/src/utils/cancelRequest.js. Used in cantinate.action.js file