
const yargs=require("yargs");
const geocode=require("./geocode.js");

const argv=yargs
    .options({
    a:{
        demand:true,
        alias:"address",
        describe:"address to fetch whether for",
        string:true
    }
})
    .help()
    .alias("help","h")
    .argv;
console.log(argv);

geocode.geocodeAddress(argv.address);
