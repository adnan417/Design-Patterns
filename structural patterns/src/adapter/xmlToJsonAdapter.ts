import { AnalyticsLibray } from "./library.js";

export class XmlToJsonAdapter {
    private analyticsLibray: AnalyticsLibray;
    constructor(analyticsLibray: AnalyticsLibray) {
        this.analyticsLibray = analyticsLibray;
    }

    processData(xmlData: string) {
        // Convert XML data to JSON format (mock conversion for demonstration)
        const jsonData = { convertedData: xmlData };
        this.analyticsLibray.processData(jsonData as unknown as JSON);
    }
}