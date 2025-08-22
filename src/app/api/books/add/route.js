import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("my-self-library");

    const data = await req.json();

    // You can add validation here
    const newBook = {
      name: data.name,
      author: data.author,
      pages: parseInt(data.pages),
      available: data.available === "true" || data.available === true,
      genre: data.genre || "",
      publishedYear: parseInt(data.publishedYear) || null,
      cover: data.cover || "",
      summary: data.summary || "",
    };

    const result = await db.collection("books").insertOne(newBook);

    return new Response(JSON.stringify({ message: "Book added successfully", id: result.insertedId }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
