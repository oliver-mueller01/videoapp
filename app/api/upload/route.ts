import { NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import path from "path"

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get("file") as File | null

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
  }

  // Erstelle den Upload-Ordner (z. B. /public/uploads/thumbnails)
  const uploadDir = path.join(process.cwd(), "public", "uploads", "thumbnails")
  await mkdir(uploadDir, { recursive: true })

  // Erstelle einen Dateinamen
  const fileName = `${Date.now()}-${file.name}`
  const filePath = path.join(uploadDir, fileName)

  // Datei als Buffer speichern
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  await writeFile(filePath, buffer)

  // URL zurückgeben (die der Client verwenden kann)
  const fileUrl = `/uploads/thumbnails/${fileName}`
  return NextResponse.json({ url: fileUrl })
}
