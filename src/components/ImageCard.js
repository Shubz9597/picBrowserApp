import React from "react";

export const ImageCard = ({ dataItem }) => {
	return (
		<div className="card">
			<img
				src={dataItem.data.preview.images[0].resolutions[2].url.replaceAll(
					"&amp;",
					"&"
				)}
				className="card-img-top"
				alt={dataItem.data.title}
				width="100%"
				height="350px"
			/>
			<div className="card-body">
				<h5 className="card-title">{dataItem.data.title}</h5>
				<p className="card-text">{dataItem.data.author}</p>
			</div>
		</div>
	);
};
