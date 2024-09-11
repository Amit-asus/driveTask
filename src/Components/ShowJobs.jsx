import { useSelector, useDispatch } from "react-redux";
import { actions } from "../Features/createJob/slice";
import { useEffect, useMemo } from "react";
import { Table, Spin, Alert } from "antd";
import { useSyncExternalStore } from "react";

const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    const groupKey = currentValue[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(currentValue);
    return result;
  }, {});
};

const groupBy2 = (arr, key) => {
  return arr.reduce((result, curr) => {
    const groupByKey = curr[key];
    if (!result[groupByKey]) {
      result[groupByKey] = [];
    }
    result[groupByKey].push(curr);
    return result;
  }, []);
};

const groupBy3 = (arr, key) => {
  return arr.reduce((acc, curr) => {
    const groupByKey = curr[key];
    if (!acc[groupByKey]) {
      acc[groupByKey] = [];
    }
    acc[groupByKey].push(curr);
    return acc;
  }, {});
};
const ShowNewDrive = () => {
  const drives = useSelector((state) => state.drives.drives.data);
  const loading = useSelector((state) => state.drives.loading);
  const error = useSelector((state) => state.drives.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchDrive());
  }, [dispatch]);

  // Group the drives by jobRole using the groupBy function
  const groupedDrives = useMemo(() => {
    if (drives) {
      return groupBy(drives, "jobRole"); // Grouping by jobRole
    }
    return {};
  }, [drives]);

  const columns = [
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
      sorter: (a, b) => a.jobTitle.localeCompare(b.jobTitle),
    },
    {
      title: "Job Role",
      dataIndex: "jobRole",
      key: "jobRole",
    },
  ];

  const data = useMemo(() => {
    if (groupedDrives) {
      return Object.entries(groupedDrives).flatMap(([groupKey, groupItems]) =>
        groupItems.map((drive) => ({
          key: drive._id,
          jobTitle: drive.jobTitle,
          jobRole: drive.jobRole,
        }))
      );
    }
    return [];
  }, [groupedDrives]);

  if (loading) {
    return <Spin tip="Loading..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "50"],
      }}
    />
  );
};

export default ShowNewDrive;
