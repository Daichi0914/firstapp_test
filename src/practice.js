// Arrayオブジェクトの生成とarr1にその参照を代入
var arr1 = [0, 1, 2, 3, 4];

// arr2にarr1に入っている参照を代入
var arr2 = arr1;

// arr2を変更
arr2[1] = 5;

// arr1でも変更される
console.log(arr1[1]); // 5