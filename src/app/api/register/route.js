import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    
    // Basic validation
    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("my-self-library"); // change to your DB name
    const usersCollection = db.collection("users");

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
      if (existingUser) {
        console.log("here?")
      return new Response(JSON.stringify({ error: "Email already registered" }), { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };
    await usersCollection.insertOne(newUser);

    return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
