import React from "react";
import Modal from "react-modal";

const TermsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2 max-h-full lg:max-h-3/4 overflow-y-auto">
          <div className="px-5 text-justify w-full">
            <div className="flex flex-col gap-12 md:gap-12 lg:gap-16 pt-12 pb-16 md:py-12 lg:py-16">
              <div className="flex flex-col gap-1 md:gap-5 lg:gap-5">
                <div className="flex flex-col gap-3">
                  <span className="font-gotham text-2xl text-center text-homeColor md:text-3xl">
                    TERMS AND CONDITIONS
                  </span>
                  <p className="text-base">
                    Please read the terms and conditions carefully as you will
                    be bound by them immediately you append your
                    signature/thumbprint below.
                  </p>
                </div>
                <div className="gap-4 text-base">
                  <p>
                    1. The Finance House is under no obligation to open, create
                    or permit the operation of the requested amount until
                    receipt of all specific document for the account.
                  </p>
                  <p>
                    2. The Finance House shall honor all
                    cheque/orders/instrument on your account provided such
                    instrument are duly signed by you in line with your mandate
                    and to debit such to your account where applicable.
                  </p>
                  <p>
                    3. I/We authorize the Finance House to undertake all "Know
                    Your Customer" procedure as stated by government regulation,
                    laws and Finance House policies.
                  </p>
                  <p>
                    4. I/We agree that the Finance House may at its sole
                    discretion and without prior notice, change the minimum
                    balance requirement, charges or interest rate on any amount
                    I/we operate with you.
                  </p>
                  <p>
                    5. The Finance House has the right to set-off or to transfer
                    balances from my various account to settle a particular
                    amount off to close my account.
                  </p>
                  <p>
                    6. We shall be solely responsible for the safe keep and
                    confidentiality of my/our debit card/PIN/User ID, password
                    and any other valid information regarding my account with
                    the Finance House.
                  </p>
                  <br />
                  <p>
                    I/We have read and understood Sentryvest Limited terms
                    stated above.
                  </p>
                  <p>
                    I/We agree to be bound to the said terms and conditions
                    including those excluding/limiting the Finance House
                    liability.
                  </p>
                  <p>
                    I/We agree that the Finance House may debit my/our account
                    for the services charges as applicable from time to time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 px-6 py-4 flex justify-end">
            <button
              onClick={onClose}
              className="bg-homeColor text-base text-white border h-11 w-28 flex items-center justify-center border-buttonColor hover:bg-buttonColor hover:border-buttonColor"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TermsModal;
