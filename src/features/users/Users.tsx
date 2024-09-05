import { useState } from "react"
import { useGetUsersQuery } from "./usersApiSlice"

import Filters from "./Filters"
import UsersTable from "./UsersTable"

const Users = () => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const { data, isError, isLoading, isSuccess } = useGetUsersQuery()

  const containerStyles = "w-full text-center my-32"

  if (isError) {
    return (
      <div className={containerStyles}>
        <h1 className="text-2xl font-bold text-red-300">
          There was an error!!!
        </h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={containerStyles}>
        <h1 className="text-2xl font-bold text-blue-300">Loading...</h1>
      </div>
    )
  }

  if (isSuccess) {
    const filteredData = data?.filter(user => {
      return (
        user.name.toLowerCase().includes(name.toLowerCase()) &&
        user.username.toLowerCase().includes(username.toLowerCase()) &&
        user.email.toLowerCase().includes(email.toLowerCase()) &&
        user.phone.toString().includes(phone)
      )
    })

    return (
      <div className="container mx-auto my-16">
        <div className="flex flex-col justify-center">
          <Filters
            name={name}
            username={username}
            email={email}
            phone={phone}
            setName={setName}
            setUsername={setUsername}
            setEmail={setEmail}
            setPhone={setPhone}
          />
          <UsersTable filteredData={filteredData} />
        </div>
      </div>
    )
  }
}

export default Users
