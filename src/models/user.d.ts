export type User = {
    name: string;
    lastname: string;
    email: string;
    address: string;
    password: string;
  };
  
  export type registerAuthUser = Omit<User, "name" | "lastname">;
  export type loginAuthUser = Omit<User, "name" | "lastname" | "address">;
  