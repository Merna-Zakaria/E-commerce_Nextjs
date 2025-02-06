'use client'
import Link from 'next/link';
// import { useRouter } from 'next/router';

// Define the props interface for the Pagination component
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pathname: string;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, pathname }) => {
//   const router = useRouter();

  // Calculate previous and next pages
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="flex justify-center items-center space-x-4 my-8">
      {/* Previous Button */}
      {prevPage ? (
        <Link
          href={{
            pathname: pathname,
            query: { page: prevPage },
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Previous
        </Link>
      ) : (
        <span className="px-4 py-2 bg-gray-300 text-gray-600 rounded cursor-not-allowed">
          Previous
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={{
              pathname: pathname,
              query: { page: page },
            }}
            className={`px-4 py-2 rounded ${
              currentPage === page
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Next Button */}
      {nextPage ? (
        <Link
          href={{
            pathname: pathname,
            query: { page: nextPage },
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Next
        </Link>
      ) : (
        <span className="px-4 py-2 bg-gray-300 text-gray-600 rounded cursor-not-allowed">
          Next
        </span>
      )}
    </div>
  );
};

export default Pagination;