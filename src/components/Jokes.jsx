import { useGlobalContext } from "../context/GlobalContext";

const Jokes = () => {
	const { loading, jokesArray } = useGlobalContext();

	return (
		<>
			{loading ? (
				<div className="text-xl m-[5rem]">Loading...</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 m-[5rem]">
					{jokesArray?.map((joke, index) => {
						return (
							<div
								key={index}
								className="p-[3rem] text-xl shadow-lg flex flex-col rounded-lg bg-gray-50 gap-4">
								{joke?.setup ? (
									<div>
										<div className="text-gray-500">{joke?.setup}</div>
										<div className="my-[1rem]">{joke.delivery}</div>
									</div>
								) : (
									<div>
										<div>{joke.joke}</div>
									</div>
								)}
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Jokes;
