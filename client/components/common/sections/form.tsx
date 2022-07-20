import React, { PropsWithChildren } from "react"
import { IInputContainerProps } from "../../containers/input"
import InputHeader, { IInputHeaderProps } from "../header/input"

interface IFormSectionProps extends IInputHeaderProps {
  className?: string
}

const FormSection: React.FunctionComponent<
  PropsWithChildren<IFormSectionProps>
> = ({
  className,
  children,
  header,
  headerClassName,
  headerRequired,
  subHeader,
  subHeaderClassName
}) => {
  return (
    <div className={`${className}`}>
      <InputHeader
        header={header}
        headerClassName={headerClassName}
        headerRequired={headerRequired}
        subHeader={subHeader}
        subHeaderClassName={subHeaderClassName}
      />
      {children}
    </div>
  )
}

export default FormSection
