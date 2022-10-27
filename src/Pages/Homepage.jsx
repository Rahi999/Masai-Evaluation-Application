import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Failure, Request, Success } from "../Redux/action";
import ProfileDataRow from "../Components/ProfileDataRow";

const Homepage = () => {
  const dispatch = useDispatch();

  const get = () => {
    dispatch(Request());
    axios
      .get(" http://localhost:8080/profile")
      .then((res) => dispatch(Success(res.data)))
      .catch((err) => dispatch(Failure()));
  };

  useEffect(() => {
    get();
  }, []);

  const { profileData, isLaoding, isError } = useSelector((state) => {
    return {
      profileData: state.profileData,
      isLaoding: state.isLaoding,
      isError: state.isError
    };
  });

  console.log(profileData, isLaoding);
  return isLaoding ? (
    <h1>...Laoding</h1>
  ) : isError ? (
    <h1>Please Start Json Server Unabel to get Data</h1>
  ) : (
    <div>
      <table>
        <thead style={{ fontWeight: "700" }}>
          <tr>
            <th>ID</th>
            <th>Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
          <ProfileDataRow profile={profileData} />
          {/* Map through the profileData received from the json-server on mounting
          the component to show it in a table format */}
          {/* {profileData.map((data) => (
            <thead style={{ fontWeight: "700" }}>
              <tr>
                <th>{data.id}</th>
                <th>
                  <img src={data.profile_pic} alt="" width="30px" />
                </th>
                <th>{data.first_name}</th>
                <th>{data.last_name}</th>
                <th>{data.email}</th>
                <th>{data.gender}</th>
                <th>{data.country}</th>
              </tr>
            </thead>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
