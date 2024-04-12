import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getRecieverSocketId, io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }
    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //not parallel first conv save then newmessage save
    // await conversation.save();
    // await newMessage.save();

    //this will make both run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    //socket io functionality
    const recieverSocketId = getRecieverSocketId(recieverId);
    if (recieverSocketId) {
      //io.to(socketId).emit() is used to send events to specific client
      io.to(recieverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sending message", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    //populate instead of message references put the actual object over it
    if (!conversation) return res.status(200).json([]);
    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getting message", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
