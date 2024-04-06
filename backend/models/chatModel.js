const mongoose = require("mongoose");


const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [{
            type: mongoose.Schema.Type.ObjectId,
            ref: "User",
        },
        ],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    },
    {
        timestamp: true,
    }

)


const Chat = mongoose.model("chat", chatModel);

module.exports = Chat;

// chatName
// isGroupChat
// users
// lastMessage
// groupAdmin

