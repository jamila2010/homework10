export const GetFormData =(form)=>{

    const getData= new FormData(form)
    const obj= {}
    for(let [key, value] of getData.entries()) obj[key]=value

    return obj
}