import { ChangeEvent, FormEvent, useState } from "react"
import useUser from "./useUser"
import { IUser } from "@/interfaces/thread"
import { API } from "@/lib/api"

const useSearch = () => {
const [query, setQuery] = useState('');
const [filterUser, setFilterUser] =  useState<IUser[]>([])

// const handleSearch = () => {
//     const filtered = user.filter((user) => {
//         return (
//           users.full_name.includes(search) ||
//           users.username.includes(search)
//         );
//       });
//       setFilterUser(filtered);      
// }
const getSearch = async () => {
    try {
      const response = await API.get(`/user/search?query=${query}`);
      setFilterUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    getSearch();
  };

  return {
    query,
    setQuery,
    filterUser,
    getSearch,
    handleSearchChange,
    handleSearch,
  };
}

export default useSearch 