import userModel from "@/DL/model/user.model";
import connectDb from "@/DL/db";

export async function POST(request, { params }) {
  const body = await request.json(); // {fullName, nickname, password, email}
  await connectDb();
  await userModel.create(body);
  return new Response("The user has been added successfully", {
    status: 200,
  });
}

export async function GET(request, { params }) {
  try {
    const nickname = params.userId; // get nickname from the params
    await connectDb();
    const res = await userModel.findOne({ nickname });
    return new Response(JSON.stringify({ res }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(error, {
      status: 500,
    });
  }
}
