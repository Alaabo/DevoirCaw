const fsPromises = require('fs')

const procces = require('process')

target = process.argv[2]
//function to do the searching 
async function searchEnging(filename){
          try {
                    const data = await fsPromises.readFileSync(filename , 'utf-8')
                    if(data){
                              var res = data.match(target)
                              if(res){
                    
                                        console.log('found on \" ' + filename+' \"')
                              }
                    else{
                              console.log('NONE ON \"' +filename+"\"" )
                    }
                    }else{
                              console.log("\""+filename+"\" is empty")
                    }  
                    
                   
          } catch (error) {
                    console.log(filename + "file doesn't exist")
          }
}

var isExist = true
var i = 3
while (isExist) {
          if (procces.argv[i] != undefined) {
                    searchEnging(procces.argv[i])
                    i++
          } else {
                    isExist = false
          }
}

module.exports = {searchEnging}

