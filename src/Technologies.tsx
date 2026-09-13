import { use, useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard copy";
import StackSidebar from "./StackSidebar";
import type { ITech } from "./Types/techtype";

interface TechnologiesProps {
  techPromise: Promise<ITech[]>;
  isSelected: boolean;
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

  toast.success(`${technology.name} is added to your stack!`);
};
  const handleRemove = (id: string) => {
  const removedTech = selectedTech.find(
    (tech) => tech.id === id
  );

  setSelectedTech((current) =>
    current.filter((tech) => tech.id !== id)
  );

  if (removedTech) {
    toast.warning(`${removedTech.name} removed from your stack!`);
  }
};


const handleRemoveAll = () => {
  if (selectedTech.length === 0) return;

  setSelectedTech([]);

  toast.info("All technologies removed from your stack!");
};

  return (
    <section className="bg-white py-10">
      
      <div className="container mx-auto px-4">

        <div>
        <h1 className="text-3xl md:text-4xl font-bold mt-20 text-center text-black md:text-left">Explore The <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Technologies</span></h1>
        <p className="mb-10 text-xl md:text-2xl text-center md:text-left text-gray-600 leading-relaxed">Pick one technology per category to build your ideal stack.</p>
      </div>

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