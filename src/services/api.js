import axios from "axios";

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
  });

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () =>
  (instance.defaults.headers.common.Authorization = "");


  export const requestContacts = async (token) => {
    const { data } = await instance.get("/contacts", {
       
      });
  console.log(headers);
    return data;
  };


  export const addNewContact = async (newContact) => {
    const { data } = await instance.post("/contacts", newContact, {
      headers: { "Content-Type": "application/json" },
      
    });

    return data;
  };

  export const deleteContactById = async (id) => {
    const { data } = await instance.delete(`/contacts/${id}`, {});
    return data;
  };

  export const updateContactById = async (id) => {
    const { data } = await instance.patch(`/contacts/${id}`);
  
    return data;
  };
  
  export const apiRegister = async (newUser) => {
    const { data } = await instance.post("/users/signup", newUser);
    return data;
  };

export const apiLogin = async (user) => {
  const { data } = await instance.post("/users/login", user);
  console.log('data: ', data);
  return data;
};
export const apiLogOut = async () => {
  const { data } = await instance.post("/users/logout");
  return data;
};

export const apiRefresh = async () => {
  const { data } = await instance.get("/users/current");
  return data;
};


























