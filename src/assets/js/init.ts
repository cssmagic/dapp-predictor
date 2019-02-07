///<reference types="nasa.js"/>

// @ts-ignore
Nasa.env.set(Nasa.env.TESTNET)

Nasa.contract.set({
	default: {
		[Nasa.env.TESTNET]: 'n22ki7ppaqSC8FPFckCVEqSS4bRRoZGaRTe',
		[Nasa.env.MAINNET]: 'n1on7kaUoqxPrnzooWoKHdbp7DEx5CVWaJz',
	}
})
