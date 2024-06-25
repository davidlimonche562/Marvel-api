
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Paginacion = ({ paginaActual, totalPaginas, setPaginaActual }) => {
  // Función para generar los números de página con lógica de "..."
  const generarNumerosDePagina = () => {
    let paginas = [];
    const maxVisiblePages = 6;

    if (totalPaginas <= maxVisiblePages) {
      // Si hay menos páginas que el máximo visible, muestra todas
      for (let i = 1; i <= totalPaginas; i++) {
        paginas.push(i);
      }
    } else {
      paginas.push(1);

      if (paginaActual > 3) {
        paginas.push('...');
      }

      const startPage = Math.max(2, paginaActual - 1);
      const endPage = Math.min(totalPaginas - 1, paginaActual + 1);

      for (let i = startPage; i <= endPage; i++) {
        paginas.push(i);
      }

      if (paginaActual < totalPaginas - 2) {
        paginas.push('...');
      }

      paginas.push(totalPaginas);
    }

    return paginas;
  };

  const paginas = generarNumerosDePagina();

  if (totalPaginas <= 1) return null; // Ocultar la paginación si solo hay una página

  return (
    <div className="flex items-center justify-center py-3 ">
      <div className="hidden sm:flex">
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <button
            onClick={() => setPaginaActual(paginaActual - 1)}
            disabled={paginaActual === 1}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-rojo-marvel-oscuro focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Anterior</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          {paginas.map((numero, index) => (
            <button
              key={index}
              onClick={() => numero !== '...' && setPaginaActual(numero)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${numero === paginaActual ? 'bg-rojo-marvel text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-rojo-marvel-oscuro focus:outline-offset-0'}`}
            >
              {numero}
            </button>
          ))}
          <button
            onClick={() => setPaginaActual(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-rojo-marvel-oscuro focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Siguiente</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
      <div className="sm:hidden flex justify-between w-full px-4">
        <button
          onClick={() => setPaginaActual(paginaActual - 1)}
          disabled={paginaActual === 1}
          className="relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-rojo-marvel-oscuro"
        >
          Anterior
        </button>
        <button
          onClick={() => setPaginaActual(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-rojo-marvel-oscuro"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Paginacion;
