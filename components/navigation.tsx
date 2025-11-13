"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

interface NavigationProps {
  onMenuToggle?: () => void
}

export function Navigation({ onMenuToggle }: NavigationProps) {
  return (
    <nav className="fixed top-10 w-full bg-card border-b border-border z-50 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <span className="text-xs font-bold text-accent-foreground">PT</span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-foreground hidden sm:block">PlaceTube</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 hover:bg-background rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </nav>
  )
}
