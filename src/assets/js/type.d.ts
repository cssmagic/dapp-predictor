interface IRawMsg {
	id: number
	author_addr: string
	author_name: string
	content: string
	published_at: number
	like: number
}

interface IMsg extends IRawMsg{
	shortAddr: string
	publishedTime: string
	hidden?: boolean
}

type TSortType = 'time' | 'like'

type TPlaceholderNumber = '-' | number
