 export  async function callDataService(id,callback){

 //Service Call
 try {
  var resp = await fetch("https://api.dialeureka.com/view-profile", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    queryId:id
    })
  });
  let jsonResponse = await resp.json();
  console.log(jsonResponse);
  callback(jsonResponse);
 
 }catch(error) {
   console.log(error);
 }
}

 export  async function userDataSelected(id,callback){

 //Service Call
 try {

  var resp = await fetch("https://api.dialeureka.com/view-profile", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  body: JSON.stringify({
    queryId:id
    })
  });

  let jsonResponse = await resp.json();
  console.log(jsonResponse);
  callback(jsonResponse);
 
 }catch(error) {
   console.log(error);
 }
}