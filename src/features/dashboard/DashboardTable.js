import React from "react";
import { Image, Table, Spin } from "antd";
import { useSelector } from "react-redux";

import { selectActivitiesAreLoading } from "./dashboardSlice";
import StatusEnum from "../../constants/StatusEnum";

const columns = [
  {
    title: "",
    dataIndex: "imageUrl",
    key: "imageUrl",
    render: url => <Image src={url} width={220} />
  },
  {
    title: "Activity",
    dataIndex: "activity",
    key: "activity",
    sorter: (a, b) => a.activity.localeCompare(b.activity)
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    sorter: (a, b) => a.type.localeCompare(b.type)
  },
  {
    title: "Participants",
    dataIndex: "participants",
    key: "participants",
    sorter: (a, b) => a.participants - b.participants
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.price - b.price
  },
  {
    title: "Accessibility",
    dataIndex: "accessibility",
    key: "accessibility",
    sorter: (a, b) => a.accessibility - b.accessibility
  }
];

export default function DashboardTable({ data }) {
  const status = useSelector(selectActivitiesAreLoading);

  const pagination = {
    pageSize: 10,
    size: "small",
    simple: true
  };

  if (status !== StatusEnum.succeeded) {
    return <Spin size="large" />;
  }

  return <Table columns={columns} dataSource={data} pagination={pagination} />;
}
