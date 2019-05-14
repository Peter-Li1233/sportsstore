import Axios from "axios";
import { RestUrl } from "../src/data/Url";

export class RestDataSource {
    sendRequest = (method, url) => Axios.request({method, url});
    
    getData = (dataType) => this.sendRequest( "get", RestUrl[dataType])
}