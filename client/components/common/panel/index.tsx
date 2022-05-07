import React from "react";

const BasePanel: React.FunctionComponent = () => {
  const [page, setPage] = useState(0);
  const handleChange = (e, val) => {
    e.preventDefault();
    setPage(val);
  };
  return (
    <>
      <Tabs value={page} onChange={handleChange}></Tabs>
    </>
  );
};

export default BasePanel;
