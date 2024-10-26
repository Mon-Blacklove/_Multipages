const users = [
  {
    user: "user",
    pass: "pass",
    role: "user",
    token: "user",
  },
  {
    admin: "admin",
    pass: "pass",
    role: "admin",
    token: "admin",
  },
  {
    guest: "guest",
    pass: "pass",
    role: "guest",
    token: "guest",
  },
];
export function verifyUser(user, pass) {
   const userFound= users.find((u) => {
        return u.user === user && u.pass === pass
        
    })
    return userFound ? {role: userFound.role,token: userFound.token}:null
}