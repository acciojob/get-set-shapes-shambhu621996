//complete this code
class Rectangle {
	constructor(width, height){
	this._width = width;
	this._height = height;
}
get width(){
	return this._width
}
get height(){
	return this._height
}
get area(){
	return this._width * this._height
}
}
class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}
	get perimeter(){
		return 4*this.width
	}
}
const rect = new Rectangle(5,10);
console.log(rect.height);
console.log(rect.width);
console.log(rect.area);

const sq = new Square(7);
console.log(sq.width);
console.log(sq.height);
console.log(sq.area);
console.log(sq.perimeter);

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;