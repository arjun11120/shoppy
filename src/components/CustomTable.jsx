import React, { useState } from "react";
import { Table, Input } from "antd";

const CustomTable = () => {
  const [searchEmp, setSearchEmp] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

const employees = [
          {
            EmployeeId: 1002,
            EmpName: "Jane Smith",
            Department: "Marketing",
            Salary: 60000,
            PhNumber: "555-5678",
            EmailId: "jane.smith@example.com",
            Address: "456 Elm St",
            State: "CA",
          },
          {
            EmployeeId: 1001,
            EmpName: "John Doe",
            Department: "HR",
            Salary: 50000,
            PhNumber: "555-1234",
            EmailId: "john.doe@example.com",
            Address: "123 Main St",
            State: "NY",
          },
          {
            EmployeeId: 1003,
            EmpName: "Michael Johnson",
            Department: "Finance",
            Salary: 55000,
            PhNumber: "555-9876",
            EmailId: "michael.johnson@example.com",
            Address: "789 Oak St",
            State: "TX",
          },
          {
            EmployeeId: 1005,
            EmpName: "David Garcia",
            Department: "Operations",
            Salary: 48000,
            PhNumber: "555-8765",
            EmailId: "david.garcia@example.com",
            Address: "202 Cedar St",
            State: "WA",
          },
          {
            EmployeeId: 1004,
            EmpName: "Emily Chen",
            Department: "IT",
            Salary: 65000,
            PhNumber: "555-5432",
            EmailId: "emily.chen@example.com",
            Address: "101 Maple St",
            State: "FL",
          },
          {
            EmployeeId: 1006,
            EmpName: "Anna Brown",
            Department: "Sales",
            Salary: 62000,
            PhNumber: "555-6789",
            EmailId: "anna.brown@example.com",
            Address: "333 Pine St",
            State: "NV",
          },
          {
            EmployeeId: 1007,
            EmpName: "Brian Wilson",
            Department: "Customer Support",
            Salary: 47000,
            PhNumber: "555-2345",
            EmailId: "brian.wilson@example.com",
            Address: "444 Birch St",
            State: "OR",
          },
          {
            EmployeeId: 1008,
            EmpName: "Carol Martinez",
            Department: "Legal",
            Salary: 70000,
            PhNumber: "555-3456",
            EmailId: "carol.martinez@example.com",
            Address: "555 Spruce St",
            State: "AZ",
          }
        ]

  const columns = [
    {
      title: "EmployeeId",
      dataIndex: "EmployeeId",
      key: "EmployeeId",
      sorter: true,
    },
    {
      title: "EmpName",
      dataIndex: "EmpName",
      key: "EmpName",
      sorter: true,
    },
    {
      title: "Department",
      dataIndex: "Department",
      key: "Department",
      sorter: true,
    },
    {
      title: "Salary",
      dataIndex: "Salary",
      key: "Salary",
      sorter: true,
    },
    {
      title: "Phone Number",
      dataIndex: "PhNumber",
      key: "PhNumber",
      sorter: true,
    },
    {
      title: "EmailId",
      dataIndex: "EmailId",
      key: "EmailId",
      sorter: true,
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
      sorter: true,
    },
    {
      title: "State",
      dataIndex: "State",
      key: "State",
      sorter: true,
    },
  ];

  const handleTableChange = (pagination, filters, sorter) => {
    setSortColumn(sorter.field);
    setSortOrder(sorter.order);
  };

  const handleSearch = (e) => {
    setSearchEmp(e.target.value);
  };

  const searchedEmployees = employees.filter((employee) =>
    employee.EmpName.toLowerCase().includes(searchEmp.toLowerCase())
  );

  const sortedData = [...searchedEmployees].sort((a, b) => {
    if (!sortColumn) return 0;
    const order = sortOrder === "ascend" ? 1 : -1;
    if (a[sortColumn] < b[sortColumn]) return -order;
    if (a[sortColumn] > b[sortColumn]) return order;
    return 0;
  });

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="mt-3">
      <Input
        placeholder="Search Employee"
        value={searchEmp}
        onChange={handleSearch}
        style={{ marginBottom: 16 }}
      />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={sortedData}
        pagination={false}
        onChange={handleTableChange}
        rowKey="EmployeeId"
      />
    </div>
  );
};

export default CustomTable;
