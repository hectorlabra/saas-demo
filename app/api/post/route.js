import { NextResponse } from "next/server";
import { Filter } from "bad-words";
import connectMongo from "@/libs/mongoose";
import Post from "@/models/Post";
import { auth } from "@/auth";

export async function POST(req) {
  try {
    await connectMongo();
    const session = await auth();
    const boardId = req.nextUrl.searchParams.get("boardId");
    if (!boardId) {
      return NextResponse.json(
        { error: "Missing boardId in query params" },
        { status: 400 }
      );
    }
    const { title, description } = await req.json();
    if (!title || !description) {
      return NextResponse.json(
        { error: "Missing title or description" },
        { status: 400 }
      );
    }
    const filter = new Filter();
    const cleanTitle = filter.clean(title);
    const cleanDescription = filter.clean(description);
    const post = await Post.create({
      title: cleanTitle,
      description: cleanDescription,
      boardId,
      userId: session?.user?.id || undefined,
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
