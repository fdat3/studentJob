'use client';

import { usePathname } from 'next/navigation';

interface Pagination1Props {
  currentPage?: number;
  totalPage?: number;
  setPage?: (page: number) => void;
}

export default function Pagination1(props: Pagination1Props) {
  const path = usePathname();

  const { currentPage = 1, totalPage = 1, setPage = () => { } } = props;

  const renderPageNumbers = () => {
    const pageNumbers: JSX.Element[] = [];
    for (let i = 1; i <= totalPage; i++) {
      // Chỉ hiển thị các trang gần trang hiện tại và không hiển thị quá 3 trang liền kề
      if (i === 1 || i === totalPage || Math.abs(currentPage - i) <= 1) {
        pageNumbers.push(
          <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`} onClick={() => setPage(i)}>
            <a className="page-link">{i}</a>
          </li>,
        );
      } else if (
        // Hiển thị dấu ba chấm nếu tổng số trang lớn hơn 3 và hiển thị ở vị trí cuối hoặc đầu
        (i === 2 && currentPage > 3) ||
        (i === totalPage - 1 && currentPage < totalPage - 2)
      ) {
        pageNumbers.push(
          <li key={i} className="page-item disabled">
            <a className="page-link">...</a>
          </li>,
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="mbp_pagination text-center">
      <ul className="page_navigation">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} onClick={() => setPage(currentPage - 1)}>
          <a className="page-link">
            <span className="fas fa-angle-left" />
          </a>
        </li>
        {renderPageNumbers()}
        <li className={`page-item ${currentPage === totalPage ? 'disabled' : ''}`} onClick={() => setPage(currentPage + 1)}>
          <a className="page-link">
            <span className="fas fa-angle-right" />
          </a>
        </li>
      </ul>
    </div>
  );
}
