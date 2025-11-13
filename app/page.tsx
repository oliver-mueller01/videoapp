"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { VideoGrid } from "@/components/video-grid"
import { Navigation } from "@/components/navigation"
import type { Video } from "@/lib/types"

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([])
  const [selectedCreator, setSelectedCreator] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  // 🔥 Neue Version: holt Videos direkt aus der Prisma-API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/videos")
        if (!res.ok) throw new Error("Failed to fetch videos")
        const data = await res.json()
        setVideos(data)
      } catch (error) {
        console.error("❌ Error fetching videos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  const filteredVideos = selectedCreator
    ? videos.filter((v) => v.creator === selectedCreator)
    : videos

  const latestVideos = filteredVideos
    .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-background">
      <Navigation onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex h-screen overflow-hidden pt-16">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } lg:block w-full lg:w-64 fixed lg:relative z-40 lg:z-auto h-full lg:h-auto`}
        >
          <Sidebar
            selectedCreator={selectedCreator}
            onCreatorChange={(creator) => {
              setSelectedCreator(creator)
              setSidebarOpen(false)
            }}
          />
        </div>

        {/* Overlay bei Mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main */}
        <main className="flex-1 overflow-auto w-full">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                {selectedCreator ? `${selectedCreator} Videos` : "Neuer Content"}
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                {selectedCreator
                  ? `Alle Videos von ${selectedCreator}`
                  : "Die neusten Videos!"}
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-base sm:text-lg">
                  Loading videos...
                </p>
              </div>
            ) : latestVideos.length > 0 ? (
              <VideoGrid videos={latestVideos} />
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-base sm:text-lg">
                  No videos available
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
