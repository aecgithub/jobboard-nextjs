
    export function filterJobsByType(data, value){
        if(value === ''){ 
                return data
            }else {
                return data.filter(function(e){
                    return e.Job_Type == value
            })
        }
    }
    export function filterJobsByRemote(data, value){
          if(value == false){
                return data
            } else {
                return data.filter(e => {
                    return e.Remote_Job == true
                })
            }
    }
    export function filterJobsByCountry(data, value){
        if(value === ''){ 
                return data
            }else {
                return data.filter(function(e){
                    return e.Country == value
                })
            }
    }
    export function filterJobsBySkill(data, value){
        if(value === ''){ 
                return data
            }else {
                return data.filter(function(e){
                    return e.Tags == value
                })
            }
    }
    export function filterJobsByKeyword(data, value){
        if(value === ''){ 
                return data
            }else {
                return data.filter(function(e){
                    return e.Job_Opening_Name.toLowerCase().includes(value) 
                })
            }
    }

