import { useEffect, useState } from "react";
import axios from "axios";

const PassBookPage = () => {
  const [requests, setRequests] = useState([]);

  //function to passbook data
  const getPassbook = async () => {
    try {
      const response = await axios.get("/finance/get-passbook");
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
    alert("Rejected passbook! Soon will be notified to Customer");
  };
  //
  const acceptHandler = () => {
    alert("Accepted passbook! Soon will be notified to Customer");
  };

  useEffect(() => {
    getPassbook(); //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="bg-slate-100">
        <h1 className="font-bold text-2xl p-9"> PassBook Requests..</h1>
        <div className="">
          {requests.map((e) => {
            return (
              <>
                <div>
                  <div className="bg-slate-300 p-3 rounded-md m-5 flex justify-between">
                    <span>
                      AccounNo. <strong> "{e.AccountNo}"</strong> has requested
                      Passbook.
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

export default PassBookPage;
