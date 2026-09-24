// we use in memory database
let users = [
  {
    id: 1,
    name: "Amit Sharma",
    mob: "98345xxxxx",
    email: "amit.example@exam.com",
  },
  {
    id: 2,
    name: "rahul yadav",
    mob: "92345xxxxx",
    email: "moni.example@exam.com",
  },
];

let nextId = 3;


export const getAllUsers = () => {
  return users;
}

const getUserById = (pid) => {
  const found = users.find((user) => user.id === pid);
  return found;
} 




export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
}; 

 export const updateUser = (pid, userData) => {
  const index = users.findIndex((user) => user.id === pid);
  if (index == -1){
    return false;
  }
  updateData.id = pid;
  users[index] = userData;
  return updateData;
}

export const deleteUser = (pid) => {
  const index = users.findIndex((user) => user.id === pid);
  if (index == -1){
    return false;
  }
  users.splice(index, 1);
  return true;
}