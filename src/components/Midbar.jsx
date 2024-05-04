import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Midbar = () => {
	const [type, setType] = useState("any");
	const [notInclude, setNotInclude] = useState("");
	const [page, setPage] = useState(1);
	const { getJokes } = useGlobalContext();

	function handleNext() {
		setPage((prev) => prev + 1);
		getJokes(type, notInclude, page + 1);
	}

	return (
		<div className="flex sm:h-[4rem] justify-evenly p-[1rem]">
			<div className="flex gap-4 justify-around text-lg">
				<div>
					<select
						className="rounded-md cursor-pointer p-[0.3rem]"
						name="type"
						value={type}
						onChange={(e) => setType(e.target.value)}>
						<option value="Any">Any</option>
						<option value="Programming">Programming</option>
						<option value="Misc">Misc</option>
						<option value="Dark">Dark</option>
						<option value="Pun">Pun</option>
						<option value="Spooky">Spooky</option>
						<option value="Christmas">Christmas</option>
					</select>
				</div>
				<div>
					<label className="ml-[1rem]">Do not include : </label>
					<select
						className="rounded-md cursor-pointer p-[0.3rem]"
						name="notInclude"
						value={notInclude}
						onChange={(e) => setNotInclude(e.target.value)}>
						<option value="">None</option>
						<option value="nsfw">Not Safe for Work</option>
						<option value="religious">Religious</option>
						<option value="political">Political</option>
						<option value="racist">Racist</option>
						<option value="sexist">Sexist</option>
						<option value="explicit">Explicit</option>
					</select>
				</div>
				<button
					className="hover:bg-gray-200 rounded-lg px-[0.5rem]"
					onClick={() => getJokes(type, notInclude)}>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
			<button
				onClick={handleNext}
				className="hover:underline px-[1.2rem] rounded-md text-lg">
				Next
			</button>
		</div>
	);
};

export default Midbar;
