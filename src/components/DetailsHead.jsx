import React from "react"
import { Link } from "react-router-dom"

import { FaUserCircle } from "react-icons/fa"
import { AiFillStar, AiFillInfoCircle } from "react-icons/ai"
import { IoIosCall } from "react-icons/io"

export default function DetailsHead({
	name,
	lvl3Name,
	lvl2ShortName,
	marketName,
	loginDate,
	rating,
}) {
	return (
		<div className="rounded-xl py-2.5 px-4 m-2.5 bg-gray-200 shadow-lg">
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<Link to="/">
						<div className="text-4xl text-zinc-600 mr-2 outline outline-emerald-500 rounded-full">
							<FaUserCircle />
						</div>
					</Link>
					<div>
						<p className="font-bold text-xs mb-1">
							{name}{" "}
							<span className="text-yellow-500 ml-1">
								{rating}
								<AiFillStar style={{ display: "inline" }} />
							</span>
						</p>
						<p className="text-xxs">
							{lvl3Name}, {lvl2ShortName}
						</p>
					</div>
				</div>
				<div className="text-emerald-500 text-2xl bg-white rounded-full p-1 shadow-lg">
					<IoIosCall />
				</div>
			</div>

			<hr className="my-2.5 h-0.5 bg-gray-500" />

			<div className="flex justify-between items-center">
				<div className="">
					<p className="font-bold text-xs mb-1">
						{marketName}, {lvl3Name}, {lvl2ShortName}
					</p>
					<p className="text-xs">
						{new Date(loginDate).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
				</div>
				<div className="text-emerald-500 text-2xl bg-white rounded-full p-1 shadow-lg">
					<AiFillInfoCircle />
				</div>
			</div>
		</div>
	)
}
