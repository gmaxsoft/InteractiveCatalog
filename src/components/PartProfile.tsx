import { Link, useParams } from 'react-router-dom'
import { partsData } from '../data/partsData'

export function PartProfile() {
  const { id } = useParams<{ id: string }>()
  const numericId = id ? Number.parseInt(id, 10) : NaN
  const part = partsData.find((p) => p.id === numericId)

  if (!part) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <p className="text-slate-600">Nie znaleziono części o podanym numerze.</p>
        <Link
          to="/"
          className="mt-6 inline-block text-blue-600 underline hover:text-blue-800"
        >
          Wróć do schematu
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-lg px-4 py-10">
      <Link
        to={`/?selected=${part.id}`}
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
      >
        ← Wróć do schematu
      </Link>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Profil techniczny
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">{part.name}</h1>

        <dl className="mt-8 space-y-4 border-t border-slate-100 pt-6">
          <div>
            <dt className="text-sm text-slate-500">Numer pozycji (rysunek)</dt>
            <dd className="text-lg font-medium text-slate-900">{part.id}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Numer katalogowy</dt>
            <dd className="text-lg font-medium text-slate-900">{part.catalogNumber}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Nazwa części</dt>
            <dd className="text-slate-800">{part.name}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
