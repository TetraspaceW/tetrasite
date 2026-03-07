import type { ReactNode } from "react";

export type PageHeaderProps = {
  title: string;
  created?: string;
  lastUpdated?: Date;
};

export const PageHeader = ({
  title,
  created,
  lastUpdated,
  children,
}: PageHeaderProps & { children?: ReactNode }) => {
  return (
    <>
      <p>
        <a href="/">Return home</a>
      </p>
      <h1>{title}</h1>
      {created && <em>Created: {created}. </em>}
      {lastUpdated && (
        <em>Last updated: {lastUpdated.toISOString().split("T")[0]}. </em>
      )}
      {children}
    </>
  );
};

export const Page = ({
  children,
  ...headerProps
}: { children: ReactNode } & PageHeaderProps) => (
  <PageHeader {...headerProps}>{children}</PageHeader>
);
