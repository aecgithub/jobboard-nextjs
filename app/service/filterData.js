   export function filterSkills(data){
      const jobTypes = data.map(type =>{
        return type.Tags
      })
      var jobTypeArray = [].concat.apply([], jobTypes);
      const typeFilter = jobTypeArray.filter((type) =>{
        return type != '' && type != null
      })
      const filteredTags = Array.from(new Set(typeFilter));
      return filteredTags
   }

    export function filterType(data){
      const jobTypes = data.map(type =>{
        return type.Job_Type
      })
      var jobTypeArray = [].concat.apply([], jobTypes);
      const typeFilter = jobTypeArray.filter((type) =>{
        return type != '' && type != null
      })
      const filteredTags = Array.from(new Set(typeFilter));
      return filteredTags
   }

    export function filterCountries(data){
      const jobTypes = data.map(type =>{
        return type.Country
      })
      var jobTypeArray = [].concat.apply([], jobTypes);
      const typeFilter = jobTypeArray.filter((type) =>{
        return type != '' && type != null
      })
      const filteredTags = Array.from(new Set(typeFilter));
      return filteredTags
   }