function min(list) {
    let sorted = list.sort((a,b) => a-b); // сортировка от меньшего к большему
    return sorted[0];
}

function max(list) {
    let sorted = list.sort((a,b) => a-b); // сортировка от меньшего к большему

    return sorted[sorted.length - 1];
}

// function max(list) {
//     let sorted = list.sort((a,b) => b-a); // сортировка от большого к малому
//     return sorted[0];
// }


// Best practice
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);


console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);



console.log(max([4,6,2,1,9,63,-134,566]), 566);
console.log(max([5]), 5);