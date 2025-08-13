import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import FormAddPosts from "@/components/FormAddPosts";

const getBoard = async (boardId) => {
  await connectMongo();
  const board = await Board.findById(boardId);
  if (!board) {
    redirect("/");
  }
  return board;
};

export default async function PublicFeedbackBoard({ params }) {
  const { boardId } = params;
  const board = await getBoard(boardId);
  return (
    <main className="min-h-screen bg-base-200">
      Feedback Board: {board.name} (Public)
      <FormAddPosts boardId={boardId} />
    </main>
  );
}
