const airportCodes = {
	AGX: 'Agatti Island',
	AJL: 'Aizawl',
	ATQ: 'Amritsar',
	IXA: 'Agartala',
	IXB: 'Bagdogra',
	IXC: 'Chandigarh',
	IXD: 'Allahabad',
	IXE: 'Mangalore',
	IXG: 'Belgaum',
	IXH: 'Kailashahar',
	IXI: 'Lilabari',
	IXJ: 'Jammu',
	IXK: 'Keshod',
	IXL: 'Leh',
	IXM: 'Madurai',
	IXN: 'Khowai',
	IXP: 'Pathankot',
	IXQ: 'Kamalpur',
	IXR: 'Ranchi',
	IXS: 'Silchar',
	IXT: 'Pasighat',
	IXU: 'Aurangabad',
	IXV: 'Along',
	IXW: 'Jamshedpur',
	IXY: 'Kandla',
	IXZ: 'Port Blair',
	JAI: 'Jaipur',
	JDH: 'Jodhpur',
	JLR: 'Jabalpur',
	JRH: 'Jorhat',
	KNU: 'Kanpur',
	LKO: 'Lucknow',
	LUH: 'Ludhiana',
	MAA: 'Chennai',
	NAG: 'Nagpur',
	NDC: 'Nanded',
	DEL: 'Delhi',
	PAT: 'Patna',
	PNQ: 'Pune',
	RPR: 'Raipur',
	SAG: 'Shirdi',
	SHL: 'Shillong',
	SSE: 'Solapur',
	SXR: 'Srinagar',
	TIR: 'Tirupati',
	TRV: 'Thiruvananthapuram',
	UDR: 'Udaipur',
	VGA: 'Vijayawada',
	VNS: 'Varanasi',
	VTZ: 'Visakhapatnam',
};

export const getAirportCode = (cityName) => {
	for (const [code, city] of Object.entries(airportCodes)) {
		if (city.toLowerCase() === cityName.toLowerCase()) {
			return code;
		}
	}
	return null;
};
