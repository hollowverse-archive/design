/**
 * Pagination Component
 */
import React from 'react';
import classNames from 'classnames';
import './styles.css';

// const DISPLAY_PAGES = 5;

const PageButton = ({
  label, active, disabled, onClick,
}) => (
  <button
    type="button"
    className={classNames('pagination-button', { active })}
    onClick={onClick}
    disabled={disabled}
  >{label}
  </button>
);

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  if (totalPages === 1) {
    return null;
  }

  // Note: it doesn't work if pages < 10
  const getPages = () => {
    let startPage = 1;

    if (totalPages <= 5 || currentPage <= 3) {
      startPage = 1;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
    } else {
      startPage = currentPage - 2;
    }

    return Array.from(Array(5), (item, index) =>
      ({ id: index, index: startPage + index }));
  };

  return (
    <div className="pagination">
      <div className="pagination-inner">
        <PageButton
          label="First"
          disabled={currentPage === 1}
          onClick={() => onChangePage(1)}
        />
        {getPages().map(page =>
          <PageButton
            key={page.id}
            label={page.index}
            active={page.index === currentPage}
            onClick={() => onChangePage(page.index)}
          />)}
        <PageButton
          label="Last"
          disabled={currentPage === totalPages}
          onClick={() => onChangePage(totalPages)}
        />
      </div>
    </div>
  );
};

export default Pagination;
