import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { Meta } = Card;

const DashboardCard = ({ data }) => {
  const defaultData = {
    activity: "",
    imageUrl: "",
    type: ""
  };
  const { activity, type, imageUrl } = data || defaultData;
  return (
    <Card
      style={{ width: 200 }}
      cover={<img alt="example" src={imageUrl} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={activity}
        description={type}
      />
    </Card>
  );
};

export default DashboardCard;
