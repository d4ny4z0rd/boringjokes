import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

const LOADING = "LOADING";
const GET_JOKES = "GET_JOKES";

const reducer = (state, action) => {
	switch (action.type) {
		case LOADING:
			return { ...state, loading: true };
		case GET_JOKES:
			return { ...state, jokesArray: action.payload, loading: false };
		default:
			break;
	}
};

export const GlobalContextProvider = ({ children }) => {
	const initialState = {
		loading: false,
		jokesArray: [],
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	//fetch jokes
	const getJokes = async (type = "any", notInclude = "", page = 1) => {
		dispatch({ type: LOADING });
		const response = await fetch(
			`https://v2.jokeapi.dev/joke/${type}?blacklistFlags=${notInclude}&amount=10&page=${page}`
		);
		const data = await response.json();
		dispatch({ type: GET_JOKES, payload: data.jokes });
	};

	useEffect(() => {
		getJokes();
	}, []);

	return (
		<GlobalContext.Provider value={{ ...state, getJokes }}>
			{children}
		</GlobalContext.Provider>
	);
};

GlobalContextProvider.propTypes = {
	children: PropTypes.element,
};

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};
