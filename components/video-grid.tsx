"use client"

import { VideoCard } from "@/components/video-card"
import type { Video } from "@/lib/types"

interface VideoGridProps {
  videos: Video[]
}

export function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  )
}
