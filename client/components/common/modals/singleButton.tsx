import React, { PropsWithChildren } from "react";
import BaseModal, { IBaseModalProps } from ".";

interface ISingleButtonModalProps extends IBaseModalProps {
  //   isOpen: boolean;
  buttonTitle: string;
  buttonClassName?: string;
}

const SingleButtonModal: React.FunctionComponent<
  PropsWithChildren<ISingleButtonModalProps>
> = ({
  //   isOpen,
  buttonTitle,
  buttonClassName,
  children,
  ...props
}) => {
  return (
    <BaseModal {...props}>
      <div>
        {children}

        <button
          className={`absolute bottom-0 left-0 w-full p-2 rounded-b-2xl  bg-[#319795] text-white ${buttonClassName}`}
        >
          {buttonTitle}
        </button>
      </div>
    </BaseModal>
  );
};

export default SingleButtonModal;
