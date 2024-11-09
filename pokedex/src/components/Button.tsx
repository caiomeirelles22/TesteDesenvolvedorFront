import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  color?: 'gray' | 'green' | 'transparent'
  size?: 'fit' | 'full' | 'md'
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ color, size = 'md', children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `flex gap-2 justify-center items-center px-4 py-2 text-sm font-medium rounded-lg focus:ring-4 focus:outline-none`,
        color === 'gray'
          ? 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-300'
          : color === 'green'
            ? 'bg-green-700 text-white hover:bg-green-800 focus:ring-green-300'
            : 'bg-gray-100 border border-solid border-gray-600',
        size === 'fit' && 'w-fit',
        size === 'full' && 'w-full',
        size === 'md' && 'w-24',
      )}
    >
      {children}
    </button>
  )
}
