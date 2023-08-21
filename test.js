const relayArray = [
    { id: 1, relayStatus: 'ON' },
    { id: 2, relayStatus: 'OFF' },
    { id: 3, relayStatus: 'ON' },
    // ... more relay objects
  ];
  
  const relayStatusArray = relayArray.map(x => x.relayStatus);

console.log(relayStatusArray);
