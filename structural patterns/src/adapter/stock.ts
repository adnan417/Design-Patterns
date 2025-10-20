
import { AnalyticsLibray } from "./library";
import { XmlToJsonAdapter } from "./xmlToJsonAdapter";
//Stock client app
export class StockApp{
    xmlToJsonAdapter: XmlToJsonAdapter;
    constructor(xmlToJsonAdapter: XmlToJsonAdapter) {
        this.xmlToJsonAdapter = xmlToJsonAdapter
        console.log("Stock app initialized");
    }

    analyzeData(data: any) {
        this.xmlToJsonAdapter.processData(data);
        console.log("Data processed by Stock app in the XML format", data);
    }
}