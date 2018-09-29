let productos = [];
let ventas = [];
let menu = function(){
	console.log('------Menú------\n1) Agregar Producto\n2) Modificar Stock \n3) Registrar venta\n4) Mostrar promedio de ventas realizadas\n5) Mostrar producto con stock 0\n6)salir\n7)mostrar productos');
	console.log('Ingrese una opción:');
	let v_opcion = prompt('Ingrese una opción:', 6)
	if(v_opcion==1){
		agregar_producto();
	}
	else if(v_opcion==2){
		modificar_stock();
	}
	else if(v_opcion==3){
		modificar_venta();
	}
	else if(v_opcion==4){
		promedio_venta();
	}
	else if(v_opcion==5){
		stocks_0();
	}
	else if(v_opcion==6){
		return null;
	}
	else if(v_opcion==7){
		mostrar_producto();
	}
		menu();
}


let agregar_producto = function(){
	let codigo_nuevo_producto = prompt('Ingrese un codigo para el nuevo producto:')
	let descripcion_nuevo_producto = prompt('Ingrese una descripción para el nuevo producto:')
	let tipo_nuevo_producto = prompt('Ingrese el tipo de producto:')
	let precio_compra_nuevo_producto = prompt('Ingrese el precio compra del nuevo producto:')
	let precio_venta_nuevo_producto = prompt('Ingrese el precio venta del nuevo producto:')
	let stock_nuevo_producto = prompt('Ingrese la cantidad del nuevo producto:')
	let producto ={
		codigo: codigo_nuevo_producto,
		descripcion: descripcion_nuevo_producto,
		tipo : tipo_nuevo_producto,
		precio_compra: precio_compra_nuevo_producto,
		precio_venta: precio_venta_nuevo_producto,
		stock: stock_nuevo_producto,
	}
	productos.push(producto);
}

let modificar_stock = function(){
	for( let x of productos){
		console.log(x.codigo);
	}
	let codigo_B = prompt('Ingrese un codigo del producto:')
	for( let y of productos){
		if(y.codigo == codigo_B){
			let nuevo_stock = prompt('Ingrese el nuevo stock:')
			y.stock = nuevo_stock;
		}
	}
//console.log();
}
let modificar_venta = function(){
	let codigo_B = prompt('Ingrese el codigo del producto vendido:')
	for( let y of productos){
		if(y.codigo == codigo_B){
			let cant_vendidos = prompt('¿Cuantos se vendieron?:')
			y.stock = y.stock-cant_vendidos;
			let venta ={
				codigo: codigo_B,
				cant_producto_vendido: cant_vendidos,
			}
			ventas.push(venta);
		}
	}
	
}

let promedio_venta = function(){
	let promedio_de_ventas = 0;
	for(let x of ventas){
		promedio_de_ventas=promedio_de_ventas+1;
	}
	console.log('Ventas realzadas :'+promedio_de_ventas);
	console.log('No se a que se refieren con promedio de ventas :T');
}

let stocks_0 = function(){
	for(let x of productos){
		if(x.stock<=0){
			console.log(x.codigo);
		}
	}
}

let mostrar_producto = function(){
	for(let z of productos){
		console.log('--------------');
		console.log('Codigo: '+z.codigo+'\nDescripcion:'+z.descripcion+'\ntipo:'+z.tipo+'\nprecio de compra: '+z.precio_compra+'\precio de venta:'+z.precio_venta+'\nStock:'+z.stock);
	}
}