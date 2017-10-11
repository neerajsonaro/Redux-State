export const fetchedDataAction=(dataArray)=>{

    console.log('fetched Data Action')
    console.log(dataArray);

    return({
             type:'Fetch_Action',
             payload:dataArray
          });
}

export const updateId=(num)=>{
	return({
		type : 'UPDATE_ID',
		payload : num
	});
}

export const updateTitle=(firstname)=>
{
  return({
           type:'UPDATE_TITLE',
           payload:firstname
    });
}

