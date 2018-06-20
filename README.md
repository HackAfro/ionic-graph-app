# Ionic-Realtime-Data-Visualization
Realtime data visualisation using Pusher and Ionic

## Prerequisites
- [Ionic](https://ionicframework.com/)
- [Express](https://expressjs.com/)
- [Pusher](https://pusher.com)
- [ChartJs](http://www.chartjs.org/)
- A [Pusher account](https://pusher.com/signup) and [Pusher app credentials](http://dashboard.pusher.com/)


## Getting started
- Clone the project and install dependencies:
- Create a file named `.env`. Update the `.env` file with the content below:

```
PUSHER_APP_ID=app-id
PUSHER_APP_KEY=app-key
PUSHER_APP_SECRET=app-secret
PUSHER_CLUSTER=cluster

```

- Update the `pusher.ts` file with your pusher key

> **Note**: ensure to replace the placeholder values with your pusher `appId`, `key` and `secret`.

- Clone the repo
- Run npm install 
- Start server by running `node server`
- Run `ionic serve` to start the Ionic dev server 


## Built With

* [Pusher](https://pusher.com/) 
* [Ionic](https://ionicframework.com/)
* [Express](https://expressjs.com/)
* [Pusher](https://pusher.com)
* [ng2-charts](https://valor-software.com/ng2-charts/) 
