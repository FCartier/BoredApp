import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { Button, Input, Modal } from "antd";
import DashboardTable from "./DashboardTable";
import DashBoardModal from "./DashBoardModal";
import {
  fetchActivity,
  fetchActivities,
  selectActivities,
  setSearchedValue,
  selectActivitiesAreLoading,
  selectRandomActivityStatus
} from "./dashboardSlice";
import StatusEnum from "../../constants/StatusEnum";

const { Search } = Input;

export default function Dashboard() {
  const dispatch = useDispatch();
  const [modalVisibily, setModalVisibily] = useState(false);
  const activities = useSelector(selectActivities);
  const fetchStatus = useSelector(state => state.dashboard.status);
  const activitiesAreLoading = useSelector(selectActivitiesAreLoading);
  const randomActivityStatus = useSelector(selectRandomActivityStatus);

  useEffect(() => {
    if (fetchStatus === StatusEnum.idle) {
      dispatch(fetchActivities());
    }
  }, [fetchStatus, dispatch]);

  const handleRandomActivity = () => {
    dispatch(fetchActivity());
  };

  useEffect(() => {
    if (randomActivityStatus === StatusEnum.succeeded) {
      setModalVisibily(true);
    }
  }, [randomActivityStatus]);

  const hideModal = () => setModalVisibily(false);

  return (
    <>
      <Header>
        <h1>Bored App</h1>
        <p>Bored at home? Pick an activity below!</p>
      </Header>
      <RefreshButtonWrapper>
        <Button
          shape="flat"
          onClick={() => dispatch(fetchActivities())}
          loading={activitiesAreLoading}
        >
          Fetch new ideas
        </Button>
      </RefreshButtonWrapper>
      <SearchWrapper>
        <SearchBar
          placeholder="Search by Type or Name"
          onSearch={value => dispatch(setSearchedValue(value))}
          enterButton
        />
      </SearchWrapper>
      <ActivityGeneratorWrapper>
        <Button
          shape="flat"
          onClick={() => handleRandomActivity()}
          loading={randomActivityStatus === StatusEnum.loading}
        >
          Generate
        </Button>
      </ActivityGeneratorWrapper>
      <TableWrapper>
        <DashboardTable data={activities} />
      </TableWrapper>
      <Modal visible={modalVisibily} onOk={hideModal} onCancel={hideModal}>
        <DashBoardModal />
      </Modal>
    </>
  );
}

const SearchBar = styled(Search)`
  width: 20em;
  border-radius: 90px;
`;

const SearchWrapper = styled.div`
  grid-area: searchbar;
  margin-top: 3em;
  margin-bottom: 3em;
`;

const Header = styled.div`
  grid-area: header;
  font-size: 2em;
  margin-top: 3em;
  justify-self: center;
  text-align: center;
  font-family: Baloo;
`;

const RefreshButtonWrapper = styled.div`
  grid-area: refresh;
  margin-top: 3em;
  margin-bottom: 3em;
`;

const ActivityGeneratorWrapper = styled.div`
  grid-area: generator;
  margin-top: 3em;
  margin-bottom: 3em;
`;

const TableWrapper = styled.div`
  grid-area: table;
  align-self: center;
  justify-self: center;
  width: 80%;
`;
