import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading";

const AllUsers = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://sakura-sushi-server.vercel.app/api/users"
        );
        const data = await response.json();

        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-8/12 mx-auto mt-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md  overflow-hidden shadow">
              <thead className="bg-teal-700 text-white">
                <tr>
                  <th className="py-3 px-4 text-left ">Profile</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Phone</th>
                  <th className="py-3 px-4 text-left">Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 border border-gray-300">
                {userData.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <img
                        src={user.profileUrl}
                        alt={user.name}
                        className="h-10 w-10 object-cover rounded-full"
                      />
                    </td>
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.phoneNumber}</td>
                    <td className="py-3 px-4">{user.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AllUsers;
