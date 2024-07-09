import React from "react";

const OrderHistory = ({ orders }) => {
  return (
    <div className="mt-4">
      <h3
        style={{
          color: "#45464E",
          fontWeight: 300,
          fontSize: "16px",
        }}
      >
        Recent Orders
      </h3>
      {orders.map((order, index) => (
        <div className="d-flex align-items-center justify-content-between mt-4" key={index}>
          <div className="d-flex align-items-center">
            <img src={order.image} width={50} height={50} alt="icon" />
            <div style={{ marginLeft: "10px" }}>
              <h5
                style={{
                  fontSize: "14px",
                }}
              >
                {order.productName}
              </h5>
              <span
                style={{
                  fontWeight: 300,
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                {order.price} x {order.quantity}
              </span>
            </div>
          </div>
          <div>
            <h5
              style={{
                fontWeight: 300,
                fontSize: "12px",
                color: "#A6A8B1",
              }}
            >
              {order.date}
            </h5>
            <span
              style={{
                color: order.statusColor,
                background: order.statusBackground,
                fontWeight: 300,
                fontSize: "10px",
                borderRadius: "20px",
                padding: "5px 10px",
              }}
            >
              {order.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
