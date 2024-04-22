import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";

interface Tag {
  id: string;
  isActive: boolean;
  name: string;
}

export const POST = async (req: NextRequest) => {
  try {
    // Parse the request body
    const { tags } = await req.json();

    if (!Array.isArray(tags)) {
      return NextResponse.json({ message: "Invalid Tag" }, { status: 401 });
    }

    // Retrieve all existing tags from the database
    const existingTags: Tag[] = await db.tag.findMany();
    const tagNames: string[] = existingTags.map((tag) => tag.name);

    // Check if any of the tags already exist
    const duplicateTags: string[] = tags.filter((tag) =>
      tagNames.includes(tag)
    );

    if (duplicateTags.length > 0) {
      // If any tags already exist, return an error response
      return NextResponse.json(
        {
          message: `The following tags already exist: ${duplicateTags.join(
            ", "
          )}`,
        },
        { status: 401 }
      );
    }

    // Create new tags and save them to the database concurrently
    await Promise.all(
      tags.map((tag) => db.tag.create({ data: { name: tag } }))
    );

    // Send a response with the newly created tags
    return NextResponse.json(
      { message: "tags added successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
