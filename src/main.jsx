import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import { store } from './reduxTodo/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './reduxTodo/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
