/**
 * Just a panel which shows all propertyies passed in
 * @param props
 * @returns
 */
export const PropsPanel = ({
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) => {
  const propsString = JSON.stringify(props, null, 2);
  return (
    <div {...props}>
      <span>{propsString}</span>
      {children}
    </div>
  );
};
