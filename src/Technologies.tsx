import { use, useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard copy";
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
      toast.success(`${technology.name} added to your stack!`);

      return [...current, technology];
    });
  };
  const handleRemove = (id: string) => {
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAdd}
                isSelected={selectedTech.some(
                  (tech) => tech.id === technology.id
                )}
              />
            ))}
          </div>
          <StackSidebar
            selectedTech={selectedTech}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />

        </div>
      </div>
    </section>
  );
};

export default Technologies;