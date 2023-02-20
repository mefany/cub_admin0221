// THIS IS A FAKE SERVER FOR DEMO PURPOSE
// YOU SHOULD DO NOT FOLLOW THE CODE INSIDE __server__ or __db__
// HTTP CALL ARE MADE FROM __server__/__api__
import Mock from "./mock";
import "./__db__/admin";
Mock.onAny().passThrough();
