1. pertama install dependencies
$ npm install express socket.io

2. create server routes :
// filepath: /server/routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const { getMessages, sendMessage } = require('../controllers/chatController');
const auth = require('../middleware/auth');

router.get('/messages', auth, getMessages);
router.post('/message', auth, sendMessage);

module.exports = router;

3.chat controller :
// filepath: /server/controllers/chatController.js
const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.sendMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const message = new Message({ text, user: req.user.id });
    await message.save();
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

4.create model :
// filepath: /server/models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);

5. socket.io set up :
// filepath: /server/server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use('/api/chat', chatRoutes);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));