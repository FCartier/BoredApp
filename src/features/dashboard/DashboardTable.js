import React from "react";
import { Image, Table } from "antd";
import styled from "styled-components";

const columns = [
  {
    title: "",
    dataIndex: "imageUrl",
    key: "imageUrl",
    render: url => <StyledImage src={url} preview={true} />
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
  }
];

const DashboardTable = ({ data }) => {
  const pagination = {
    pageSize: 10,
    size: "small",
    simple: true
  };

  const refinedDataSource = data.map((activity, index) => ({
    key: index,
    ...activity
  }));

  return (
    <StyledTable
      columns={columns}
      dataSource={refinedDataSource}
      pagination={pagination}
    />
  );
};

const StyledTable = styled(Table)`
  border-radius: 20px;
`;

const StyledImage = styled(Image)`
  height: auto%;
  min-width: 2vh;
  max-width: 20vh;
  vertical-align: text-bottom;
  width: 100%;
`;

export default DashboardTable;
