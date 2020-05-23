const items = [
// 日  月  火  水  木  金  土
  [14, 93, 89, 51, 85, 59, 33],
  [69, 27, 40, 76, 25, 21, 55],
  [55, 60,  3, 28, 49,  5, 91],
  [19, 56, 92, 66, 53, 80, 13],
]

const sums = items.map((item) => {
  let total = 0;
  for (let i = 0; i < item.length; i++) {
    total += item[i]
  }
  return total
})
// console.log(sums)





const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65, 7, 98, 100]

function scoring(score) {
  if (score > 60) {
    console.log('秀')
  } else if (score > 13) {
    console.log('良')
  } else {
    console.log('不可')
  }
}

const arr = scores.map(scoring)
// for (let i = 0; i < scores.length; i++) {
//   scoring(scores[i]);
// }