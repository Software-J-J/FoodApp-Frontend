import { simonPostres } from '@/app/tempData/simon-postres'

export default function Filters() {
  const { filters } = simonPostres
  return (
    <section className="grid grid-cols-3 mx-2 gap-1">
      {filters.map((tipoFiltro) => (
        <select
          key={tipoFiltro.id}
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
          defaultValue={'none'}
        >
          <option value="none" disabled hidden>
            {tipoFiltro.titulo}
          </option>
          {tipoFiltro.opciones.map((c, _idx) => (
            <option key={_idx} value={c.valor}>
              {c.label}
            </option>
          ))}
        </select>
      ))}
    </section>
  )
}
