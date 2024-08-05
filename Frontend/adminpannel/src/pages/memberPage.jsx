import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//main function
const MemberPage = () => {
  const [member, setMember] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 8;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const record = member.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(member.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  //pagination handler functions
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const changePage = (id) => {
    setCurrentPage(id);
  };

  //getting members
  const getMembers = async () => {
    try {
      const response = await axios.get("/user/getUser");
      const getData = response.data.data;
      setMember(getData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMembers(); //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="flex justify-center ">
        <div>
          <table className="w-auto">
            <thead>
              <tr className="m-2 p-2 h-14">
                <th className="w-9 border">S.N</th>
                <th className="w-96 border ">UserName</th>
                <th className="w-96 border">Email</th>
                <th className="w-96 border">Phone Number</th>
                <th className="w-96 border">Account Number</th>
              </tr>
            </thead>
            <tbody className="w-4/5">
              {record.map((e, index) => {
                return (
                  <>
                    <tr
                      key={e._id}
                      className=" m-2 text-green-500 border text-center"
                    >
                      <td className="p-2 border m-2 ">{index}</td>
                      <td className="p-2 border m-2">{e.firstName}</td>
                      <td className="p-2  m-2 border">{e.email}</td>
                      <td className="p-2  m-2 border">{e.phoneNumber}</td>
                      <td className="p-2  m-2 border">{e.accountNo}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* pagination part */}
      <footer className="m-4">
        <ul className="pagination flex gap-3">
          <li className="page-item">
            <Link to="#" className="border p-2 rounded-md" onClick={prevPage}>
              Prev
            </Link>
          </li>
          {numbers.map((n, i) => (
            <li className=" page-item" key={i}>
              <Link
                to="#"
                className={`page-item ${
                  currentPage === n
                    ? "bg-gray-300 p-2 rounded-md m-2 ml-7 "
                    : ""
                }    `}
                onClick={() => changePage(n)}
              >
                {n}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link
              to="#"
              className="border p-2 rounded-md ml-7"
              onClick={nextPage}
            >
              Next
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default MemberPage;
