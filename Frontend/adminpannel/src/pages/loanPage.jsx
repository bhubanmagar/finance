import axios from "axios";
import { useEffect, useState } from "react";

const LoanPage = () => {
  const [requests, setRequests] = useState([]);
  //function to passbook data
  const getLoanData = async () => {
    try {
      const response = await axios.get("/finance/get-loan");
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
    alert("Rejected Loan! Soon will be notified to Customer");
  };
  //
  const acceptHandler = () => {
    alert("Accepted Loan! Soon will be notified to Customer");
  };

  useEffect(() => {
    getLoanData(); //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="bg-slate-100">
        <h1 className="font-bold text-2xl p-9"> Loan Requests..</h1>
        <div className="">
          {requests.map((e) => {
            return (
              <>
                <div>
                  <div className="bg-slate-300 p-3 rounded-md m-5 flex justify-between">
                    <span>
                      <strong>{e.Name}</strong> with AccounNo.{" "}
                      <strong> "{e.AccountNo}"</strong> has requested{" "}
                      <span className="font-bold text-red-700">{e.Amount}</span>{" "}
                      Loan.
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

export default LoanPage;
