import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Home from './Components/Home';
import Layout from './Components/Layout';
import AnotherSection from './Components/AnotherSection';

class App extends Component {
  render() {
    return (
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home />} />
{/*             <Route path="anotherElement" element={<AnotherSection />} />
 */}          </Routes>
        </BrowserRouter>,
      </Layout>
    );
  }
}

export default App;
