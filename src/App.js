import React,{Component} from 'react'
import RouterIndex from './router/index'
import { Provider } from 'react-redux'
import {store,persistor} from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'
export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterIndex/>
        </PersistGate>
      </Provider>
    );
  }
}

