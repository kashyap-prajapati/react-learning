import './App.css';
import React from 'react';
import SwaggerUI from 'swagger-ui-react'
import "swagger-ui-react/swagger-ui.css"

function App() {
  
  return (
    <div className="App">
      { /* We also give sample swagger.json file inside the SRC folder }
      {/* External URL where the swagger.json file located or hosted.  */}
      <SwaggerUI url="http://localhost:8080/swagger.json" />

    </div>
  );
  
}



export default App;
