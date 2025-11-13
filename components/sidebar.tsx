"use client"

import { Button } from "@/components/ui/button"
const CREATORS = [
  { id: "Weazel News", name: "Weazel News", color: "bg-blue-600" },
  { id: "Major Label Studios", name: "Major Label Studios", color: "bg-purple-600" },
]

interface SidebarProps {
  selectedCreator: string | null
  onCreatorChange: (creator: string | null) => void
}

export function Sidebar({ selectedCreator, onCreatorChange }: SidebarProps) {
  return (
    <aside className="w-full lg:w-64 bg-card border-b lg:border-b-0 lg:border-r border-border p-4 sm:p-6 overflow-y-auto">
      <h2 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Creators</h2>

      <div className="space-y-2">
        <Button
          variant={selectedCreator === null ? "default" : "outline"}
          size="sm"
          className="w-full justify-start text-xs sm:text-sm"
          onClick={() => onCreatorChange(null)}
        >
          Alle Kanäle
        </Button>

        {CREATORS.map((creator) => (
          <Button
            key={creator.id}
            variant={selectedCreator === creator.id ? "default" : "outline"}
            size="sm"
            className="w-full justify-start text-xs sm:text-sm"
            onClick={() => onCreatorChange(creator.id)}
          >
            <span className={`w-2 h-2 rounded-full mr-2 flex-shrink-0 ${creator.color}`}></span>
            {creator.name}
          </Button>
        ))}
      </div>
    </aside>
  )
}
