function threeInOne(arr){
    let arr1 = arr.slice();
    let result = [];
    let resultsum = [];
    for (let i = 0; i <= (arr1.length); i += 3){
        let sum = 0;
            result[i] = arr1.splice(0, 3);
        for (key of result[i]) {
            sum += key
          }
          resultsum.push(sum);
          i = 0;
    };
    copy=arr.slice();
    console.log(copy);
    // arr = arr1;
    return resultsum
  }



  function threeInOne(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i += 3) {
      let sum = 0;
      // Получаем подмассив из трех элементов
      let subArray = arr.slice(i, i + 3);
      
      // Вычисляем сумму элементов подмассива
      for (let key of subArray) {
        sum += key;
      }
      
      // Добавляем сумму в результирующий массив
      result.push(sum);
    }
    
    return result;
  }
  
  // Пример использования
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(threeInOne(arr)); // Ожидаемый результат: [6, 15, 24]
  





  console.log(threeInOne([1,2,3])) //[6]
//   console.log(threeInOne( [1,2,3,4,5,6])) //[6,15]
//   console.log(threeInOne( [1,2,3,4,5,6,7,8,9])) //[6,15,24]
//   console.log(threeInOne( [1,3,5,2,4,6,7,7,7,2,4,6,])) //[9,12,21])