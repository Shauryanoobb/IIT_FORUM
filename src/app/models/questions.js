import mongoose, { Schema, model, models } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const QuestionSchema = new Schema({
    is_anonymous: { type: Boolean, default: false },
    user_id: { type: Schema.Types.ObjectId, ref: 'User'},
    title: { type: String, required: true },
    question_body:  { type: String, },
    tags: { type: String, enum: ['IIT Bombay', 'IIT Delhi', 'IIT Kanpur', 'IIT Kharagpur', 'IIT Madras', 'IIT Roorkee', 'IIT Indore'], required: true },
    answer: [
        { mentor_id: Schema.Types.ObjectId, text: String }
    ],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    share_count: { type: Number, default: 0 },
    view_count:  { type: Number, default: 0 },
}, { timestamps: true });

const Question = models.Question || model("Question", QuestionSchema);

export default Question;