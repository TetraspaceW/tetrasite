import { ReflectionData } from "./Reflections";

type ReflectionProps = { reflection: ReflectionData };

export const Reflection = ({ reflection }: ReflectionProps) => {
  const { date, body, title } = reflection;
  return (
    <>
      <h2>{title}</h2>
      <em>{date.toISOString().split("T")[0]}</em>
      {body}
    </>
  );
};
