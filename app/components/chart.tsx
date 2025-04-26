'use client'

import { useEffect, useRef } from 'react'
import { useWebSocket } from '@/app/context/WebSocketContext'

type ChartProps = {
  type: 'line' | 'bar'
}

export default function Chart({ type }: ChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { userCount } = useWebSocket()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Mock data - replace with real data from WebSocket
    const data = Array.from({ length: 10 }, (_, i) => 
      Math.floor(Math.random() * 100) + (userCount || 0)
    )

    if (type === 'line') {
      drawLineChart(ctx, canvas, data)
    } else {
      drawBarChart(ctx, canvas, data)
    }
  }, [type, userCount])

  const drawLineChart = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, data: number[]) => {
    // Line chart drawing logic
    ctx.beginPath()
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 2
    
    const step = canvas.width / (data.length - 1)
    const max = Math.max(...data) || 100
    
    data.forEach((value, i) => {
      const x = i * step
      const y = canvas.height - (value / max) * canvas.height
      
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    
    ctx.stroke()
  }

  const drawBarChart = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, data: number[]) => {
    // Bar chart drawing logic
    const barWidth = canvas.width / data.length - 2
    const max = Math.max(...data) || 100
    
    data.forEach((value, i) => {
      const x = i * (barWidth + 2)
      const height = (value / max) * canvas.height
      const y = canvas.height - height
      
      ctx.fillStyle = '#10b981'
      ctx.fillRect(x, y, barWidth, height)
    })
  }

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={150}
      className="w-full h-full"
    />
  )
}