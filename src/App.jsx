import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import { Header, Footer, ProfileHead, ProfileBody, ProductDetails } from "./components"

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
			<Header selectedProduct={selectedProduct} />
			<div className="max-w-3xl mx-auto">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<ProfileHead data={data} />
								<ProfileBody data={data} setProduct={setSelectedProduct} />
							</>
						}
					/>
					<Route path="/details" element={<ProductDetails selectedProduct={selectedProduct} />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
