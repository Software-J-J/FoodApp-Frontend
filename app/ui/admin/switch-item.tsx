'use client'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'
import { Product } from '@/app/lib/types'

export const SwitchAvailable = ({ item }: { item: Product }) => {
  const { id, name, available } = item

  const [availableValue, setAvailableValue] = useState(available)

  const handleAvailable = () => {
    setAvailableValue(!availableValue)
  }
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-200 rounded">
      {/*TODO: Este switch es un button y da error de html */}
      <Switch
        onClick={(ev) => ev.stopPropagation()}
        checked={availableValue}
        color="cyan"
        id={`${id}`}
        onCheckedChange={handleAvailable}
      />
      <Label htmlFor={`${id}`}>{name}</Label>
    </div>
  )
}
