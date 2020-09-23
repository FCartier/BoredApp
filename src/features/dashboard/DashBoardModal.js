import React from "react";
import { Statistic, Spin, Image, Row, Col } from "antd";
import { useSelector } from "react-redux";

import {
  selectRandomActivity,
  selectRandomActivityStatus
} from "./dashboardSlice";
import StatusEnum from "../../constants/StatusEnum";

const Modal = () => {
  const selectedActivity = useSelector(selectRandomActivity);
  const status = useSelector(selectRandomActivityStatus);

  if (status !== StatusEnum.succeeded) {
    return <Spin size="large" />;
  }

  const {
    accessibility,
    activity,
    imageUrl,
    participants,
    price,
    type
  } = selectedActivity;

  return (
    <>
      <Image src={imageUrl} />
      <Statistic title="Activity" value={activity} />
      <Row>
        <Col span={12}>
          <Statistic title="Type" value={type} />
        </Col>
        <Col span={12}>
          <Statistic title="Price" value={price} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Statistic title="Participants" value={participants} />
        </Col>
        <Col span={12}>
          <Statistic title="Accessibility" value={accessibility} />
        </Col>
      </Row>
    </>
  );
};

export default Modal;
