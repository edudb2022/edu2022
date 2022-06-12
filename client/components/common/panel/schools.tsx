import React, { useState } from "react"
import { college, uni } from "../../../constants/school"
import { SCHOOL_TYPE } from "../../../types/common"
import CardDisplayLayout from "../../layouts/cardDisplay"

import SchoolsPanelItems, { SchoolsPanelItemsProps } from "./items/schools"

interface SchoolsPanelProps extends Partial<SchoolsPanelItemsProps> {}

const SchoolsPanel: React.FunctionComponent<SchoolsPanelProps> = ({
  currentIndex,
  schools,
  searchText,
}) => {
  return (
    <CardDisplayLayout>
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
    </CardDisplayLayout>
  )
}

export default SchoolsPanel
