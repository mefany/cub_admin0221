// THIS IS A FAKE SERVER FOR DEMO PURPOSE
// YOU SHOULD DO NOT FOLLOW THE CODE INSIDE __server__ or __db__
// HTTP CALL ARE MADE FROM __server__/__api__
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const Mock = new MockAdapter(axios);
export default Mock;
