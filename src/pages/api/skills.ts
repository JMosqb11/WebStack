import axios from "axios";
import { Main } from "../../interface/apiskills";

export interface IresultApi {
  StatusResponse: boolean;
  data: Main;
}

export const ApiContenful = async (): Promise<IresultApi> => {
  const getApiContenful = `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;

  const result: IresultApi = {
    StatusResponse: false,
    data: {} as Main,
  };

  try {
    let headersList = {
      Accept: "*/*",
    };

    let reqOptions = {
      url: getApiContenful,
      method: "GET",
      headers: headersList,
    };

    let response = await axios.request(reqOptions);
    result.StatusResponse = true;
    result.data = response.data;

    return result;
  } catch (error) {
    console.error(error);
    return result;
  }
};
