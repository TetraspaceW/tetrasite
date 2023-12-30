import { PageHeader } from "../PageHeader";
import { Reflection } from "./Reflection";
import { reflections } from "./Reflections";

export const Tetrareflections = () => {
  return (
    <>
      <PageHeader
        title="Tetrareflections"
        lastUpdated={new Date("2023-07-18")}
      />
      {reflections.reverse().map((reflection) => (
        <Reflection reflection={reflection} />
      ))}
    </>
  );
};
