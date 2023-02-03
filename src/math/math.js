console.group('Cuadrado');
const squareSide = 5;
const squarePerimeter = squareSide * 4;

const squareArea = squareSide * squareSide;

console.log({ squareSide, squarePerimeter, squareArea });

const calcObjSquare = (side) => {
  return {
    perimeter: side * 4 + ' cm',
    area: side * side + ' cm2',
  };
};
console.log('Obj Cuadrado', calcObjSquare(7));
console.groupEnd('Cuadrado');

console.group('Triangulo');
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleSideBase = 4;
const triangleHeight = 5.5;

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleSideBase;

const triangleCalcPerimeter = (side1, side2, base) => {
  const perimeter = side1 + side2 + base;
  return perimeter + ' cm';
};

const triangleArea = (triangleSideBase * triangleHeight) / 2;
const triangleCalcArea = (base, height) => {
  const area = (base * height) / 2;
  return area + ' cm2';
};

const calcObjTriangle = (side1, side2, base, heigh) => {
  return {
    perimeter: side1 + side2 + base + 'cm',
    area: (base * heigh) / 2 + ' cm2',
  };
};

console.log({
  triangleSide1,
  triangleSide2,
  triangleSideBase,
  triangleHeight,
  trianglePerimeter,
  triangleArea,
});

console.log('Perimetro: ', triangleCalcPerimeter(5, 5, 8));
console.log('Area', triangleCalcArea(7, 14));
console.log('Objetos: ', calcObjTriangle(5, 5, 8, 5.5));

console.groupEnd('Triangulo');

console.group('Circulo');

const circleRadius = 3;
const circleDiameter = circleRadius * 2;
const pi = Math.PI;

const circumference = circleDiameter * pi;
const circleArea = circleRadius ** 2 * pi;

console.log({
  circleRadius,
  circleDiameter,
  pi,
  circumference,
  circleArea,
});

const objCircle = (radius) => {
  const diameter = radius * 2;
  const radiusSquare = Math.pow(radius, 2);
  return {
    circumference: diameter * pi,
    area: radiusSquare * pi,
  };
};
console.log(objCircle(3));

console.groupEnd('Circulo');

console.group('Triangulo Isosceles');

const TriangleHeight = (side1, side2, base) => {
  if (side1 === side2 && side1 !== base) {
    let triangleHeight = Math.sqrt(Math.pow(side1, 2) - Math.pow(base, 2) / 4);
    return { triangleHeight };
  } else {
    console.log('Triangulo escaleno');
    const perimeter = side1 + side2 + base;
    const SemiPerimeter = perimeter / 2;
    const area = Math.sqrt(
      SemiPerimeter *
        (SemiPerimeter - side1) *
        (SemiPerimeter - side2) *
        (SemiPerimeter - base)
    );
    return { area };
  }
};

const calcHeight = (side1, base) => {
  if (side1 === base) {
    console.log('No es un isosceles');
  } else {
    const h = Math.sqrt(Math.pow(side1, 2) - Math.pow(base, 2) / 4);
    return { h };
  }
};

console.log(TriangleHeight(10, 12, 14));
console.log(calcHeight(10, 12));

console.groupEnd('Triangulo Isosceles');

console.group('Triangulo Escaleno');

const trianguloEscaleno = (lado1, lado2, lado3) => {
  if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
    return false;
  }
  const S = (lado1 + lado2 + lado3) / 2;
  const s1 = S - lado1;
  const s2 = S - lado2;
  const s3 = S - lado3;
  const H = (2 / lado1) * Math.sqrt(S * s1 * s2 * s3);
  const res = Math.trunc(H);
  // console.log('EScaleno');
  return console.log({ res });
};

/* A comment. */
console.log('test 1');
trianguloEscaleno(16, 8, 10);
console.log('test 2');
trianguloEscaleno(6, 8, 8);
console.log('test 3');
trianguloEscaleno(6, 6, 6);
console.groupEnd('Triangulo Escaleno');

console.group('Porcentaje');
/*
  p * (100-d)/100
*/

console.groupEnd('Porcentaje');
