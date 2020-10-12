export class Cliente {
	
	constructor(
		public clave: string,
		public nombre: string,
		public direccion: string,
		public telefono: string,
		public saldo: string,
	){
		let cli: string = "cliente3"
		let arrayCliente = [clave, nombre, direccion, telefono, saldo];
		//console.log(arrayCliente);
		localStorage.setItem('cliente3', JSON.stringify(arrayCliente));//parseamos el arreglo 'arrayCliente' como un JSON para que se mantenga su estructura de array y no se guarde como string
		this.recuperaCliente(cli);
	}

	  recuperaCliente(client:string) {
		 let arreglo = localStorage.getItem(client);
		 //hacemos del arreglo recuperado un objeto JSON para poder utilizarlo como array
		arreglo = JSON.parse(arreglo);
		console.log(arreglo[4]);
	 }
}

export class Producto {
	
	constructor(
		public clave: string,
		public descripcion: string,
		public clasificacion: Clasificacion,
		public stock: number,
		public costo: number,
		public precio: number,
	){}
}

export class Clasificacion {
	
	constructor(
		public clave: string,
		public descripcion: string,
	){}
}

export class Venta {
	
	constructor(
		public folio: string,
		public fecha: string,
		public cliente: Cliente,
		public importe: number,
	){}
}

export class VentaDetalle {
	
	constructor(
		public producto: Producto,
		public cantidad: string,
		public precio: number,
		public importe: number,
	){}
}