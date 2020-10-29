import React from 'react';

import GloboalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>

      <GloboalStyles />
    </>
  );
}

export default App;
