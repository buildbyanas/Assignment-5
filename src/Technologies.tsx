import { use, useState } from "react";
import TechnologyCard from "./Technologycard";
import StackSidebar from "./StackSidebar";
import type { ITech } from "./Types/techtype";

interface TechnologiesProps {
  techPromise: Promise<ITech[]>;
}

const Technologies = ({ techPromise }: TechnologiesProps) => {
  const technologies = use(techPromise);

  const [selectedTech, setSelectedTech] = useState<ITech[]>([]);

  const handleAdd = (technology: ITech) => {
    setSelectedTech((current) => {
      if (current.some((tech) => tech.id === technology.id)) {
        return current;
      }

      return [...current, technology];
    });
  };

  const handlRemove = (id: string) => {
    setSelectedTech((current) =>
      current.filter((tech) => tech.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setSelectedTech([]);
  };

  return (
    <section className="bg-slate-50 py-10">
      <div className="container mx-auto px-4">

        <div className="mb-8">
          <h2 className="text-4xl font-bold text-slate-900">
            Explore Technologies
          </h2>

          <p className="mt-2 text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAdd}
              />
            ))}
          </div>

          {/* Right sidebar */}
          <StackSidebar
            selectedTech={selectedTech}
            onRemove={handlRemove}
            onRemoveAll={handleRemoveAll}
          />

        </div>
      </div>
    </section>
  );
};

export default Technologies;