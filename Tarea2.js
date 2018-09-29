var Convertor = class{

constructor(n, unidad1, unidad2, tipo){ 
    this.n = n; 
    this.unidad1 = unidad1; 
    this.unidad2 = unidad2; 
    this.tipo = tipo; 
} 

	convertir(){
		if(this.tipo =='L'){
			if(this.unidad1 == 'm' && this.unidad2 == 'cm'){
				console.log(this.n*100);
			}else if(this.unidad1 == 'km' && this.unidad2 == 'm'){
				console.log(this.n*1000);
			}else if(this.unidad1 == 'pies' && this.unidad2 == 'm'){
				console.log(this.n*0.3048);
			}
		}else if(this.tipo =='T'){
			if(this.unidad1 == 'c' && this.unidad2 == 'f'){
				console.log(this.n*(9/5)+32);
			}else if(this.unidad1 == 'k' && this.unidad2 == 'c'){
				console.log(this.n+273.15);
			}else if(this.unidad1 == 'k' && this.unidad2 == 'f'){
				console.log((this.n-273.15)*(9/5)+32);
			}
		}else{
			console.log('raioz');
		}
    } 

} 
/*
Para colocar en console 
var conver = new Convertor(100, 'm', 'cm', 'L'); 
conver.convertir();
*/