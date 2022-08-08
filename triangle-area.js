function triangle_area (a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt((s * (s-a) * (s-b) * (s-c)));
    let x = area.toFixed(2);
    return x;
}

let output = triangle_area (3, 6, 7);
console.log(output);