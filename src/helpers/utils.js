let getFewDescription = (desc) => {
    if(desc.length > 50){
        return desc.substring(0,50) + '...';
    }else{
        return desc
    }
}

export {
    getFewDescription
};