import axios from "axios";
import { useEffect, useState } from "react";

const CheckBookPage = () => {
  const [requests, setRequests] = useState([]);
  const getCheckBooks = async () => {
    try {
      const response = await axios.get("/finance/get-checkbook");
      const getData = response.data;
      const getRequests = getData.data;
      getRequests ? setRequests(getRequests) : setRequests([]);
      console.log(requests);
    } catch (error) {
      console.log(error);
    }
  };
  //
  const rejectHandler = () => {
    alert("Rejected checkbook! Soon will be notified to Customer");
  };
  //
  const acceptHandler = () => {
    alert("Accepted checkbook! Soon will be notified to Customer");
  };

  useEffect(() => {
    getCheckBooks(); //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="">
        <h1 className="font-bold text-2xl p-9"> CheckBook Requests..</h1>
        <div className="">
          {requests.map((e) => {
            return (
              <>
                <div>
                  <div className="bg-slate-300 p-3 rounded-md m-5 flex justify-between">
                    <span>
                      AccounNo. <strong> "{e.AccountNo}"</strong> has requested
                      Cheque with <strong>"{e.CheckbookNumber}" </strong>Pages.
                    </span>
                    <div className="flex justify-between gap-5">
                      <button
                        className="bg-red-700 p-1 rounded-md font-bold"
                        onClick={rejectHandler}
                      >
                        <span>Reject</span>
                      </button>
                      <button
                        className="bg-green-700 p-1 rounded-md font-bold"
                        onClick={acceptHandler}
                      >
                        <span>Accept</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CheckBookPage;
