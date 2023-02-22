import { Badge } from "@mui/material";
import Home from "components/icons/Home";
import User2 from "components/icons/User2";
import CategoryOutlined from "components/icons/CategoryOutline";
import ShoppingBagOutlined from "components/icons/ShoppingBagOutlined";

import useWindowSize from "hooks/useWindowSize";
import { useAppContext } from "contexts/AppContext";
import { iconStyle, StyledNavLink, Wrapper } from "./styles";

const MobileNavigationBar = () => {
  const width = useWindowSize();
  const { state } = useAppContext();
  return width <= 900 ? (
    <Wrapper>
      {list.map(item => (
        <StyledNavLink href={item.href} key={item.title}>
          {item.title === "Cart" ? (
            <Badge badgeContent={state.cart.length} color='primary'>
              <item.icon fontSize='small' sx={iconStyle} />
            </Badge>
          ) : (
            <item.icon sx={iconStyle} fontSize='small' />
          )}

          {item.title}
        </StyledNavLink>
      ))}
    </Wrapper>
  ) : null;
};

const list = [
  {
    title: "홈 ",
    icon: Home,
    href: "/",
  },
  {
    title: "내책판매",
    icon: ShoppingBagOutlined,
    href: "/my/create",
  },
  // {
  //   title: "Cart",
  //   icon: ShoppingBagOutlined,
  //   href: "/cart",
  // },
  {
    title: "내정보",
    icon: User2,
    href: "/profile",
  },
];
export default MobileNavigationBar;
