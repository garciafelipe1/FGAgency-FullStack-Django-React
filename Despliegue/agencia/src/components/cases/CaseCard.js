import { Link } from "react-router-dom";

/**
 * Tarjeta de caso de estudio — diseño unificado (Home + /casos).
 * Sistema: elevación sutil (shadow-md → shadow-xl hover), radio consistente (rounded-xl),
 * tipografía en jerarquía clara (categoría / título / descripción), acento naranja solo en hover del título.
 */
function CaseCard({ data, index }) {
  const href = data.href || "#";
  const isClickable = href && href !== "#";

  const content = (
    <>
      <div className="flex-shrink-0 overflow-hidden rounded-t-xl">
        <img
          src={data.imageUrl}
          alt=""
          className="h-80 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between rounded-b-xl bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
            {data.category?.name ?? "Proyecto"}
          </p>
          <p className="mt-2 text-2xl font-semibold leading-tight text-gray-900 transition-colors duration-200 group-hover:text-orange-500 lg:text-3xl">
            {data.title}
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-600 line-clamp-2">
            {data.description}
          </p>
        </div>
      </div>
    </>
  );

  const cardClasses =
    "group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-out hover:shadow-xl focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2";

  if (isClickable) {
    return (
      <Link to={href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}

export default CaseCard;
