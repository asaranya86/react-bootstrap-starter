import { useContext, createContext, useState } from 'react';

const authContext = createContext();

function useProvideAuth() {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem('user'), null, 2)
  );

  const signin = (userCred) => {
    //send userCred to authapi and update setuser, and store user details like token for future usage
    window.localStorage.setItem(
      'user',
      JSON.stringify({ name: 'Jane Doe', email: 'jane.doe@demo.com' })
    );
    setUser({ name: 'Jane Doe', email: 'jane.doe@demo.com' });
  };

  const signout = () => {
    setUser(false);
    window.localStorage.removeItem('user');
  };

  return {
    user,
    signin,
    signout,
  };
}

export function useAuth() {
  return useContext(authContext);
}

export default function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
