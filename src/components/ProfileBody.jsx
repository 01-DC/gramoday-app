import React, { useState } from "react"

import { BusinessInfo } from "."

export default function ProfileBody({ data, setProduct }) {
	const [activeTab, setActiveTab] = useState(1)
	return (
		<div>
			<div className="w-full">
				<button
					className={`w-1/2 text-sm font-medium p-1.5 ${
						activeTab == 1 ? "border-b-4" : ""
					} border-emerald-500`}
					onClick={() => setActiveTab(1)}>
					BUSINESS
				</button>
				<button
					className={`w-1/2 text-sm font-medium p-1.5 ${
						activeTab == 2 ? "border-b-4" : ""
					} border-emerald-500`}
					onClick={() => setActiveTab(2)}>
					REVIEW
				</button>
			</div>
			{activeTab == 1 ? <BusinessInfo data={data} setProduct={setProduct} /> : <div></div>}
		</div>
	)
}
