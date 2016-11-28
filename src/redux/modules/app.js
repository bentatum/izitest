
import client from 'api-client'
import { sortBy } from 'lodash'
import { AWAIT_MARKER } from 'redux-await'
export const GET_MEMORIALS = 'requiem/app/getMemorials'
export const SORT_MEMORIALS_BY_NAME = 'requiem/app/sortMemorialsByName'

const initialState = {
  memorials: []
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_MEMORIALS:
      return {
        ...state,
        memorials: sortBy(action.payload[action.type].data, 'creationDate')
      }
    case SORT_MEMORIALS_BY_NAME:
      return {
        ...state,
        memorials: sortBy(state.memorials, x => x.name && x.name.last)
      }
    default:
      return state
  }
}

export function getMemorials () {
  return {
    type: GET_MEMORIALS,
    AWAIT_MARKER,
    payload: {
      [GET_MEMORIALS]: client.get('memorial/random')
    }
  }
}

export function sortMemorialsByName () {
  return {
    type: SORT_MEMORIALS_BY_NAME
  }
}
