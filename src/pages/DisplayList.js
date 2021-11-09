import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImageCard } from "../components/ImageCard";

export const DisplayList = ({ list }) => {
	const [search, setSearch] = useState("");

	const searchImgaes = search
		? list.filter((t) =>
				t.data.title.toLowerCase().includes(search.toLowerCase())
		  )
		: list;

	return (
		<>
			<div className="container">
				<div className="add-content">
					<div className="input-wrapper">
						<input
							type="text"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search for a Title"
						/>
					</div>
				</div>

				<div className="image-page">
					<div className="container">
						<div className="image-grid">
							{searchImgaes.map((item) => {
								return (
									<Link to={item.data.id} key={item.data.id}>
										<ImageCard dataItem={item} />
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
