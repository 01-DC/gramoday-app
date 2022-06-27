import React from "react"

import { FaWhatsapp } from "react-icons/fa"
import { MdSend } from "react-icons/md"
import { BsThreeDotsVertical } from "react-icons/bs"

export default function ProductCard({ product }) {
	return (
		<div className="shadow-xl rounded-xl p-2.5 m-1.5">
			<div className="flex gap-2 mb-2.5">
				<div className="border border-gray-500">
					<img
						src={`/src/assets/${product.picUrl}.jpg`}
						alt="potato"
						className="object-cover h-24 w-24"
					/>
				</div>
				<div className="flex-1">
					<div className="mb-2.5 flex justify-between items-center">
						<p className="font-medium">
							{product.cmdtyStdName} {product.posts[0].marketType}{" "}
							Rates
						</p>
						<BsThreeDotsVertical />
					</div>
					<p className="text-xs">
						{product.posts[0].marketStdName},{" "}
						{product.posts[0].loclevel3Name},{" "}
						{product.posts[0].loclevel2ShortName}
					</p>
					<p className="text-xs mb-2.5">
						{new Date(
							product.posts[0].updatedAt
						).toLocaleDateString()}
					</p>
					<div className="mb-2.5 flex justify-between items-end w-full">
						<p className="font-medium text-sm">
							{
								product.posts[0].computed
									.highestAvgPriceVarietyGrade.minPrice
							}
							{" - "}
							{
								product.posts[0].computed
									.highestAvgPriceVarietyGrade.maxPrice
							}
							{" / "}
							{product.posts[0].rawPriceConvFctr}{" "}
							{product.posts[0].rawReportPriceUnit}
						</p>
						<p className="text-xxs italic">
							Updated at{" "}
							{new Date(
								product.posts[0].updatedAt
							).toLocaleTimeString()}
						</p>
					</div>
				</div>
			</div>
			<hr />
			<div className="flex justify-around mt-1.5">
				<button className="rounded-2xl text-white bg-emerald-500 flex pt-1 pb-1.5 px-3">
					<span className="inline text-md mr-1">
						<FaWhatsapp />
					</span>
					<span className="text-xs font-bold">Share</span>
				</button>
				<button className="rounded-2xl text-white bg-amber-500 flex py-1 px-3">
					<span className="inline text-md mr-1">
						<MdSend />
					</span>
					<span className="text-xs font-bold">Interested</span>
				</button>
			</div>
		</div>
	)
}
