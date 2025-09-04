"use client"

import { useMemo } from 'react'

interface Skill {
  name: string
  category: string
  level: number
  years: number
  projects: string[]
  icon?: string
}

interface SkillChartProps {
  data: Skill[]
  type: 'radar' | 'timeline' | 'bar'
}

type RadarData = {
  category: string
  level: number
}

type TimelineData = {
  name: string
  years: number
}

type BarData = {
  name: string
  level: number
}

type ChartData = RadarData | TimelineData | BarData

export function SkillChart({ data, type }: SkillChartProps) {
  const chartData = useMemo(() => {
    if (type === 'radar') {
      // Group by category and calculate average level
      const categoryData = data.reduce((acc, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = { total: 0, count: 0 }
        }
        acc[skill.category].total += skill.level
        acc[skill.category].count += 1
        return acc
      }, {} as Record<string, { total: number; count: number }>)

      return Object.entries(categoryData).map(([category, { total, count }]) => ({
        category,
        level: Math.round(total / count)
      })) as RadarData[]
    }

    if (type === 'timeline') {
      return data
        .sort((a, b) => b.years - a.years)
        .slice(0, 6)
        .map(skill => ({ name: skill.name, years: skill.years })) as TimelineData[]
    }

    return data.map(skill => ({ name: skill.name, level: skill.level })) as BarData[]
  }, [data, type])

  if (type === 'radar') {
    const radarData = chartData as RadarData[]
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Grid circles */}
            {[2, 4, 6, 8, 10].map(level => (
              <circle
                key={level}
                cx="100"
                cy="100"
                r={level * 8}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-muted-foreground/20"
              />
            ))}
            
            {/* Category lines */}
            {radarData.map((_, index) => {
              const angle = (index * 360) / radarData.length - 90
              const x = 100 + Math.cos(angle * Math.PI / 180) * 80
              const y = 100 + Math.sin(angle * Math.PI / 180) * 80
              return (
                <line
                  key={index}
                  x1="100"
                  y1="100"
                  x2={x}
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-muted-foreground/20"
                />
              )
            })}

            {/* Data polygon */}
            <polygon
              points={radarData.map((item, index) => {
                const angle = (index * 360) / radarData.length - 90
                const radius = item.level * 8
                const x = 100 + Math.cos(angle * Math.PI / 180) * radius
                const y = 100 + Math.sin(angle * Math.PI / 180) * radius
                return `${x},${y}`
              }).join(' ')}
              fill="hsl(var(--primary)/0.2)"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
            />

            {/* Labels */}
            {radarData.map((item, index) => {
              const angle = (index * 360) / radarData.length - 90
              const x = 100 + Math.cos(angle * Math.PI / 180) * 95
              const y = 100 + Math.sin(angle * Math.PI / 180) * 95
              return (
                <text
                  key={item.category}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-xs font-medium"
                  fill="currentColor"
                >
                  {item.category}
                </text>
              )
            })}
          </svg>
        </div>
      </div>
    )
  }

  if (type === 'timeline') {
    const timelineData = chartData as TimelineData[]
    return (
      <div className="space-y-4">
        {timelineData.map((item, index) => (
          <div key={item.name} className="flex items-center space-x-4">
            <div className="w-20 text-sm text-muted-foreground">
              {item.years}+ years
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((item.years / 5) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Bar chart
  const barData = chartData as BarData[]
  return (
    <div className="space-y-3">
      {barData.map((item) => (
        <div key={item.name} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{item.name}</span>
            <span>{item.level}/10</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${item.level * 10}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}