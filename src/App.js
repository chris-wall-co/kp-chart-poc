import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'zingchart/es6';
import { Poller } from './state/poller';
import { ActionCreators, initStore } from './state/store';
import { API } from './state/api';
import { PatchStatusChart } from './components/PatchStatusChart';
import { ComplianceChart } from './components/ComplianceChart';

function App() {

  const [store, setStore] = React.useState(initStore({ data: {} }));

  const onInterval = async () => {
    const result = await API.getPatchStatus();
    console.log('[App::onInterval] got result', result);
    store.dispatch(ActionCreators.setData(result));

    const cr = await API.getComplianceByUpdate();
    console.log('[App::onInterval] compliance:', cr);
    store.dispatch(ActionCreators.setCompliance(cr));
  };

  const poller = new Poller(onInterval);

  React.useEffect(() => {
    onInterval();
    poller.start();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <PatchStatusChart />
          <ComplianceChart />
        </header>
      </div>
    </Provider>
  );
}

export default App;
