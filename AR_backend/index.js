import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocket.Server({ port: 8080 }, () => {});
const arr = ["Minh", "Lam", "Duoc", "Roi", "nhe"];

// Mảng lưu trữ các kết nối client
// let clients;

let currentIndex = 0;

// setInterval(() => {
//   clients.send(arr[currentIndex]);
//   currentIndex++;
//   if(currentIndex == 5) {
//     currentIndex = 0;
//   }
//   console.log('Sent data to client:', arr[currentIndex]);

// }, 3000);

// Khi có kết nối mới từ client
wss.on("connection", (ws) => {
  // Thêm kết nối client vào mảng

  // Khi nhận được tin nhắn từ client
  ws.on("message", (message) => {
    console.log(`Received message from client: ${message}`);

    ws.send(arr[currentIndex]);

    currentIndex++;

    if (currentIndex == 5) {
      currentIndex = 0;
    }
  });

  // Khi client đóng kết nối
});

wss.on("listening", () => {
  console.log(`Received message from client: ${wss.port}`);
});
