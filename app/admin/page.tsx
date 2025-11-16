"use client"
import { useSession, signIn } from "next-auth/react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Trash2, Edit2, Save, X } from "lucide-react"

interface Video {
  id: string
  title: string
  creator: string
  videoUrl: string
  thumbnail?: string
  uploadedAt: string
}

const ALLOWED_DISCORD_IDS = [
  "360499054188298251"
]


const CREATORS = [
  { id: "Weazel News", name: "Weazel News Creator" },
  { id: "Major Label Studios", name: "Major Label Studios Creator" },
]

export default function AdminPage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [title, setTitle] = useState("")
  const [creator, setCreator] = useState("Weazel News")
  const [videoUrl, setVideoUrl] = useState("")
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [thumbnailPreview, setThumbnailPreview] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState("")

  // 🔹 Videos laden
  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = async () => {
    const res = await fetch("/api/videos")
    const data = await res.json()
    setVideos(data)
  }

  // 🔹 Neues Video hinzufügen
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)

    let thumbnailPath: string | undefined
    if (thumbnailFile) {
      const formData = new FormData()
      formData.append("file", thumbnailFile)
      const uploadRes = await fetch("/api/upload", { method: "POST", body: formData })
      const { url } = await uploadRes.json()
      thumbnailPath = url
    }

    const res = await fetch("/api/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, creator, videoUrl, thumbnail: thumbnailPath }),
    })
    if (res.ok) {
      setSuccessMessage("Video added successfully")
      setTitle("")
      setVideoUrl("")
      setThumbnailFile(null)
      setThumbnailPreview("")
      fetchVideos()
    } else {
      alert("Failed to add video")
    }
    setIsUploading(false)
  }

  // 🔹 Bearbeiten
  const handleUpdate = async (id: string, updated: Partial<Video>) => {
    const res = await fetch(`/api/videos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    })
    if (res.ok) {
      fetchVideos()
      setEditingId(null)
    } else {
      alert("Update failed")
    }
  }

  // 🔹 Löschen
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return
    const res = await fetch(`/api/videos/${id}`, { method: "DELETE" })
    if (res.ok) fetchVideos()
    else alert("Failed to delete")
  }
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p className="text-center mt-20">Checking login…</p>
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={() => signIn("discord")}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl"
        >
          Login with Discord
        </button>
      </div>
    )
  }

    // 🔍 DEBUG LOG: erscheint in Chrome DevTools
  console.log("Eingeloggter Discord User:", session.user)
  console.log("Discord ID:", session.user.id)

  // 🔒 Allowlist Check
  if (!ALLOWED_DISCORD_IDS.includes(session.user.id)) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-3">
        <p className="text-red-600 text-lg font-semibold">
          Kein Zugriff Bruder ❌
        </p>
        <p className="text-muted-foreground">
          Deine Discord-ID ist nicht whitelisted.
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 w-full bg-card border-b border-border z-50 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto flex-wrap gap-4">
          <Link href="/" className="text-accent hover:text-accent/80 font-semibold text-sm sm:text-base">
            ← Back to Videos
          </Link>
          <h1 className="text-lg sm:text-xl font-bold text-foreground">Admin Panel</h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Upload Section */}
      <div className="pt-24 px-4 pb-8 sm:pt-28 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Add Video</CardTitle>
            <CardDescription>Paste your CDN video URL and thumbnail</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
              <select
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
                className="w-full border rounded p-2"
              >
                {CREATORS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <Input
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Video URL"
              />
              <input type="file" accept="image/*" onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)} />
              <Button disabled={isUploading} type="submit" className="w-full bg-accent text-accent-foreground">
                {isUploading ? "Uploading..." : "Add Video"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Erfolg */}
        {successMessage && (
          <p className="text-green-500 text-center mt-4">{successMessage}</p>
        )}

        {/* Alle Videos */}
        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-bold">All Videos</h2>
          {videos.map((v) => (
            <Card key={v.id} className="p-4">
              {editingId === v.id ? (
                <div className="space-y-2">
                  <Input
                    value={v.title}
                    onChange={(e) =>
                      setVideos((prev) =>
                        prev.map((vid) => (vid.id === v.id ? { ...vid, title: e.target.value } : vid))
                      )
                    }
                  />
                  <Input
                    value={v.videoUrl}
                    onChange={(e) =>
                      setVideos((prev) =>
                        prev.map((vid) => (vid.id === v.id ? { ...vid, videoUrl: e.target.value } : vid))
                      )
                    }
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleUpdate(v.id, v)}>
                      <Save className="w-4 h-4 mr-1" /> Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setEditingId(null)}>
                      <X className="w-4 h-4 mr-1" /> Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{v.title}</p>
                    <p className="text-sm text-muted-foreground">{v.creator}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" onClick={() => setEditingId(v.id)}>
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="destructive" onClick={() => {
                       console.log("Deleting:", v.id)
                      handleDelete(v.id)}}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
