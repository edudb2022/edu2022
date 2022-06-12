import { Tabs } from "@mui/material"

import React, { useState } from "react"
import { college, uni } from "../../../constants/school"
import { SCHOOL_TYPE } from "../../../types/common"
import BaseTap from "../tap"
import SchoolsPanelItems, { SchoolsPanelItemsProps } from "./items/schools"

interface SchoolsPanelProps extends Partial<SchoolsPanelItemsProps> {}

const SchoolsPanel: React.FunctionComponent<SchoolsPanelProps> = ({
  currentIndex,
  schools,
  searchText,
}) => {
  return (
    <div className="w-full md:w-9/10 flex-wrap flex flex-row gap-y-6 gap-x-12 justify-center md:justify-start">
      <SchoolsPanelItems
        index={SCHOOL_TYPE.UNIVERSITY}
        currentIndex={currentIndex!}
        schools={uni}
        searchText={searchText!}
      />
      <SchoolsPanelItems
        index={SCHOOL_TYPE.COLLEGE}
        currentIndex={currentIndex!}
        schools={college}
        searchText={searchText!}
      />
    </div>
  )
}

export default SchoolsPanel
