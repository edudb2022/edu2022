import React from "react"
import BaseSelect, { IBaseSelectProps } from "."

interface IContactSelectProps extends Partial<IBaseSelectProps> {}

export const ContactSelect: React.FunctionComponent<IContactSelectProps> = ({
  isTouched,
  errorMessages,
  selectValue,
  ...props
}) => {
  const options = [
    {
      value: "email",
      title: "Email"
    },
    {
      value: "telegram",
      title: "Telegram"
    },
    {
      value: "whatsapp",
      title: "Whatsapp"
    },
    {
      value: "singal",
      title: "Singal"
    },
    {
      value: "other",
      title: "Other"
    }
  ]
  return (
    <BaseSelect
      variant="outlined"
      isTouched={isTouched}
      errorMessages={errorMessages}
      items={options}
      selectValue={selectValue!}
      {...props}
    />
  )
}
