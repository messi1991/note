/**
 * {
 *    x: '',
 *    y: ''
 * }
 */

const testData = [{
  x: '5',
  y: 2
},{
  x: '7',
  y: 3
}]

const xData =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
'10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

const demo1 = () => {
  let arr = [];
  for(let i = 0; i < xData.length; i ++) {
    let y = 0;
    for(let j = 0; j < testData.length; j ++) {
      if(xData[i] === testData[j].x) {
        y = testData[j].y
      }
    }
    arr.push(y)
  }
}


