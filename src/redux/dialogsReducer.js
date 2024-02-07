const ADD_MESSAGE = "ADD-MESSAGE";
let initialState = {
  dialogsData: [
    {
      id: 0,
      name: "Andrey",
      photo: "https://www.svgrepo.com/show/416520/animal-bear-cartoon.svg",
    },
    {
      id: 1,
      name: "Dima",
      photo: "https://www.svgrepo.com/show/416529/animal-cartoon-fauna.svg",
    },
    {
      id: 2,
      name: "Sasha",
      photo: "https://www.svgrepo.com/show/416543/animal-carnivore-cartoon.svg",
    },
    {
      id: 3,
      name: "Nikita",
      photo:
        "https://www.svgrepo.com/show/416521/animal-carnivore-cartoon-2.svg",
    },
    {
      id: 4,
      name: "Serezha",
      photo: "https://www.svgrepo.com/show/416522/animal-austalia-cartoon.svg",
    },
    {
      id: 5,
      name: "Artem",
      photo: "https://www.svgrepo.com/show/416523/animal-cartoon-fauna-5.svg",
    },
    {
      id: 6,
      name: "Valera",
      photo:
        "https://www.svgrepo.com/show/416531/animal-carnivore-cartoon-4.svg",
    },
  ],
  messagesData: [
    { id: 0, message: "Hi" },
    { id: 1, message: "How are u" },
    { id: 2, message: "Yo" },
  ],
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: newMessage }],
      };
    default:
      break;
  }

  return state;
};
export const addMessageActionCreator = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody: newMessageBody,
});
export default dialogsReducer;
