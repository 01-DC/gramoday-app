import React from "react"

import { MdTranslate } from "react-icons/md"

export default function Header({ selectedProduct }) {
	return (
		<div className="w-full text-center text-white flex items-center p-2.5 shadow-lg bg-gradient-to-b from-indigo-500 to-violet-500">
			<h1 className="font-bold text-2xl flex-1">
				{selectedProduct === null
					? "Profile"
					: `${selectedProduct.cmdtyStdName} ${selectedProduct.posts[0].marketType} Rates`}
			</h1>
			<div className="inline text-xl font-black flex-initial">
				<MdTranslate />
			</div>
		</div>
	)
}
