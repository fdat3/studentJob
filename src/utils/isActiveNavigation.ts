export const isActiveNavigation = (path: string, data: DataType) => {
  const x = data.children?.some((item) =>
    item.path === path.replace(/\/\d+$/, '')
      ? true
      : item.children?.some(
          (item2) => item2.path === path.replace(/\/\d+$/, ''),
        ),
  );
  return x;
};

interface DataType {
  children?: DataType[];
  path?: string;
}
