type PageHeaderProps = { title: string; lastUpdated?: string };

export const PageHeader = ({ title, lastUpdated }: PageHeaderProps) => {
  return (
    <>
      <p>
        <a href="./">Return home</a>
      </p>
      <h1>{title}</h1>
      {lastUpdated && <em>Last updated: {lastUpdated}</em>}
    </>
  );
};
