import type {ITech} from "./Types/techtype";

interface StackSidebarProps {
  selectedTech: ITech[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({
  selectedTech,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-20">

      <h2 className="text-xl font-bold text-slate-900">
        Your Stack
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        {selectedTech.length} Technology
        {selectedTech.length === 1 ? "" : "ies"} Selected
      </p>

      <div className="mt-5 space-y-3">

        {selectedTech.length === 0 ? (

          <div className="rounded-xl border border-slate-200 px-4 py-8 text-center">
            <p className="text-sm text-slate-400">
              Your Stack is empty
            </p>
          </div>

        ) : (

          selectedTech.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
            >

              <div className="flex items-center gap-3">

                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-9 w-9 object-contain"
                />

                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {technology.name}
                  </h3>

                  <p className="text-[10px] text-slate-400">
                    {technology.category}
                  </p>
                </div>

              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-xl text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>

            </div>
          ))

        )}

      </div>

      {selectedTech.length > 0 && (
  <button
    onClick={onRemoveAll}
    className="mt-8 w-full rounded-lg border border-red-300 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50">
      Remove All
  </button>
)}

    </aside>
  );
};

export default StackSidebar;