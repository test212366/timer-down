let date = new Date('1 Jan 2022 00:00:00')

function counts() {
	let now = new Date()
	gap = date - now
	console.log(gap)

	let days = Math.floor(gap / 1000 / 60 / 60 / 24)
	console.log(days)

	let hours = Math.floor(gap / 1000 / 60 / 60) % 24
	let minutes = Math.floor(gap / 1000 / 60) % 24
	let seconds = Math.floor(gap / 1000) % 24


	document.getElementById('date').innerText = days + 'days'
	document.getElementById('hours').innerText = hours + 'hours'
	document.getElementById('minutes').innerText = minutes + 'minutes'
	document.getElementById('seconds').innerText = seconds + 'seconds'
}

setInterval(counts, 1000)