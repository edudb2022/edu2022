import React from "react"

interface IStudentIconProps {
  className?: string
}

const StudentIcon: React.FunctionComponent<IStudentIconProps> = ({
  className
}) => {
  return <div className={`${className}`}>🎓</div>
}

export default StudentIcon
