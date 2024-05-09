import axios from "axios";

// eslint-disable-next-line react/prop-types
const BidRequesRow = ({ BidReq }) => {
  const { _id, category, email, job_title, deadline, price, status } =
    BidReq || {};
  // console.log(BidReq);

  const handleStatus = async (id, prevStatus, status) => {
    if (prevStatus === status) return;
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/bid/${id}`,
        { status }
      );
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <tr>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {job_title}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {email}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {new Date(deadline).toLocaleDateString()}
      </td>

      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {price}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <p
            className={`px-3 py-1 rounded-full text-xs ${
              category === "Web Development" && "text-blue-500 bg-blue-100/60"
            } ${
              category === "Digital Marketing" && "text-pink-500 bg-pink-100/60"
            } ${
              category === "Graphics Design" &&
              "text-emerald-500 bg-emerald-100/60"
            } `}
          >
            {category}
          </p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
            status === "Pending" && "bg-yellow-100/60 text-yellow-500"
          } ${status === "In Progress" && "bg-blue-100/60 text-blue-500"} ${
            status === "Complete" && "bg-emerald-100/60 text-emerald-500"
          } ${status === "Rejected" && "bg-red-100/60 text-red-500"} `}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              status === "Pending" && "bg-yellow-500"
            } ${status === "In Progress" && "bg-blue-500"} ${
              status === "Complete" && "bg-green-500"
            } ${status === "Rejected" && "bg-red-500"}  `}
          ></span>
          <h2 className="text-sm font-normal ">{status}</h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button
            onClick={() => handleStatus(_id, status, "In Progress")}
            disabled={status === "Complete"}
            className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </button>

          <button
            onClick={() => handleStatus(_id, status, "Rejected")}
            disabled={status === "Complete"}
            className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BidRequesRow;
