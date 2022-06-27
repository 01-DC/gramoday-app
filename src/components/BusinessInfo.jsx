import React from "react"
import { Link } from "react-router-dom"

import { ProductCard } from "."

export default function BusinessInfo({ data, setProduct }) {
	return (
		<div className="h-[67vh] overflow-auto">
			<div className="mt-2.5 ml-5">
				<h4 className="font-bold text-lg text-emerald-500 mb-5">
					{data.business.userOption}
				</h4>
				<p className="ml-2.5 mb-7.5 text-sm">
					Market Name
					<span className="font-bold text-base ml-3">
						{data.business.marketStdName}
					</span>
				</p>
				<p className="ml-2.5 mb-7.5 text-sm">
					Firm Name
					<span className="font-bold text-base ml-7.5">
						{data.business.firmName}
					</span>
				</p>
				<p className="ml-2.5 mb-7.5 text-sm">
					Shop Number
					<span className="font-bold text-base ml-3">
						{data.business.mandiShopnum}
					</span>
				</p>
			</div>

			<div className="text-sm font-bold p-2.5 bg-gray-200">
				<h4>Products</h4>
			</div>

			<div>
				{data.products.map((product, index) => {
					return (
						<Link
							key={index}
							to="/details"
							onClick={() => setProduct(product)}>
							<ProductCard product={product} />
						</Link>
					)
				})}
			</div>
		</div>
	)
}
