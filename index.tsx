"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [colors, setColors] = useState({
    primary: "#3b82f6",
    secondary: "#10b981",
    accent: "#f59e0b",
    background: "#ffffff",
    text: "#1f2937",
  })

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColors({ ...colors, [e.target.name]: e.target.value })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Color Palette Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Choose Your Colors</CardTitle>
            <CardDescription>Select colors for your palette</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(colors).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <Label htmlFor={key} className="w-24 capitalize">
                  {key}
                </Label>
                <Input
                  type="color"
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleColorChange}
                  className="w-16 h-10"
                />
                <Input
                  type="text"
                  value={value}
                  onChange={handleColorChange}
                  name={key}
                  className="w-28"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
            <CardDescription>See how your colors look on a website</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              style={{ backgroundColor: colors.background, color: colors.text }}
              className="p-4 rounded-lg shadow-inner"
            >
              <header
                style={{ backgroundColor: colors.primary }}
                className="p-4 rounded-t-lg text-white mb-4"
              >
                <h2 className="text-2xl font-bold">Website Header</h2>
              </header>
              <main className="space-y-4">
                <p>This is how your website could look with the selected color palette.</p>
                <Button style={{ backgroundColor: colors.secondary, color: colors.background }}>
                  Secondary Button
                </Button>
                <Button style={{ backgroundColor: colors.accent, color: colors.background }}>
                  Accent Button
                </Button>
                <div
                  style={{ backgroundColor: colors.primary, color: colors.background }}
                  className="p-4 rounded-lg mt-4"
                >
                  <h3 className="text-xl font-semibold mb-2">Primary Section</h3>
                  <p>Content in the primary color section.</p>
                </div>
              </main>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}