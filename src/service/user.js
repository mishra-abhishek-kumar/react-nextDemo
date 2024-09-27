import axios from "axios";

export const getAllUsers = async (headers, params) => {
	try {
		let Authorization = localStorage.getItem("Authorization");
		if (!Authorization) {
			throw new Error("Unauth");
		}
		let response = await axios.get(`localhost:4000/api/v1/user/`, {
			headers: { ...headers, Authorization },
			params: {
				...params,
			},
		});

		//operations
		return response;
	} catch (error) {
		throw error;
	}
};

export const createUser = async (data,headers, params) => {
	try {
		let Authorization = localStorage.getItem("Authorization");
		if (!Authorization) {
			throw new Error("Unauth");
		}
		let response = await axios.post(`localhost:4000/api/v1/user/`, data,{
			headers: { ...headers, Authorization },
			params: {
				...params,
			},
		});

		//operations
		return response;
	} catch (error) {
		throw error;
	}
};
