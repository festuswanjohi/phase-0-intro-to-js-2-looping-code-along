const myArr = [];
function writeCards(arr) {
  for (const element of arr) {
    const mess = `Thank you, ${element}, for the wonderful surprise gift!`;
    myArr.push(mess);
  }
  return myArr;
}
function countDown(int) {
  while (int >= 0) {
    console.log(int);
    int--;
  }
}
