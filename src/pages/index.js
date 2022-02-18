import First from "./one/First";
import Second from "./one/Second";
import SFirst from "./two/SFirst";
import SSecond from "./two/SSecond";

export const navigation = [
  {
    main: "First",
    sub: [
      { name: "First", path: "/first" },
      { name: "Second", path: "/second" },
    ],
  },
  {
    main: "Second",
    sub: [
      { name: "S-First", path: "/s-first" },
      { name: "S-Second", path: "s-second" },
    ],
  },
];

export const routes = [
  { path: "/first", element: <First /> },
  { path: "/second", element: <Second /> },
  { path: "/s-first", element: <SFirst /> },
  { path: "/s-second", element: <SSecond /> },
];
