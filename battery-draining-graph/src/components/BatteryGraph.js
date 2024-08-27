import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const dataOptions = {
  '3 hours': [
    { name: '00:00', value: 90 },
    { name: '00:20', value: 85 },
    { name: '00:40', value: 80 },
    { name: '01:00', value: 75 },
    { name: '01:20', value: 70 },
    { name: '01:40', value: 65 },
    { name: '02:00', value: 60 },
    { name: '02:20', value: 55 },
    { name: '02:40', value: 50 },
  ],
  '24 hours': [
    { name: '00:00', value: 90 },
    { name: '01:00', value: 85 },
    { name: '02:00', value: 80 },
    { name: '03:00', value: 75 },
    { name: '04:00', value: 70 },
    { name: '05:00', value: 65 },
    { name: '06:00', value: 60 },
    { name: '07:00', value: 55 },
    { name: '08:00', value: 50 },
    { name: '09:00', value: 45 },
    { name: '10:00', value: 40 },
    { name: '11:00', value: 35 },
    { name: '12:00', value: 30 },
    { name: '13:00', value: 25 },
    { name: '14:00', value: 20 },
    { name: '15:00', value: 15 },
    { name: '16:00', value: 10 },
    { name: '17:00', value: 5 },
    { name: '18:00', value: 0 },
  ],
  '7 days': [
    { name: 'Day 1', value: 90 },
    { name: 'Day 2', value: 85 },
    { name: 'Day 3', value: 80 },
    { name: 'Day 4', value: 75 },
    { name: 'Day 5', value: 70 },
    { name: 'Day 6', value: 65 },
    { name: 'Day 7', value: 60 },
  ],
  '30 days': Array.from({ length: 30 }, (v, i) => ({
    name: `Day ${i + 1}`,
    value: Math.max(0, 100 - i * 3),
  })),
  '1 year': [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 95 },
    { name: 'Mar', value: 90 },
    { name: 'Apr', value: 85 },
    { name: 'May', value: 80 },
    { name: 'Jun', value: 75 },
    { name: 'Jul', value: 70 },
    { name: 'Aug', value: 65 },
    { name: 'Sep', value: 60 },
    { name: 'Oct', value: 55 },
    { name: 'Nov', value: 50 },
    { name: 'Dec', value: 45 },
  ],
};

const BatteryGraph = () => {
  const [selectedData, setSelectedData] = useState('3 hours');

  return (
    <Container>
      <ButtonContainer>
        {Object.keys(dataOptions).map((key) => (
          <GraphButton key={key} onClick={() => setSelectedData(key)}>
            {key}
          </GraphButton>
        ))}
      </ButtonContainer>
      <GraphContainer>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={dataOptions[selectedData]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </GraphContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

const GraphButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 20px;
  background: linear-gradient(90deg, #f79533, #f37055);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #f37055, #ef4e7b);
  }
`;

const GraphContainer = styled.div`
  width: 80%;
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default BatteryGraph;



