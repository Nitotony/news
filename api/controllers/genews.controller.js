export const gennews= async (req,res,next)=>{
    console.log("frist boom");
    try{
      const {country}=req.body;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=66b4af30beba434ab0b3d3e1f0e82cc2`;

    var req = new Request(url);

   await fetch(req).then(function (response) {
      return response.json();
    }).then((data)=>{
      
       res.send(JSON.stringify(data));
    });

   
    
   
    console.log("second boom");

    }catch(error){
      next(error);

    }
    
}




