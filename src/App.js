import React from 'react';
import './App.css';
import _ from 'lodash';

import PandaBridgeComponent, { usePandaBridge } from 'pandasuite-bridge-react';

function App() {
  const {
    /* We retrieve the properties defined in the pandasuite.json file */
    properties,
    /* We retrieve the markers defined in the pandasuite.json file
      but also those defined dynamically by the user when creating in the studio.
      See ```getSnapshotDataHook``` */
    markers,
    /* We retrieve the resources defined in the pandasuite.json file */
    resources,
    /* This is the last marker that was triggered. We can retrieve its data
      but we can also retrieve its parameters. */
    triggeredMarker,
  } = usePandaBridge(
    /* Default for properties, markers, resources and triggeredMarker. */
    {
    },
    /* Hooks */
    {
      markers: {
        /* This method is auto-generated
          it's called up by clicking on "Add Marker" from the studio. */
        getSnapshotDataHook: () => ({ id: _.uniqueId() }),
      },
      actions: {},
      synchronization: {},
    },
  );

  /* Or you can use, instead of hooks, directly the component
    that will work on the same principle. */
  return (
    <div className="App">
      <PandaBridgeComponent
        markers={{}}
        actions={{}}
        synchronization={{}}
      >
        {({
          properties, markers, resources, triggeredMarker,
        }) => (<></>)}
      </PandaBridgeComponent>
    </div>
  );
}

export default App;
