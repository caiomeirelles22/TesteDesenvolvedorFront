interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Drawer({ isOpen, onClose, children }: DrawerProps) {
  return (
    <>
      <div
        className={`fixed w-full h-full left-0 top-0 z-10 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-72 md:w-96 bg-white shadow-lg transform transition-transform z-20 overflow-scroll ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="p-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          X
        </button>

        <div className="p-4">{children}</div>
      </div>
    </>
  )
}
