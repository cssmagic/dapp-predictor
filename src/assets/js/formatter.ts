import { IMsg, IRawMsg } from './type'

export function shortenAddr(addr: string): string {
	addr = String(addr)
	return addr.length ? '***' + addr.slice(-5) : addr
}

export function formatTime(UnixTS: number | string): string {
	const ts = Number(UnixTS) * 1000
	const date = new Date(ts)
	const dateSections = []
	const timeSections = []
	dateSections.push(date.getFullYear())
	dateSections.push(_padZero(date.getMonth() + 1))
	dateSections.push(_padZero(date.getDate()))
	timeSections.push(_padZero(date.getHours()))
	timeSections.push(_padZero(date.getMinutes()))
	timeSections.push(_padZero(date.getSeconds()))
	return dateSections.join('-') + ' ' + timeSections.join(':')

	function _padZero(digit: string | number): string {
		digit = String(digit).trim()
		return Number(digit) < 10 ? '0' + digit : digit
	}
}

export function formatMsg(msg: IRawMsg): IMsg {
	return {
		...msg,
		shortAddr: shortenAddr(msg.author_addr),
		publishedTime: formatTime(msg.published_at),
	}
}


