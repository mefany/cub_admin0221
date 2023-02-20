// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import Mock from "../../mock";
import { cardList, books, members, membersType2 } from "./data";
import { mileageList, earningHistory, payoutRequests } from "./mileage";

Mock.onGet("/api/admin/members").reply(async () => {
  try {
    return [200, members];
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

Mock.onGet("/api/admin/books").reply(async () => {
  try {
    return [200, books];
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

Mock.onGet("/api/admin/membersType2").reply(async () => {
  try {
    return [200, membersType2];
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

Mock.onGet("/api/admin/mileageList").reply(async () => {
  try {
    return [200, mileageList];
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

Mock.onGet("/api/admin/earning-history").reply(() => {
  try {
    return [200, earningHistory];
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
Mock.onGet("/api/admin/payout-requests").reply(() => {
  try {
    return [200, payoutRequests];
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
Mock.onGet("/api/admin/dashboard-cards").reply(() => {
  try {
    return [200, cardList];
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
