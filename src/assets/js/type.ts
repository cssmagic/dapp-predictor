export interface IRawMsg {
	id: number
	author_addr: string
	author_name: string
	content: string
	published_at: number
	like: number
}

export interface IMsg extends IRawMsg{
	shortAddr: string
	publishedTime: string
	hidden?: boolean
}

export type TSortType = 'time' | 'like'

export type TPlaceholderNumber = '-' | number
