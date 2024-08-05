import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  InputBase,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  ExpandLess,
  ArrowBackIos,
  ArrowForwardIos,
  ExpandMore,
  Search as SearchIcon,
} from "@mui/icons-material";

const menuItems = [
  {
    title: "FREQUENTLY USED",
    items: [
      "Hồ sơ",
      "Quản lý hồ sơ",
      "Vay mua nhà",
      "Khoản vay tài chính cá nhân",
      "Xác minh thẩm định thực địa",
    ],
  },
  {
    title: "MAIN MENU",
    items: [
      {
        name: "Hồ sơ",
        subItems: [
          "Khách hàng tiềm năng",
          "Đề xuất",
          "Xóa/Lưu trữ hồ sơ",
          {
            name: "Danh mục hồ sơ",
            subItems: [
              "Hồ sơ",
              "Khoản vay mua ô tô",
              "Khoản vay tài chính cá nhân",
              "Hồ sơ thẻ tín dụng",
              "Vay mua nhà",
              "Hồ sơ thẻ Insta",
            ],
          },
          "Danh mục tài liệu phê duyệt",
          "Hồ sơ đã kết thúc quy trình",
          "Hủy hồ sơ",
          "Từ chối hồ sơ",
          "Các hồ sơ bị hủy",
          "Sao chép hồ sơ",
          "Danh mục truy vấn",
          "Phê duyệt bởi hội đồng",
          "Quản lý hồ sơ",
          "Hồ sơ đang lỗi",
          "Xác minh, thực địa",
          "Giao diện khởi tạo lại hàng loạt",
          "Theo dõi khoản cấp tín dụng ngoa",
        ],
      },
      "Báo cáo",
      "Tìm kiếm",
    ],
  },
];

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleItemClick = (item: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(item)
        ? prevOpenItems.filter((i) => i !== item)
        : [...prevOpenItems, item]
    );
  };

  const MENU_WIDTH = 300;

  const renderMenuItems = (items: any[], level = 0) => {
    return items.map((item, index) => {
      if (typeof item === "string") {
        return (
          <ListItem key={index} sx={{ pl: 2 }}>
            <ListItemText primary={item} />
          </ListItem>
        );
      } else if (typeof item === "object") {
        const isExpanded = openItems.includes(item.name);
        return (
          <React.Fragment key={index}>
            <ListItem
              button
              onClick={() => handleItemClick(item.name)}
              sx={{ pl: 2, position: "relative" }}
            >
              <ListItemText primary={item.name} />
              {item.subItems &&
                (isExpanded ? <ArrowBackIos /> : <ArrowForwardIos />)}
            </ListItem>
            {item.subItems && (
              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  sx={{
                    position: "fixed",
                    left: `${MENU_WIDTH * (level + 1)}px`,
                    top: "60px",
                    height: "100vh",
                    overflowY: "auto",
                    overflowX: "hidden",
                    zIndex: 1301 + level,
                    backgroundColor: "rgb(243, 244, 246)", // gray-100
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                    width: `${MENU_WIDTH}px`,
                  }}
                >
                  {renderMenuItems(item.subItems, level + 1)}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        );
      }
      return null;
    });
  };

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      variant="persistent"
      sx={{
        zIndex: 1300,
        "& .MuiDrawer-paper": {
          width: MENU_WIDTH,
        },
      }}
      PaperProps={{
        sx: {
          overflowX: "hidden",
          top: "60px",
        },
      }}
    >
      <div
        style={{ width: MENU_WIDTH }}
        className="bg-gray-100 p-4 h-screen text-gray-500"
      >
        <div style={{ display: "flex", alignItems: "center", padding: "8px" }}>
          <InputBase
            placeholder="Search menu…"
            inputProps={{ "aria-label": "search" }}
            style={{ marginLeft: "8px", flex: 1 }}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <IconButton component={Link} to="/">
            <HomeIcon />
          </IconButton>
        </div>
        <List>
          {menuItems.map((section, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <Divider className="bg-gray-300" style={{ margin: "8px 0" }} />
              )}
              <ListItem>
                <ListItemText primary={section.title} />
              </ListItem>
              {renderMenuItems(section.items)}
            </React.Fragment>
          ))}
        </List>
      </div>
    </Drawer>
  );
};
