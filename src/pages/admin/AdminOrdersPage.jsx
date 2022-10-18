import OrdersPageComponent from "./components/OredersPageComponent";

import axios from "axios";

const getOrders = async () => {
  const { data } = await axios.get("/api/orders/admin");

  return data;
};

const AdminOrdersPage = () => {
  return <OrdersPageComponent getOrders={getOrders} />;
};

export default AdminOrdersPage;
