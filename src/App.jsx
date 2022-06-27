import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import {
	Header,
	Footer,
	ProfileHead,
	ProfileBody,
	DetailsHead,
	DetailsBody,
	DetailsFoot,
} from "./components"

function App() {
	const [data, setData] = useState(null)
	const [selectedProduct, setSelectedProduct] = useState(null)

	async function getData() {
		const res = await fetch(
			"https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco"
		)

		const resJson = await res.json()
		setData(resJson)
		console.log(data)
	}

	useEffect(() => {
		getData()
	}, [])

	if (data === null) return <div></div>

	return (
		<div className="w-full">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header title="Profile" />
							<div className="max-w-3xl mx-auto">
								<ProfileHead data={data} />
								<ProfileBody
									data={data}
									setProduct={setSelectedProduct}
								/>
							</div>
						</>
					}
				/>
				<Route
					path="/details"
					element={
						<>
							<Header title={selectedProduct} />
							<div className="max-w-3xl mx-auto">
								<DetailsHead
									name={data.name}
									lvl3Name={data.loclevel3Name}
									lvl2ShortName={data.loclevel2ShortName}
									marketName={data.business.marketStdName}
									loginDate={data.lastLoginDate}
									rating={data.userInfoRating}
								/>
								<DetailsBody product={selectedProduct} />
								<DetailsFoot product={selectedProduct} />
							</div>
						</>
					}
				/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
