import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("my-self-library");

    const book = await db
      .collection("books")
      .findOne({ _id: new ObjectId(params.id) });

    if (!book) {
      return new Response(JSON.stringify({ error: "Book not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(book), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
