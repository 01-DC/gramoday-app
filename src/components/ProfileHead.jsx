import React from "react"

import { FaUserCircle, FaWhatsapp } from "react-icons/fa"
import { AiOutlineUserAdd } from "react-icons/ai"
import { IoIosCall } from "react-icons/io"

export default function ProfileHead({ data }) {
	return (
		<div className="flex justify-between px-2.5 py-5">
			<div className="flex items-center">
				<div className="text-8xl text-zinc-600 mr-2.5">
					<FaUserCircle />
				</div>
				<div>
					<p className="font-bold text-lg mb-2.5">
						{!!data && data.name}
					</p>
					<p className="text-sm mb-2.5">
						{!!data && data.loclevel3Name},{" "}
						{!!data && data.loclevel2Name}
					</p>
					<p className="text-xs italic mb-5">Speaks English</p>
					<div className="flex gap-2">
						<button className="rounded-2xl text-white bg-emerald-500 flex py-1 px-3">
							<span className="inline text-lg mr-1">
								<AiOutlineUserAdd />
							</span>
							<span className="text-xs font-bold">Connect</span>
						</button>
						<button className="rounded-2xl text-emerald-500 border border-emerald-500 flex py-1 px-3">
							<span className="inline text-lg mr-1">
								<IoIosCall />
							</span>
							<span className="text-xs font-bold">Contact</span>
						</button>
					</div>
				</div>
			</div>
			<div>
				<button className="rounded-2xl text-white bg-emerald-500 flex py-1 px-2">
					<span className="inline mr-1">
						<FaWhatsapp />
					</span>
					<span className="text-xs font-bold">Share</span>
				</button>
			</div>
		</div>
	)
}
