import { TABLE_COLUMNS } from "./constants"
import type { Users } from "./usersApiSlice"

type TProps = {
  filteredData: Users[]
}

const UsersTable = ({ filteredData }: TProps) => {
  return (
    <div className="w-full">
      <div className="flex">
        {TABLE_COLUMNS.map(column => (
          <p
            key={column}
            className="w-[15%] pb-4 font-bold border px-1 text-center"
          >
            {column.toUpperCase()}
          </p>
        ))}
      </div>
      {filteredData?.map(user => (
        <div className="flex">
          <div className="w-[15%] border p-1">{user.name}</div>
          <div className="w-[15%] border p-1">{user.username}</div>
          <div className="w-[15%] border p-1">{user.email}</div>
          <div className="w-[15%] border p-1">{user.phone}</div>
        </div>
      ))}
    </div>
  )
}

export default UsersTable
