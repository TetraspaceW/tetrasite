type PageHeaderProps = {
  title: string;
  created?: string;
  lastUpdated?: string;
};

export const PageHeader = ({
  title,
  created,
  lastUpdated,
}: PageHeaderProps) => {
  return (
    <>
      <p>
        <a href="/">Return home</a>
      </p>
      <h1>{title}</h1>
      {created && <em>Created: {created}. </em>}
      {lastUpdated && <em>Last updated: {lastUpdated}. </em>}
    </>
  );
};