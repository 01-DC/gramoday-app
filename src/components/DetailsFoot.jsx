import React from "react"

import { MdSend } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import { FaPrayingHands } from "react-icons/fa"

export default function DetailsFoot({ product }) {
	const updateTime = product.posts[0].updatedAt
	return (
		<div className="">
			<div className="flex justify-between text-xs italic">
				<p>3 People Thanked</p>
				<p>Updated at {new Date(updateTime).toLocaleTimeString()}</p>
			</div>
			<hr className="my-2.5 h-0.5 bg-gray-500" />
			<div className="flex gap-20">
				<div className="text-emerald-500 text-2xl">
					<FaPrayingHands />
					<p className="text-xs mt-1">Thanks</p>
				</div>
				<div className="text-emerald-500 text-2xl">
					<BsWhatsapp />
					<p className="text-xs mt-1">Share</p>
				</div>
				<button className="rounded-full text-white bg-amber-500 flex py-2 px-5">
					<span className="inline text-2xl mr-1">
						<MdSend />
					</span>
					<span className="font-bold">Interested</span>
				</button>
			</div>
		</div>
	)
}
