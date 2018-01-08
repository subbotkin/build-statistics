import fetch from 'cross-fetch'
import { dateformat } from 'dateformat'

export const SELECT_PERIOD = 'SELECT_PERIOD'

export function selectPeriod(period) {
  return {
    type: SELECT_PERIOD,
    period
  }
}

export const REQUEST_BUILDS = 'REQUEST_BUILDS'
function requestBuilds(period) {
  return {
    type: REQUEST_BUILDS,
    period
  }
}

export const RECEIVE_BUILDS = 'RECEIVE_BUILDS'
function receiveBuilds(period, json) {
  return {
    type: RECEIVE_BUILDS,
    period,
    buildTime: json.reduce((total, build) => total + build.buildTime, 0)
  }
}

export function fetchBuilds(period) {
  return function (dispatch) {
    dispatch(requestBuilds(period))

    let queryParameters = {
      0 : null,
      1 : "day",
      2 : "week",
      3 : "month"
    }

    function currentDay() {

      var now = new Date();

      return dateformat(now, "dd-mm-yyyy");
    }

    let query = 'https://alohabuildtime.herokuapp.com/builds';

    return fetch(query)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveBuilds(period, json))
      )
  }
}
