import React from "react";
import Modal from "react-modal";

const TermsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="flex flex-col justify-center w-full gap-2 pt-5 px-4 font-DMsans md:px-5 md:pb-6">
        <div className="flex flex-col gap-3">
          <span className="font-bold text-2xl text-center text-homeColor md:text-3xl">
            TERMS AND CONDITIONS
          </span>
          <p className="font-bold text-center text-base">
            Please read the terms and conditions carefully as you will be bound
            by them immediately you append your signature/thumbprint below.
          </p>
        </div>
        <div className="gap-4 text-base">
          <p>
            1. The Finance House is under no obligation to open, create or
            permit the operation of the requested amount until receipt of all
            specific document for the account.
          </p>
          <p>
            2. The Finance House shall honor all cheque/orders/instrument on
            your account provided such instrument are duly signed by you in line
            with your mandate and to debit such to your account where
            applicable.
          </p>
          <p>
            3. I/We authorize the Finance House to undertake all "Know Your
            Customer" procedure as stated by government regulation, laws and
            Finance House policies.
          </p>
          <p>
            4. I/We agree that the Finance House may at its sole discretion and
            without prior notice, change the minimum balance requirement,
            charges or interest rate on any amount I/we operate with you.
          </p>
          <p>
            5. The Finance House has the right to set-off or to transfer
            balances from my various account to settle a particular amount off
            to close my account.
          </p>
          <p>
            6. We shall be solely responsible for the safe keep and
            confidentiality of my/our debit card/PIN/User ID, password and any
            other valid information regarding my account with the Finance House.
          </p>
          <br />
          <p>
            I/We have read and understood Sentryvest Limited terms stated above.
          </p>
          <p>
            I/We agree to be bound to the said terms and conditions including
            those excluding/limiting the Finance House liability.
          </p>
          <p>
            I/We agree that the Finance House may debit my/our account for the
            services charges as applicable from time to time.
          </p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="bg-homeColor text-white border border-buttonColor py-2 px-4 hover:bg-buttonColor"
      >
        Close
      </button>
    </Modal>
  );
};

export default TermsModal;
