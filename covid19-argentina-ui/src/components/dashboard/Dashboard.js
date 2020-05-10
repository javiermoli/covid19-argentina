import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal as AntdModal } from 'antd';
import { FormOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import ChronologyDay from './chronologyDay/ChronologyDay';
import Modal from './modal/Modal';
import { fetchData } from '../../actions/countryActions';
import { deleteDay } from '../../actions/chronologyActions';
import S from './styles';
import { openModal, toggleLoading } from '../../actions/modalActions';

const Dashboard = () => {
  /**
   * @type {countryStats}
   */
  const countryData = useSelector((state) => state.country.stats);
  const modalData = useSelector((state) => state.modal);
  const days = [...countryData].reverse();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!countryData.length) {
      dispatch(fetchData());
    }
  }, [dispatch, countryData.length]);

  /**
   * Open antd modal to confirm an action
   *  @param {string} id the id of the selected day
   *  @param {string} date the date of the selected day
   */
  const confirmDeletion = (id, date) => {
    AntdModal.confirm({
      title: 'Confirm this action',
      icon: <ExclamationCircleOutlined />,
      content: (
        <span>
          Are you sure you want to delete day <b>{date}</b>?
        </span>
      ),
      okText: 'Confirm',
      cancelText: 'Cancel',
      onOk: () => {
        dispatch(toggleLoading(true));
        dispatch(deleteDay(id));
      },
      confirmLoading: modalData.isLoading,
    });
  };
  return (
    <>
      <div>
        <Button
          onClick={() => dispatch(openModal({ isNewDay: true }))}
          icon={<FormOutlined />}
          type="primary"
        >
          Create day
        </Button>
      </div>
      <S.DaysContainer>
        {days.map((day) => {
          const { deaths, recovered, cases, date, _id } = day;
          return (
            <ChronologyDay
              key={_id}
              handleEdit={() =>
                dispatch(
                  openModal({
                    isNewDay: false,
                    deaths,
                    recovered,
                    cases,
                    date,
                    _id,
                  }),
                )
              }
              handleDelete={() => confirmDeletion(_id, date)}
              deaths={deaths}
              recovered={recovered}
              cases={cases}
              date={date}
              id={_id}
            />
          );
        })}
        {modalData.isActive && <Modal modalData={modalData} />}
      </S.DaysContainer>
    </>
  );
};

export default Dashboard;
