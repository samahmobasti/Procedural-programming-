const V1 = [-2, 7, -1];
const V2 = [2, 6, 3];
let pro = 0;
const dot_product = (V1, V2) => {
    for (let i = 0; i < 3; i++) {
        pro += V1[i]*V2[i]
        
    }
    return pro
}
console.log(dot_product(V1, V2));

