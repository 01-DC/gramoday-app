import React from "react"

import { ProductCard } from "."

export default function BusinessInfo() {
	return (
		<div className="h-[650px] overflow-auto">
			<div className="mt-2.5 ml-5">
				<h4 className="font-bold text-lg text-emerald-500 mb-5">
					Commission Agent
				</h4>
				<p className="ml-2.5 mb-7.5 text-sm">
					Market Name
					<span className="font-bold text-base ml-3">
						Yeshwanthapura Mandi
					</span>
				</p>
				<p className="ml-2.5 mb-7.5 text-sm">
					Firm Name
					<span className="font-bold text-base ml-7.5">
						Yeshwanthapura Mandi
					</span>
				</p>
				<p className="ml-2.5 mb-7.5 text-sm">
					Shop Number
					<span className="font-bold text-base ml-3">
						Yeshwanthapura Mandi
					</span>
				</p>
			</div>

			<div className="text-sm font-bold p-2.5 bg-gray-200">
				<h4>Products</h4>
			</div>

			<div>
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	)
}
