
//This library is a third-party library and process the data in json format
export class AnalyticsLibray{
    constructor() {
        console.log("Analytics libray initialized");
    }

    processData(data: JSON) {
        
        console.log("Data processed by Analytics libray in the json format", data);
    }
}