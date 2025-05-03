import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    author,
    details,
    total_view,
    rating,
  } = news;

  const publishedDate = new Date(author.published_date).toDateString();

  return (
    <div className="card bg-base-100 shadow-md rounded-xl">
      {/* Header */}
      <div className="flex items-center bg-base-200 justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex gap-1">
        <CiBookmark />
        <FiShare2 className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4 pt-2">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      {/* Thumbnail */}
      <div className="px-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full max-h-64 object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-4 text-sm text-gray-700">
        <p>
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...{" "}
              <span className="text-blue-600 font-semibold cursor-pointer">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: rating.number }).map((_, idx) => (
            <FaStar key={idx} />
          ))}
          <span className="text-gray-700 ml-1 font-medium">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
