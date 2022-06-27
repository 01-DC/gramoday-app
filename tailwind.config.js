/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spacing: {
				7.5: "30px",
			},
			fontSize: {
				xxs: "10px",
			},
		},
	},
	plugins: [],
}
