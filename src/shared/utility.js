export const updateObject=(oldObject,newObject)=>{
    return{
        ...oldObject,
        ...newObject
    }
}
export const checkValidity=(value,rules)=>{
    let isValid=false;
    if(rules.required){
        isValid=value.trim() !== '';
    }
    //in future if we add in length or max length
    if(rules.minLength){
        isValid=value.length >= rules.minLength && isValid
    }
    if(rules.maxLength){
        isValid=value.length <= rules.minLength && isValid
    }
    return isValid;
}