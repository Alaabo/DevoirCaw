const fs = require('fs')
const procces = require('process')

var isExist = true
var i = 3
target = process.argv[2] 

function searchEnging(filename){
          try {
                    const data = fs.readFileSync(filename, 'utf-8')
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
                    
                    console.log(filename + " file doesn't exist")
          }
}


while (isExist) {
          const path = procces.argv[i]
          if(path != undefined){
                    fs.readdir(path , (err , files)=>{
                              if(err){
                                        searchEnging(path)
                              }else{
                                        
                                        files.forEach((file)=>{
                                                  searchEnging(path + "\\" + file)
                                        })
                              }
                    })
                    i++
          }else{
                    isExist = false
          }
}


