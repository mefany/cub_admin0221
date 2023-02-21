// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import { shuffle } from "lodash";
import Mock from "../../mock";
import { uniqueProudcts, slugs } from "./data";
Mock.onGet("/api/products").reply(async () => {
  try {
    return [200, uniqueProudcts];
  } catch (err) {
    console.error(err);
    return [
      500,
      {
        message: "Internal server error",
      },
    ];
  }
}); // single product based on slug

Mock.onGet("/api/products/slug").reply(async (config) => {
  try {
    if (config?.params?.slug) {
      const product = uniqueProudcts.find(
        (item) => item.slug === config.params.slug
      );
      return [200, product];
    }

    return [200, shuffle(uniqueProudcts)[0]];
  } catch (err) {
    console.error(err);
    return [
      500,
      {
        message: "Internal server error",
      },
    ];
  }
}); //all products slug list

Mock.onGet("/api/products/slug-list").reply(async () => {
  try {
    return [200, slugs];
  } catch (err) {
    console.error(err);
    return [
      500,
      {
        message: "Internal server error",
      },
    ];
  }
});
