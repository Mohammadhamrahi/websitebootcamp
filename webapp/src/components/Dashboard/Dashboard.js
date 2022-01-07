import { Table, Divider } from "antd";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const { data } = useSelector((state) => state.ProductsReducer);

  const columns = [
    {
      title: "اسم",
      dataIndex: "title",
    },
    {
      title: "قیمت",
      dataIndex: "price",
    },
    {
      title: "عکس",
      dataIndex: "image",

      render: (image) => <img src={image} width={150} height={150} />,
    },
  ];

  return (
    <div>
      <Divider />
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default Dashboard;
