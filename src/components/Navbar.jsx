const Navbar = () => {
	return (
		<div className="h-[5rem]">
			<div className="flex content-center p-[1rem]">
				<h1
					className="text-3xl font-bold cursor-pointer"
					onClick={() => window.location.reload()}>
					prabhavtellsjokes
				</h1>
			</div>
		</div>
	);
};

export default Navbar;
