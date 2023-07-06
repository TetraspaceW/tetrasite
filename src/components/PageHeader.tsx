type PageHeaderProps = { title: string };

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <>
      <h1>{title}</h1>
      <p>
        <a href="./">Return home</a>
      </p>
    </>
  );
};
