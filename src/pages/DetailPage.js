import React from "react";
import { useParams } from "react-router";

export const DetailPage = ({ list }) => {
	const id = useParams().id;
	console.log(list);
	const detailList = list.find((e) => e.data.id === id);
	console.log(detailList);

	const data = detailList.data;

	return (
		<div className="container-fluid">
			<div className="centre-content">
				<div className="row justify-content-center">
					<div className="col-4">
						<img
							src={data.preview.images[0].source.url.replaceAll("&amp;", "&")}
							alt="sadf"
							height="500px"
							width="100%"
							className="align-items-center"
						/>
					</div>

					<div className="col-4">
						<h4 className="text-center fs-4 fw-bold">
							{detailList.data.title}
						</h4>
						<br />
						<p className="text-start fs-3">Author: {data.author}</p>
						<p className="text-start fs-3">
							Total Awards received: {data.total_awards_received}
						</p>
						<p className="text-start fs-3" style={{ color: "red" }}>
							Upvotes: <span>{data.ups}</span>
						</p>
						<a
							href={`https://www.reddit.com${data.permalink}`}
							className="text-start fs-4"
							target="_blank"
						>
							Visit this Post
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
