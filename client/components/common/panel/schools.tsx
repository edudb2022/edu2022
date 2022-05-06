import { Tabs } from "@mui/material";

import React, { useState } from "react";
import { college, uni } from "../../../constants/school";
import BaseTap from "../tap";
import SchoolsPanelItems from "./items/schools";

const SchoolsPanel: React.FunctionComponent = () => {
  const [page, setPage] = useState(0);
  const handleChange = (e, val) => {
    e.preventDefault();
    setPage(val);
  };

  return (
    <div>
      <Tabs value={page} onChange={handleChange} centered>
        <BaseTap className="w-1/2 text-center" label="大學" />
        <BaseTap className="w-1/2 text-center" label="大專" />
      </Tabs>
      <div className="m-12 ">
        <SchoolsPanelItems index={0} currentIndex={page} schools={uni} />
        <SchoolsPanelItems index={1} currentIndex={page} schools={college} />
      </div>
    </div>
  );
};

export default SchoolsPanel;
