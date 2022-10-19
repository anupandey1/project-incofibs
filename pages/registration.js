import React from "react";
import { useState } from "react";

const Registration = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    designation: "",
    organisation: "",
    address: "",
    title: "",
    accomodation: "",
    gender: "",
    presentation: "",
    phonenumber: "",
    accompany: "",
    amount: "",
    draft: "",
    drawn: "",
    bank: "",
    place: "",
    date: "",
    transaction: "",
    transfer: "",
    Date: "",
    account: "",
  });
  const heading = {
    name: "Name",
    email: "Email",
    designation: "Designation",
    organisation: "Organisation",
    address: "Address",
    title: "Title",
    accomodation: "Accomodation Required",
    gender: "Gender",
    presentation: "Are you submitting any paper for presentation?",
    phonenumber: "Phone number",
    accompany: "Details of accompanying person ,if any:",
    amount: "Amount(INR/USD)",
    draft: "Demand draft No.",
    drawn: "Drawn on",
    bank: "in the bank",
    place: "Place",
    date: "Date",
    transaction: "Online transaction on",
    transfer: "Transfer ID/No.",
    Date: "Date",
    account: "Account No. from which transfer was made",
  };

  const options = {
    gender: ["male", "female"],
    accomodation: ["yes", "no"],
    presentation: ["yes", "no"],
  };

  const [edit, setEdit] = useState({
    name: false,
    email: false,
    designation: false,
    address: false,
    title: false,
    accomodation: false,
    gender: false,
    presentation: false,
    phonenumber: false,
    accompany: false,
    amount: false,
    draft: false,
    drawn: false,
    bank: false,
    place: false,
    date: false,
    transaction: false,
    transfer: false,
    Date: false,
    account: false
  });

  const func1 = (e) => {
    e.preventDefault();
  };

  const getData = (e) => {
    // console.log(e.target.value);

    let name, value;
    name = e.target.name;
    value = e.target.value;

    setInpval({ ...inpval, [name]: value });
    console.log(inpval);
  };

  const addData = (e) => {
    e.preventDefault();

    console.log("data added succesfully");
    localStorage.setItem("user", JSON.stringify([inpval]));
  };

  return (
    <div>
      {one && (
        <div class="container mx-auto">
          <div class="container mx-auto">
            <div class="flex justify-center px-6 my-2">
              <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <div class="w-full bg-white  rounded-lg lg:rounded-l-none">
                  <form class="px-8 pt-6 pb-8  bg-white rounded grid grid-cols-1 lg:grid-cols-2">
                    {Object.keys(inpval).map((key) => {
                      return (
                        <div key={key}>
                          {(key === "gender" ||
                            key === "accomodation" ||
                            key === "presentation") && (
                            <div class="lg:px-2">
                              <label class="block mb-2 text-sm font-bold text-gray-700">
                                {heading[key]}
                              </label>
                              <div class="flex justify-left mb-6">
                                <div class="form-check form-check-inline mr-8">
                                  <input
                                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer"
                                    type="radio"
                                    name={`${key}`}
                                    value={options[key][0]}
                                    onChange={getData}
                                  />
                                  <label class="form-check-label inline-block text-gray-800 capitalize">
                                    {options[key][0]}
                                  </label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer"
                                    type="radio"
                                    name={`${key}`}
                                    value={options[key][1]}
                                    onChange={getData}
                                  />
                                  <label class="form-check-label inline-block text-gray-800 capitalize">
                                    {options[key][1]}
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}

                          {!(
                            key === "gender" ||
                            key === "accomodation" ||
                            key === "presentation"
                          ) && (
                            <div class="mb-4 lg:px-2">
                              <div className="flex justify-between p-2">
                                <label class="block mb-2 text-sm font-bold text-gray-700">
                                  {heading[key]}
                                </label>
                              </div>
                              {
                                ( key === 'email'?
                                <input
                                  class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                  type="email"
                                  name={`${key}`}
                                  onChange={getData}
                                  style={{borderRadius: "1.2rem"}}
                                />
                                : (key === 'date')?
                                <input
                                  class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                  type="date"
                                  name={`${key}`}
                                  onChange={getData}
                                  style={{borderRadius: "1.2rem"}}
                                />
                                :
                                <input
                                  class="w-full px-3 py-4 mb-3 text-sm leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline"
                                  type="text"
                                  name={`${key}`}
                                  onChange={getData}
                                  style={{borderRadius: "1.2rem"}}
                                />
                                )
                              }
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </form>
                  <div class="mb-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={addData}
                    >
                      Register
                    </button>
                  </div>

                  <div class=" flex justify-center">
                    <button
                      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                      onClick={() => {
                        setOne(false);
                        setTwo(true);
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* nextnextelement */}
      {two && (
        <div class="container mx-auto">
          {/* testing */}
          <div class="container mx-auto">
            <div class="flex justify-center px-6 my-2">
              <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <div class="w-full bg-white  rounded-lg lg:rounded-l-none">
                  <form class="px-8 pt-6 pb-8 grid grid-cols-1 lg:grid-cols-2 bg-white rounded">
                    {Object.keys(inpval).map((key) => {
                      return (
                        <div key={key}>
                          {(key === "gender" ||
                            key === "accomodation" ||
                            key === "presentation") && (
                            <div class="md:ml-2">
                              <label class="block mb-2 text-sm font-bold text-gray-700">
                                {heading[key]}
                              </label>
                              <div class="flex justify-left mb-6">
                                <div class="form-check form-check-inline mr-8">
                                  <input
                                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer"
                                    type="radio"
                                    name={`${key}`}
                                    value={options[key][0]}
                                    checked={inpval[key] === options[key][0]}
                                    onChange={getData}
                                  />
                                  <label class="form-check-label inline-block text-gray-800 capitalize">
                                    {options[key][0]}
                                  </label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input
                                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border                                    border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none                                    transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2                                    cursor-pointer"
                                    type="radio"
                                    name={`${key}`}
                                    value={options[key][1]}
                                    checked={inpval[key] === options[key][1]}
                                    onChange={getData}
                                  />
                                  <label class="form-check-label inline-block text-gray-800 capitalize">
                                    {options[key][1]}
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}

                          {!(
                            key === "gender" ||
                            key === "accomodation" ||
                            key === "presentation"
                          ) && (
                            <div class="mb-4 px-2">
                              <div className="flex justify-between p-2">
                                <label
                                  class="block mb-2 text-sm font-bold text-gray-700"
                                  for=""
                                >
                                  {heading[key]}
                                </label>
                                <button onClick={(e)=>{e.preventDefault(); const edit2 = {...edit}; edit2[key] = !edit2[key]; setEdit(edit2)}} className="bg-green-500 py-1 font-semibold px-4  text-white hover:bg-green-600 active:bg-gradient-to-l duration-200 active:from-green-500 active:to-green-600" style={{borderRadius: "0.5rem"}}>edit</button>
                              </div>
                              {!edit[key] ? (
                                <input
                                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                  id="name"
                                  type="text"
                                  name={`${key}`}
                                  value={inpval[key]}
                                />
                              ) : (
                                <p>{inpval[key]}</p>
                                // <input
                                //   class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                //   id="name"
                                //   type="text"
                                //   name={`${key}`}
                                //   value={inpval[key]}
                                //   onChange={getData}
                                // />
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </form>
                  <div class="mb-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={addData}
                    >
                      Confirm
                    </button>
                  </div>

                  <div class=" flex justify-center">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
