import React from "react";
import PropTypes from "prop-types";
function NotificationItem({ type, value, html }) {
  return (
    <li
      data-notification-type={type}
      {...(html ? { dangerouslySetInnerHTML: HTML } : {})}
    >
      {html ? null : value}
    </li>
  );
}
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: null,
};

export default NotificationItem;
