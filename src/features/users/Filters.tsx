type TProps = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  username: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  phone: string
  setPhone: React.Dispatch<React.SetStateAction<string>>
}

const Filters = ({
  name,
  username,
  email,
  phone,
  setName,
  setUsername,
  setEmail,
  setPhone,
}: TProps) => {
  return (
    <div className="container mx-auto my-16">
      <h1 className="text-2xl ml-2 my-2">Filters:</h1>
      <div className="flex justify-center">
        <div className="w-full">
          <div className="flex">
            <input
              className="w-[15%] border p-1"
              placeholder="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              className="w-[15%] border p-1"
              placeholder="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              className="w-[15%] border p-1"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="w-[15%] border p-1"
              placeholder="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters
