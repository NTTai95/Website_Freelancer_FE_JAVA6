import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import { FaCog, FaBell, FaHome, FaPencilAlt, FaUser, FaBullhorn, FaCaretDown, FaCaretUp } from 'react-icons/fa'; // Import thêm các icon mở/đóng menu

const Sidebar = () => {
  const [isReportOpen, setIsReportOpen] = useState(false); // Trạng thái mở/đóng menu Báo cáo

  // Hàm toggle mở/đóng menu con
  const toggleReportMenu = () => {
    setIsReportOpen(!isReportOpen);
  };

  return (
    <div className={`${styles.sidebar} bg-light`}>
      <ul className="list-unstyled">
        <li className="py-2 px-3">
          <FaHome size={20} /> {/* Thêm icon Trang chủ */}
          <span className="ms-2">Trang chủ</span>
        </li>
        <li className="py-2 px-3">
          <FaPencilAlt size={20} /> {/* Thêm icon Kỹ năng */}
          <span className="ms-2">Kỹ năng</span>
        </li>
        <li className="py-2 px-3">
          <FaUser size={20} /> {/* Thêm icon Quản lý */}
          <span className="ms-2">Quản lý</span>
        </li>
        <li className="py-2 px-3" onClick={toggleReportMenu}>
          <FaBullhorn size={20} /> {/* Thêm icon Báo cáo */}
          <span className="ms-2">Báo cáo</span>
          {isReportOpen ? (
            <FaCaretUp size={20} className="float-end" />
          ) : (
            <FaCaretDown size={20} className="float-end" />
          )}
        </li>
        {isReportOpen && (
          <ul className={`${styles.submenu} ps-4`}>
            <li className="py-2">Từ freelancer</li>
            <li className="py-2">Từ nhà tuyển dụng</li>
          </ul>
        )}
      </ul>

      {/* Thêm nút cài đặt và thông báo */}
      <div className={`${styles.settings} d-flex justify-content-between align-items-center px-3 mt-auto`}>
        <button className={`${styles.iconBtn} position-relative`}>
          <FaBell size={20} /> {/* Icon thông báo */}
          <span className={`${styles.badge} position-absolute top-0 start-100 translate-middle`}>9</span>
        </button>
        <button className={styles.iconBtn}>
          <FaCog size={20} /> {/* Icon cài đặt */}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
