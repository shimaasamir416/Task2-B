 
  const fs = require("fs")

  const addPerson = (id ,fname , lname , age , city) => {
     const  allData = loadData()

      const duplicatedData = allData.filter ((obj)=> {
         return obj.id  === id 
      })
     if (duplicatedData.length == 0){
     allData.push({
        id: id,
        fname : fname,
        lname : lname,
        age,
        city : city,
     })

     saveAllData(allData)
    } else {
        console.log("ERROR DUPLICATED DATA")
    }
  }


/////////////////////////////////////////////////////////////////////////////////

 const loadData = () => {
    try {
        const dataJson = fs.readFileSync('data50.json').toString()
        return JSON.parse(dataJson)
    } catch {
        return []
    }
 }

/////////////////////////////////////////////////////////////////////////////////

  const saveAllData = (allData) => {
     const saveAllDataJson = JSON.stringify (allData)
     fs.writeFileSync ('data50.json' , saveAllDataJson )
  }
////////////////////////////////////////////////////////////////////////////////////
  const deletePerson = (id) => {
      const allData = loadData()

      const datatokeep = allData.filter ((obj) => {
        return obj.id !== id
      })
       saveAllData(datatokeep)
  }
////////////////////////////////////////////////////////////////////////////////////
const listData = () => {
  const allData = loadData()

    allData.forEach((obj) => {
     console.log(obj.fname , obj.lname , obj.city)
    })
 }
/////////////////////////////////////////////////////////////////////////
 const readData = (id) => {
  const allData = loadData()

    const  itemNeeded = allData.find((obj) => {
      return  obj.id == id 
    })
      console.log(itemNeeded)

    if (itemNeeded){
      console.log(itemNeeded.id)
    }else {
      console.log("id needed not found")
    }
}


 module.exports = {
    addPerson,
    deletePerson,
    listData,
    readData
 }

  