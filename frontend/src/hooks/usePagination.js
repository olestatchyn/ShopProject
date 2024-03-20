import { useMemo } from "react";

export const usePagination = (totalPage, setCurrentPage) => {
  const pagesArray = useMemo(() => {
    let result = ["Піца", "Салат", "Напої", "Інше"];

    return result;
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return [pagesArray, changePage];
};
