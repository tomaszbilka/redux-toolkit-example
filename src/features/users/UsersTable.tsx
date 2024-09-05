import { TABLE_COLUMNS } from "./constants"
import type { Users } from "./usersApiSlice"

type TProps = {
  filteredData: Users[]
}

const UsersTable = ({ filteredData }: TProps) => {
  const cellStyles = "w-[25%] border border-white px-1 py-2"

  return (
    <div className="w-full">
      <div className="flex">
        {TABLE_COLUMNS.map(column => (
          <p
            key={column}
            className="w-[25%] pb-4 font-bold border border-white px-1 text-center"
          >
            {column.toUpperCase()}
          </p>
        ))}
      </div>
      {filteredData?.map(user => (
        <div className="flex ">
          <div className={cellStyles}>{user.name}</div>
          <div className={cellStyles}>{user.username}</div>
          <div className={cellStyles}>{user.email}</div>
          <div className={cellStyles}>{user.phone}</div>
        </div>
      ))}
    </div>
  )
}

export default UsersTable
