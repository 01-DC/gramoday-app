import React, { useEffect, useState } from "react"

import { Header, Footer, ProfileHead, ProfileBody } from "./components"

function App() {
	const [data, setData] = useState(null)

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

	return (
		<div className="w-full">
			<Header />
			<div className="max-w-3xl mx-auto">
				<ProfileHead data={data} />
				<ProfileBody />
			</div>
			<Footer />
		</div>
	)
}

export default App
