import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"


// 📦 EINZELNES VIDEO LADEN
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params // Promise auflösen
  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 })
  }

  try {
    const video = await prisma.videoapp_videos.findUnique({
      where: { id },
    })

    if (!video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 })
    }

    return NextResponse.json(video)
  } catch (error) {
    console.error("❌ Error fetching video:", error)
    return NextResponse.json({ error: "Failed to fetch video" }, { status: 500 })
  }
}
// ✅ VIDEO AKTUALISIEREN (PUT)
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params // wichtig: Promise auflösen
  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 })
  }

  try {
    const data = await req.json()
    const updated = await prisma.videoapp_videos.update({
      where: { id },
      data,
    })
    return NextResponse.json(updated)
  } catch (error) {
    console.error("❌ Error updating video:", error)
    return NextResponse.json({ error: "Failed to update video" }, { status: 500 })
  }
}


export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params // ✅ Promise auflösen

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 })
  }

  try {
    await prisma.videoapp_videos.delete({
      where: { id },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("❌ Error deleting video:", error)
    return NextResponse.json({ error: "Failed to delete video" }, { status: 500 })
  }
}
