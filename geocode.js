const request=require("request");


geocodeAddress=(address)=>{
    var encodedAddress=encodeURIComponent(address);
    request({
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json:true,
    },(error,response,body) =>{
        if(error){
            console.log("unable to connect to google server");
        }
        else if(body.status==="ZERO_RESULTS"){
        console.log("please enter valid address");
    }else if(body.status==="OK") {
        console.log(`formatted adress is ${body.results[0].formatted_address}`);
        console.log(`Latitude is ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude is ${body.results[0].geometry.location.lng}`);
    }
});

}
module.exports={
    geocodeAddress
}