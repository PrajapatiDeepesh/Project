import React from 'react';
import BatteryGraph from './components/BatteryGraph';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <Title>Battery Draining Sensor Graph</Title>
      <BatteryGraph />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  text-align: center;
  background-color: #f0f2f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  color: #333;
`;

export default App;



