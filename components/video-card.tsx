"use client"

import { useState } from "react"
import Link from "next/link"
import { Play } from "lucide-react"
import type { Video } from "@/lib/types"

const CREATOR_COLORS: { [key: string]: string } = {
  "weasel-newz": "from-blue-600 to-blue-800",
  "major-label": "from-purple-600 to-purple-800",
}

interface VideoCardProps {
  video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const gradient = CREATOR_COLORS[video.creator] || "from-gray-600 to-gray-800"

  return (
    <Link href={`/video/${video.id}`}>
      <div className="group cursor-pointer">
        <div
          className="relative h-40 sm:h-48 bg-gradient-to-br rounded-lg overflow-hidden border border-border transition-all duration-300"
          style={{
  backgroundImage: video.thumbnail ? `url(${encodeURI(video.thumbnail)})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {!video.thumbnail && (
            <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              <Play className="w-12 h-12 text-white/60" />
            </div>
          )}

          {isHovering && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-200">
              <Play className="w-12 h-12 text-white fill-white" />
            </div>
          )}
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors text-sm sm:text-base">
            {video.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">{video.creator}</p>
          <p className="text-xs text-muted-foreground">{new Date(video.uploadedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  )
}
