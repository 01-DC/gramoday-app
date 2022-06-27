import React from "react"

import { BiRupee } from "react-icons/bi"
import { FaTruck } from "react-icons/fa"
import { RiUserVoiceFill } from "react-icons/ri"

export default function DetailsBody({ product }) {
	const details = product.posts[0].priceDetails
	return (
		<div className="h-[66vh]">
			<div className="border-l-4 border-emerald-500 mb-2.5">
				<div className="flex justify-between text-emerald-500 border-b border-emerald-500 p-1">
					<p className="text-sm font-bold italic">Rates</p>
					<BiRupee />
				</div>
				{details.map((item, index) => {
					return (
						<div
							key={index}
							className="flex justify-between border-b border-gray-300 p-1">
							<p className="text-sm font-bold">
								{item.varietyName}{" "}
								{"gradeName" in item ? "(Bumper)" : ""}
							</p>
							<p className="text-sm font-bold">
								{item.minPrice}-{item.maxPrice}
							</p>
						</div>
					)
				})}
				<p className="text-xxs italic mt-2 p-1">
					Rates are in {<BiRupee style={{ display: "inline" }} />}/
					{product.posts[0].rawPriceConvFctr}{" "}
					{product.posts[0].rawReportPriceUnit} and excluding mandi
					commission and tax.
				</p>
			</div>

			<div className="border-l-4 border-purple-500 mb-2.5">
				<div className="flex justify-between text-purple-500 border-b border-purple-500 p-1">
					<p className="text-sm font-bold italic">Arrival</p>
					<FaTruck />
				</div>

				<div className="flex justify-between border-b border-gray-300 p-1">
					<p className="text-sm font-bold">Fresh Arrival</p>
					<p className="text-sm font-bold">22000</p>
				</div>
				<div className="flex justify-between border-b border-gray-300 p-1">
					<p className="text-sm font-bold">Balance Arrival</p>
					<p className="text-sm font-bold">2000</p>
				</div>

				<p className="text-xxs italic mt-2 p-1">
					Arrivals are in Large Trucks. 1 Large Trucks = 20 Tons
				</p>
			</div>

			<div className="border-l-4 border-yellow-500 mb-2.5 h-24">
				<div className="flex justify-between text-yellow-500 border-b border-yellow-500 p-1">
					<p className="text-sm font-bold italic">Analysis</p>
					<RiUserVoiceFill />
				</div>

				<p className="p-1">sale is ok.</p>
			</div>
		</div>
	)
}
