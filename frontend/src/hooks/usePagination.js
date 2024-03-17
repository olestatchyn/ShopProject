import { useMemo } from "react";

export const usePagination = (totalPage, setCurrentPage) => {
  const pagesArray = useMemo(() => {
    let result = ["Піца", "Салат", "Напої", "Десерт"];

    return result;
  }, [totalPage]);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return [pagesArray, changePage];
};
