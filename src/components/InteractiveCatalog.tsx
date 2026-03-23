import { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { partsData } from '../data/partsData'

export function InteractiveCatalog() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const activePartId = useMemo(() => {
    const raw = searchParams.get('selected')
    if (raw == null) return null
    const n = Number.parseInt(raw, 10)
    if (Number.isNaN(n) || !Number.isFinite(n)) return null
    return partsData.some((p) => p.id === n) ? n : null
  }, [searchParams])

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-center text-2xl font-semibold text-slate-800">
        Katalog interaktywny
      </h1>
      <p className="mb-6 text-center text-slate-600">
        Kliknij numer na schemacie, aby zobaczyć profil techniczny części.
      </p>

      <div className="relative w-full">
        <img
          src="/schemat.png"
          alt="Schemat techniczny"
          className="block h-auto w-full select-none"
          draggable={false}
        />

        {partsData.map((part) => {
          const isActive = activePartId === part.id
          return (
            <button
              key={part.id}
              type="button"
              aria-current={isActive ? 'true' : undefined}
              aria-label={`Część ${part.id}: ${part.name}`}
              className={[
                'absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-sm font-bold shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                isActive
                  ? 'z-10 border-amber-500 bg-amber-400 text-amber-950 ring-2 ring-amber-300'
                  : 'z-[1] border-slate-600 bg-white/90 text-slate-800 hover:border-blue-500 hover:bg-blue-50 focus-visible:ring-blue-500',
              ].join(' ')}
              style={{
                left: `${part.leftPercent}%`,
                top: `${part.topPercent}%`,
              }}
              onClick={() => navigate(`/part/${part.id}`)}
            >
              {part.id}
            </button>
          )
        })}
      </div>
    </div>
  )
}
