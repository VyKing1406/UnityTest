const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
  console.log('Connected to WebSocket server');
  
  // Gửi tin nhắn tới server
  ws.send('Hello from client');
});

ws.on('message', (message) => {
  console.log('Received message from server:', message);
});

ws.on('close', () => {
  console.log('WebSocket connection closed');
});

ws.on('error', (error) => {
  console.error('WebSocket error:', error);
});