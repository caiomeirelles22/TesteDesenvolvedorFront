'use client'

import Image from 'next/image'
import { Button } from './Button'

interface DataGridProps {
  data: {
    name: string
    image: string
    id: number
  }[]
  onOpenDrawer: (id: number) => void
}

export function DataGrid({ data, onOpenDrawer }: DataGridProps) {
  return (
    <table className="w-full table-auto border border-solid border-gray-600">
      <thead className="bg-gray-800">
        <tr className="text-gray-100 p-3 text-left text-sm font-medium  uppercase tracking-wider">
          <th className="p-3">Nome</th>
          <th className="p-3 ">Foto</th>
          <th className="p-3 ">Ação</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr
            key={row.id}
            className="bg-white even:bg-gray-300 hover:cursor-pointer hover:bg-gray-400"
            onClick={() => onOpenDrawer(row.id)}
          >
            <td className="p-3 text-sm text-gray-800 whitespace-nowrap capitalize truncate max-w-16">
              {row.name}
            </td>

            <td className="p-3 text-sm text-gray-800 whitespace-nowrap">
              <Image
                src={row.image}
                alt={row.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </td>

            <td className="p-3 text-sm text-gray-800 whitespace-nowrap">
              <Button>Abrir</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
