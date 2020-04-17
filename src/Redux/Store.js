import { createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer} from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage'

import rootReducer from './Reducer/Index'
const config = {
  key: 'PayLive',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(config, rootReducer)

export const store = createStore(
  persistedReducer, applyMiddleware(logger, thunk)
)

export const persistor = persistStore(store)