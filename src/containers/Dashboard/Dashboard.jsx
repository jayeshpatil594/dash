import Card from "../../components/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { LikeIcon } from "../../components/Icons/Like";
import { TotalRevenueIcon } from "../../components/Icons/TotalRevenue";
import { TotalTransactionIcon } from "../../components/Icons/TotalTransaction";
import { UsersIcon } from "../../components/Icons/Users";
import { ChartContainer, Wrapper } from "./Dashboard.styles";

const cards = [
  {
    title: "Total Revenues",
    description: "$2,129,430",
    color: "#DDEFE0",
    icon: <TotalRevenueIcon />,
  },
  {
    title: "Total Transactions",
    description: "1,520",
    color: "#F4ECDD",
    icon: <TotalTransactionIcon />,
  },
  {
    title: "Total Likes",
    description: "9,721",
    color: "#EFDADA",
    icon: <LikeIcon />,
  },
  {
    title: "Total Users",
    description: "892",
    color: "#DEE0EF",
    icon: <UsersIcon />,
  },
];

const data = [
  {
    name: "Week 1",
    Guest: 4000,
    User: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    Guest: 3000,
    User: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    Guest: 2000,
    User: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    Guest: 2780,
    User: 3908,
    amt: 2000,
  },
  {
    name: "Week 5",
    Guest: 1890,
    User: 4800,
    amt: 2181,
  },
  {
    name: "Week 6",
    Guest: 2390,
    User: 3800,
    amt: 2500,
  },
];

const Dashboard = () => {
  return (
    <>
      <Wrapper className="row">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Wrapper>
      <ChartContainer>
        <h4>Activities</h4>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Guest"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="User" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </>
  );
};

export default Dashboard;
