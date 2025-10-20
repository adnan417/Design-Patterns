import { AnalyticsLibray } from "./library.js";
import { StockApp } from "./stock.js";
import { XmlToJsonAdapter } from "./xmlToJsonAdapter.js";

const analyticsLibray = new AnalyticsLibray();
const xmlToJsonAdapter = new XmlToJsonAdapter(analyticsLibray);
const stock = new StockApp(xmlToJsonAdapter);

stock.analyzeData('XML Data String');