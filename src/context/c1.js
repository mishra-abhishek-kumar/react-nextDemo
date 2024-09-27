import { createContext, useContext } from "react";

const C1Context = createContext();

export const useC1Context = () => {
	return useContext(C1Context);
};

export const C1ContextProvider = ({ children, value }) => {
	return (
		<>
			<C1Context.Provider value={value}>{children}</C1Context.Provider>
		</>
	);
};
