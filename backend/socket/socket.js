import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getRecieverSocketId = (recieverId) => {
  return userSocketMap[recieverId];
};

const userSocketMap = {}; //{userid, socketid}

//listening to connection
io.on("connection", (socket) => {
  console.log("user Connected ", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != undefined) {
    userSocketMap[userId] = socket.id;
  }
  //emit is used to send events to all connnected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  //socket.on used to listen to events can be used on both client and server side
  socket.on("disconnect", () => {
    console.log("user disconnected ", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});
export { app, io, server };
