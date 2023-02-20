import axios from "axios";

// dashboard
const getAllCard = async () => {
  const response = await axios.get("/api/admin/dashboard-cards");
  return response.data;
};

//books
const books = async () => {
  const response = await axios.get("/api/admin/books");
  return response.data;
};

//members
const members = async () => {
  const response = await axios.get("/api/admin/members");
  return response.data;
};

const membersType2 = async () => {
  const response = await axios.get("/api/admin/membersType2");
  return response.data;
};

//mileage
const mileageList = async () => {
  const response = await axios.get("/api/admin/mileageList");
  return response.data;
};

const earningHistory = async () => {
  const response = await axios.get("/api/admin/earning-history");
  return response.data;
};

const payoutRequests = async () => {
  const response = await axios.get("/api/admin/payout-requests");
  return response.data;
};

export default {
  getAllCard,
  books,
  members,
  membersType2,
  mileageList,
  earningHistory,
  payoutRequests,
};
