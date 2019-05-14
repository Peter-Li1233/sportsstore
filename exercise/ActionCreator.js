import { RestDataSource } from "./RestDataSource";
import { ActionTypes } from "../src/data/Types";

const dataStore = new RestDataSource();

exports.load = (dataType) => {
    return {
        type: ActionTypes.DATA_LOAD,
        payload: dataStore.getData(dataType)
            .then((response) => ({dataType, data: response}) )
    }
}