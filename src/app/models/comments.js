const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

// Define the schema for the "Comment" model
const CommentSchema = new Schema({
  text: { type: String, required: true },  // Comment text, required field
  upvotes: { type: Number, default: 0 },   // Upvote count, default is 0
  downvotes: { type: Number, default: 0 }  // Downvote count, default is 0
}, { timestamps: true });  // Adds createdAt and updatedAt fields automatically

// Create the model
const Comment = models.Comment || model("Comment", CommentSchema);

// Export the model
module.exports = Comment;
