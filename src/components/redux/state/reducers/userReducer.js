import { EDIT_USER, DELETE_USER, NEW_USER } from "../actions-creator/types";
const initialState = [
  {
    id: 1,
    name: "SaadMushtaq",
    email: "saad@gmail.com",
    dept: "Web Development",
    firstTime: false,
    isAdmin: true,
    pincode: "0000",
    position: "Frontend Engineer",
    status: "Present",
    attendance: false,
    onLeave: false,
    workingHours: 160,
    history: [
      {
        date: "03/03/2022",
        status: "Present",
      },
      {
        date: "04/03/2022",
        status: "Absent",
      },
      {
        date: "05/03/2022",
        status: "Present",
      },
      {
        date: "06/03/2022",
        status: "Leave",
      },
      {
        date: "07/03/2022",
        status: "Present",
      },
      {
        date: "08/03/2022",
        status: "Absent",
      },
    ],
  },
  {
    id: 2,
    name: "HusnainMaqsood",
    email: "husnain@gmail.com",
    dept: "Web Development",
    firstTime: true,
    isAdmin: true,
    pincode: "0000",
    position: "Frontend Engineer",
    status: "Leave",
    attendance: false,
    onLeave: false,
    workingHours: 150,
    history: [
      {
        date: "03/03/2022",
        status: "Present",
      },
      {
        date: "04/03/2022",
        status: "Absent",
      },
      {
        date: "05/03/2022",
        status: "Present",
      },
      {
        date: "06/03/2022",
        status: "Leave",
      },
      {
        date: "07/03/2022",
        status: "Present",
      },
      {
        date: "08/03/2022",
        status: "Absent",
      },
    ],
  },
  {
    id: 3,
    name: "AyazAfzal",
    email: "ayaz@gmail.com",
    dept: "Web Development",
    firstTime: true,
    isAdmin: true,
    pincode: "0000",
    position: "Backend Engineer",
    status: "Absent",
    attendance: false,
    onLeave: false,
    workingHours: 140,
    history: [
      {
        date: "03/03/2022",
        status: "Present",
      },
      {
        date: "04/03/2022",
        status: "Absent",
      },
      {
        date: "05/03/2022",
        status: "Present",
      },
      {
        date: "06/03/2022",
        status: "Leave",
      },
      {
        date: "07/03/2022",
        status: "Present",
      },
      {
        date: "08/03/2022",
        status: "Absent",
      },
    ],
  },
  {
    id: 4,
    name: "ZeeshanSattar",
    email: "zeeshan@gmail.com",
    dept: "HR",
    firstTime: true,
    isAdmin: false,
    pincode: "0000",
    position: "Hr Manager",
    status: "Absent",
    attendance: false,
    onLeave: false,
    workingHours: 120,
    history: [
      {
        date: "03/03/2022",
        status: "Present",
      },
      {
        date: "04/03/2022",
        status: "Absent",
      },
      {
        date: "05/03/2022",
        status: "Present",
      },
      {
        date: "06/03/2022",
        status: "Leave",
      },
      {
        date: "07/03/2022",
        status: "Present",
      },
      {
        date: "08/03/2022",
        status: "Absent",
      },
    ],
  },
  {
    id: 5,
    name: "AbdulMoeez",
    email: "amg@gmail.com",
    dept: "Web Development",
    firstTime: true,
    isAdmin: true,
    pincode: "0000",
    position: "Backend Engineer",
    status: "Leave",
    attendance: false,
    onLeave: false,
    workingHours: 160,
    history: [
      {
        date: "03/03/2022",
        status: "Present",
      },
      {
        date: "04/03/2022",
        status: "Absent",
      },
      {
        date: "05/03/2022",
        status: "Present",
      },
      {
        date: "06/03/2022",
        status: "Leave",
      },
      {
        date: "07/03/2022",
        status: "Present",
      },
      {
        date: "08/03/2022",
        status: "Absent",
      },
    ],
  },
  {
    id: 6,
    name: "ZahidButt",
    email: "zahid@gmail.com",
    dept: "Marketing",
    firstTime: true,
    isAdmin: true,
    pincode: "0000",
    position: "Marketing Manage",
    status: "Present",
    attendance: false,
    onLeave: false,
    workingHours: 145,
    history: [
      {
        date: "03/03/2022",
        status: "Present",
      },
      {
        date: "04/03/2022",
        status: "Absent",
      },
      {
        date: "05/03/2022",
        status: "Present",
      },
      {
        date: "06/03/2022",
        status: "Leave",
      },
      {
        date: "07/03/2022",
        status: "Present",
      },
      {
        date: "08/03/2022",
        status: "Absent",
      },
    ],
  },
  {
    id: 7,
    name: "AliAhmad",
    email: "ali@gmail.com",
    dept: "Web Development",
    firstTime: true,
    isAdmin: false,
    pincode: "0000",
    position: "Backend Engineer",
    status: "Present",
    attendance: false,
    onLeave: false,
    workingHours: 120,
    history: [
      {
        date: "03/03/2022",
        status: "Present",
      },
      {
        date: "04/03/2022",
        status: "Absent",
      },
      {
        date: "05/03/2022",
        status: "Present",
      },
      {
        date: "06/03/2022",
        status: "Leave",
      },
      {
        date: "07/03/2022",
        status: "Present",
      },
      {
        date: "08/03/2022",
        status: "Absent",
      },
    ],
  },
  {
    id: 8,
    name: "AbeerFaiz",
    email: "abeer@gmail.com",
    dept: "Web Development",
    firstTime: true,
    isAdmin: false,
    pincode: "0000",
    position: "Backend Engineer",
    status: "Leave",
    attendance: false,
    onLeave: false,
    workingHours: 152,
    history: [
      {
        date: "03/03/2022",
        status: "Present",
      },
      {
        date: "04/03/2022",
        status: "Absent",
      },
      {
        date: "05/03/2022",
        status: "Present",
      },
      {
        date: "06/03/2022",
        status: "Leave",
      },
      {
        date: "07/03/2022",
        status: "Present",
      },
      {
        date: "08/03/2022",
        status: "Absent",
      },
    ],
  },
  {
    id: 9,
    name: "BilalMirza",
    email: "bilal@gmail.com",
    dept: "Web Development",
    firstTime: true,
    isAdmin: true,
    pincode: "0000",
    position: "Backend Engineer",
    status: "Absent",
    attendance: false,
    onLeave: false,
    workingHours: 110,
    history: [
      {
        date: "03/03/2022",
        status: "Present",
      },
      {
        date: "04/03/2022",
        status: "Absent",
      },
      {
        date: "05/03/2022",
        status: "Present",
      },
      {
        date: "06/03/2022",
        status: "Leave",
      },
      {
        date: "07/03/2022",
        status: "Present",
      },
      {
        date: "08/03/2022",
        status: "Absent",
      },
    ],
  },
];
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER: {
      const userFilter = state.filter((user) =>
        user.id === action.payload.id ? null : user
      );
      state = userFilter;
      return state;
    }
    case EDIT_USER: {
      const userUpdate = state.filter((user) =>
        user.id === action.payload.id
          ? Object.assign(user, action.payload)
          : user
      );
      state = userUpdate;
      return state;
    }
    case NEW_USER: {
      state = [...state, action.payload];
      return state;
    }
    default:
      return state;
  }
};
export default userReducer;
