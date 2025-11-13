import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// 📦 Neues Video hinzufügen (POST)
export async function POST(req: Request) {
  try {
    const data = await req.json()
    const video = await prisma.videoapp_videos.create({
      data: {
        title: data.title,
        creator: data.creator,
        videoUrl: data.videoUrl,
        thumbnail: data.thumbnail,
      },
    })
    return NextResponse.json(video)
  } catch (error) {
    console.error("Error creating video:", error)
    return NextResponse.json({ error: "Failed to create video" }, { status: 500 })
  }
}

// 📜 Alle Videos holen (GET)
export async function GET() {
  try {
    const videos = await prisma.videoapp_videos.findMany({
      orderBy: { uploadedAt: "desc" },
    })
    return NextResponse.json(videos)
  } catch (error) {
    console.error("Error fetching videos:", error)
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 })
  }
}
