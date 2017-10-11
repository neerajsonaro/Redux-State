var initial_State = {
	dataArray:[],
	itemId: 12076,
	title: '',
};

export default function(state=initial_State,action)
{
   switch(action.type)
   {
   case 'Fetch_Action':

   console.log('case Fetch_Action:')

   return  {...state,dataArray:action.payload}
   break;

   case 'UPDATE_ID':
    return {...state,itemId:action.payload}
    break;

   case 'UPDATE_TITLE':
    return {...state,title:action.payload}
    break;

   }
   return state; 
}