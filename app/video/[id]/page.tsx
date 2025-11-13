"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2 } from "lucide-react"
import type { Video } from "@/lib/types"

export default function VideoPage() {
  const { id } = useParams() as { id: string }
  const [video, setVideo] = useState<Video | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    const fetchVideo = async () => {
      try {
        const res = await fetch(`/api/videos/${id}`, { cache: "no-store" })
        if (!res.ok) {
          const text = await res.text()
          throw new Error(`Fetch failed (${res.status}): ${text}`)
        }
        const data = await res.json()
        setVideo(data)
      } catch (e: any) {
        console.error(e)
        setError(e?.message ?? "Unknown error")
      } finally {
        setLoading(false)
      }
    }
    fetchVideo()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (error || !video) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center flex-col gap-4">
        <p className="text-muted-foreground text-lg">
          {error ? `Error: ${error}` : "Video not found"}
        </p>
        <Link href="/"><Button variant="outline">Back to Videos</Button></Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-10 w-full bg-card border-b border-border z-50 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-wite" />
            <span className="text-white font-semibold hidden sm:inline">Zurück</span>
          </Link>
          <h1 className="text-lg sm:text-xl font-bold text-foreground flex-1 ml-4 line-clamp-1">PlaceTube</h1>
        </div>
      </div>

      <div className="pt-30 pb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6 border border-border">
              <video src={video.videoUrl} controls controlsList="nodownload" className="w-full h-full" />
            </div>

            <div className="space-y-4">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">{video.title}</h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground">
                  <span>{video.creator}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{new Date(video.uploadedAt).toLocaleDateString()}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
