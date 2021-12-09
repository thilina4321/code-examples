import { useEffect, useState } from "react";

const ViewOne = () => {
  const [view1, setView1] = useState([{ sizeId: 1 }, { sizeId: 2 }]);
  const [view2, setView2] = useState([]);

  useEffect(() => {
    view1.forEach((element) => {
      const value = Object.values(element)[0];
      setView2((prev) => [...prev, value]);
    });
  }, []);

  view2.length !== 0 && console.log("View One", view1);
  view2.length !== 0 && console.log("View Two", view2);

  return <div>View</div>;
};

export default ViewOne;
