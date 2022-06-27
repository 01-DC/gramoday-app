import React from "react"

import { MdTranslate } from "react-icons/md"

export default function Header({ title }) {
	let newTitle
	if (title !== "Profile")
		newTitle = `${title.cmdtyStdName} ${title.posts[0].marketType} Rates`
	else newTitle = "Profile"

	return (
		<div className="w-full text-center text-white flex items-center p-2.5 shadow-lg bg-gradient-to-b from-indigo-500 to-violet-500">
			<h1 className="font-bold text-2xl flex-1">{newTitle}</h1>
			<div className="inline text-xl font-black flex-initial">
				<MdTranslate />
			</div>
		</div>
	)
}
