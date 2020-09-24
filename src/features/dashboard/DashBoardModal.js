import React from "react";
import { Statistic, Image, Row, Col } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectRandomActivity } from "./dashboardSlice";

const Modal = () => {
  const selectedActivity = useSelector(selectRandomActivity);

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
      <RoundedImage src={imageUrl} />
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

const RoundedImage = styled(Image)`
  border-radius: 50%;
`;

export default Modal;
