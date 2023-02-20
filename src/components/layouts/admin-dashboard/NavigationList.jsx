import duotone from "components/icons/duotone";
export const navigations = [
  {
    type: "label",
    label: "STORE",
  },
  {
    name: "대시보드",
    icon: duotone.Dashboard,
    path: "/",
  },
  {
    name: "도서",
    icon: duotone.Products,
    children: [
      {
        name: "도서목록",
        path: "/admin/books",
      },
      {
        name: "도서등록",
        path: "/admin/books/create",
      },
    ],
  },
  // {
  //   name: "회원",
  //   icon: duotone.Customers,
  //   children: [
  //     {
  //       name: "회원리스트",
  //       path: "/admin/members",
  //     },
  //     {
  //       name: "회원리스트2",
  //       path: "/admin/members/type",
  //     },
  //   ],
  // },
  // {
  //   name: "마일리지",
  //   icon: duotone.Refund,
  //   children: [
  //     {
  //       name: "상품리스트",
  //       path: "/admin/mileage",
  //     },
  //     {
  //       name: "상품등록",
  //       path: "/admin/mileage/create",
  //     },
  //     {
  //       name: "마일리지히스토리",
  //       path: "/admin/mileage/history",
  //     },
  //     {
  //       name: "마일리지지급내역",
  //       path: "/admin/mileage/payout",
  //     },
  //   ],
  // },
  // {
  //   type: "label",
  //   label: "DEV",
  // },
  // {
  //   name: "Layouts",
  //   icon: duotone.Products,
  //   path: "/dev/layouts",
  // },
  // {
  //   name: "Typography",
  //   icon: duotone.Products,
  //   path: "/dev/typography",
  // },
  // {
  //   name: "Colorset",
  //   icon: duotone.Products,
  //   path: "/dev/colorset",
  // },
  // {
  //   name: "Components",
  //   icon: duotone.Products,
  //   children: [
  //     {
  //       name: "Buttons",
  //       path: "/dev/components/buttons",
  //     },
  //     {
  //       name: "Tab Style",
  //       path: "/dev/components/tabs",
  //     },
  //     {
  //       name: "Controls",
  //       path: "/dev/components/controls",
  //     },
  //     {
  //       name: "Accordion",
  //       path: "/dev/components/accordion",
  //     },
  //   ],
  // },
  // {
  //   name: "Contents",
  //   icon: duotone.Products,
  //   children: [
  //     {
  //       name: "Tables",
  //       path: "/dev/contents/table",
  //     },
  //     {
  //       name: "Forms",
  //       path: "/dev/contents/forms",
  //     },
  //     {
  //       name: "Editor",
  //       path: "/dev/contents/editor",
  //     },
  //     {
  //       name: "Modals",
  //       path: "/admin/products/create",
  //     },
  //   ],
  // },
];
