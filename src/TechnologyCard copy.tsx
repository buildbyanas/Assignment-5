import type { ITech } from "./Types/techtype";

interface TechnologyCardProps {
  technology: ITech;
  onAdd: (technology: ITech) => void;
  isSelected: boolean;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isSelected,
}: TechnologyCardProps) => {
  return (
    <div className={`rounded-xl bg-white p-5 shadow-sm transition ${
    isSelected
      ? "border-2 border-fuchsia-600 hover:-translate-y-1 hover:shadow-md"
      : "border border-transparent flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
  }`}
  >

      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500">
          {technology.badge}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-bold text-slate-900">
        {technology.name}
      </h2>

      <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">

        <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
          {technology.category}
        </span>

        <span className="text-slate-500">
          {technology.difficulty}
        </span>

        <span className="font-medium text-slate-700">
          ⭐ {technology.rating}
        </span>

      </div>

      <button
  onClick={() => onAdd(technology)}
  disabled={isSelected}
  className="mt-4 w-full rounded-lg bg-slate-950 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-white disabled:border-2 disabled:border-fuchsia-600 disabled:text-gray-500"
>
  {isSelected ? " ✓ Added to Stack" : "Add to Stack"}
</button>

    </div>
  );
};

export default TechnologyCard;