function myEach(collection, callback){
    for(let key in collection){
        callback(collection[key])
    }
  return collection
}

function myMap(collection, callback){
    let newArray = []
    for(let key in collection){
        newArray.push(callback(collection[key]))
    }

    return newArray
}

function myReduce(collection, callback, acc){
    let newCollection = collection
    if(acc === undefined){
        if(Array.isArray(collection)===false){
         acc= Object.values(collection)[0]
         newCollection = Object.values(collection).slice(1)
         console.log(acc)
        } else{
          acc = collection[0]
          newCollection = collection.slice(1)
        }
    }

    for(let key in newCollection){
          
         acc = callback(acc, newCollection[key], newCollection)
        
      }
      return acc
  
}

function myFind(collection, predicate){
    for(let key in collection){
      if(predicate(collection[key])===true)
        return collection[key]     
    }
    return undefined
  }

  function myFilter(collection, predicate){
      let filteredArray = []
        for(let key in collection){
            if(predicate(collection[key])=== true)
            
            filteredArray.push(collection[key])

        }
        return filteredArray
  }

  function mySize(collection){
     let arrayLength = []
      for (let key in collection){
          arrayLength.push(collection[key])
      }
    return arrayLength.length
  }

  function myFirst(array, n=1){
    let count = 1
    let newArray =  []
    for(let key in array){
      if(count<= n){
      newArray.push(array[key])
        count++
    }
    }
  console.log(newArray)
    if(newArray.length > 1){
      return newArray
    } 
    return newArray[0]


    // let firstNumb = array.slice(0, n)
    // if(n===undefined){
    //   firstNumb = array.shift()
    // }
  
    // return firstNumb
  }

  function myLast(array, n=1){
    let reverseArray = [...array]
    console.log("array:"+ array)
    reverseArray.reverse()
    console.log("reverse array:"+ reverseArray)
    let count = 1
    let newArray =  []
    for(let key in reverseArray){
      if(count<= n){
      newArray.unshift(reverseArray[key])
      console.log(newArray)  
      count++
    }
    }
  
    if(newArray.length > 1){
      return newArray
    } 
    return newArray[0]
  }
  
  

  function myKeys(object){
      return Object.keys(object)
  }

  function myValues(object){
      return Object.values(object)
  }