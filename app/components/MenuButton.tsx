import { cn } from '~/lib/utils'

export function MenuButton({
  isExpanded,
  toggleExpanded,
}: {
  isExpanded: boolean
  toggleExpanded: () => void
}) {
  return (
    <button
      className={cn(
        'border-primary h-8 w-9 rounded-md border shadow-sm lg:hidden',
        isExpanded && 'bg-primary'
      )}
      onClick={toggleExpanded}
    >
      <div className="relative flex flex-col items-center justify-center gap-1 p-2">
        <div
          className={`bg-primary h-0.5 w-4 rounded-md transition-all duration-300 ease-in-out ${isExpanded && 'absolute rotate-45 bg-white'}`}
        ></div>
        <div
          className={`bg-primary h-0.5 w-4 rounded-md transition-all duration-300 ease-in-out ${isExpanded && 'absolute hidden bg-white'}`}
        ></div>
        <div
          className={`bg-primary h-0.5 w-4 rounded-md transition-all duration-300 ease-in-out ${isExpanded && 'absolute -rotate-45 bg-white'}`}
        ></div>
      </div>
    </button>
  )
}
