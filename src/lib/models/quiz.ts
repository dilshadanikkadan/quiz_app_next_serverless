import mongoose, { Schema, Document, model } from "mongoose";
import { QuestionModel } from './question';
import { IQuestion } from "./question"; 

export interface IQuiz extends Document {
  title: string;
  thumbnail: string;
  questions: IQuestion[];
}

const quizSchema = new Schema<IQuiz>({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});

const QuizModel = mongoose.models.Quiz || model<IQuiz>("Quiz", quizSchema);
export { QuizModel };
  