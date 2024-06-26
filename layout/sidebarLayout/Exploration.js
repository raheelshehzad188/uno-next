/**
 * It's a React component that renders a form with a submit button
 * @returns A function that returns a div.
 */
import React, { useState, useRef } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
  FormFeedback,
} from "reactstrap";
import { MdMarkEmailRead } from "react-icons/md";
import axios from "axios";
import { useTranslation } from "next-i18next";

const Exploration = ({ referenceId, inquiryModal, toggleInquiryModal }) => {
  const { t } = useTranslation("common");
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneNumberInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const [allowContact, setAllowContact] = useState(false);
  const [requestErrors, setRequestErrors] = useState("");
  const [finishRequest, setFinishRequest] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [inputsValid, setInputsValid] = useState({
    name: null,
    email: null,
    phoneNumber: null,
    message: null,
  });
  const [modal, setModal] = useState(false);

  const handleNameChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    isNameValid(name, value);

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const isNameValid = (name, value) => {
    let validMessage = "";

    if (value.length === 0) {
      validMessage = t("Required FullName");
    } else if (value.length < 4) {
      validMessage = t("Invalid Short Name");
    } else if (value.length > 55) {
      validMessage = t("Invalid Too Long Name");
    }

    setInputsValid((values) => ({ ...values, [name]: validMessage }));

    return validMessage.length === 0;
  };

  const handleEmailChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    isEmailValid(name, value);

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const isEmailValid = (name, value) => {
    let validMessage = "";
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (value.length === 0) {
      validMessage = t("Required Email");
    } else if (!emailRegex.test(value)) {
      validMessage = t("Invalid Email");
    }

    setInputsValid((values) => ({ ...values, [name]: validMessage }));

    return validMessage.length === 0;
  };

  const handlePhoneNumberChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    isPhoneNumberValid(name, value);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const isPhoneNumberValid = (name, value) => {
    let validMessage = "";
    const phoneNumberRegex = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;

    if (value.length === 0) {
      validMessage = t("Required Phone");
    } else if (!phoneNumberRegex.test(value)) {
      validMessage = t("Invalid Phone");
    }

    setInputsValid((values) => ({ ...values, [name]: validMessage }));

    return validMessage.length === 0;
  };

  const handleMessageChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    isMessageValid(name, value);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const isMessageValid = (name, value) => {
    let validMessage = "";

    if (value.length === 0) {
      validMessage = t("Required Message");
    } else if (value.length < 4) {
      validMessage = t("Invalid Short Message");
    } else if (value.length > 4650) {
      validMessage = t("Invalid Too Long Message");
    }

    setInputsValid((values) => ({ ...values, [name]: validMessage }));

    return validMessage.length === 0;
  };

  const allowContactHandler = (event) => {
    setAllowContact(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      isNameValid(
        nameInputRef.current.props.name,
        nameInputRef.current.props.value
      ) &&
      isEmailValid(
        emailInputRef.current.props.name,
        emailInputRef.current.props.value
      ) &&
      isPhoneNumberValid(
        phoneNumberInputRef.current.props.name,
        phoneNumberInputRef.current.props.value
      ) &&
      isMessageValid(
        messageInputRef.current.props.name,
        messageInputRef.current.props.value
      )
    ) {
      setModal(true);
    }
  };

  const sendInquiryRequestHandler = () => {
    axios
      .post(
        `${process.env.API_URL}en/project/register-your-interest`,
        {
          register_interest_name: inputs.name,
          register_interest_email: inputs.email,
          register_interest_phone: inputs.phoneNumber,
          register_interest_message: inputs.message,
          register_interest_allow_contact: allowContact ? "yes" : "no",
          register_interest_project_id: referenceId ?? 0,
        },
        {
          responseType: "json",
        }
      )
      .then((response) => {
        if (response) {
          if (response.data.success) {
            setFinishRequest(true);
            setTimeout(() => {
              setModal(false);
              setInputs({ name: "", email: "", phoneNumber: "", message: "" });
              setInputsValid({
                name: null,
                email: null,
                phoneNumber: null,
                message: null,
              });
              setRequestErrors("");
              setFinishRequest(false);
              toggleInquiryModal(false);
            }, 2000);
          } else {
            setRequestErrors(response.data.errors.join(", "));
          }
        }
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
      });
  };

  return (
    <div className="advance-card">
      <Modal
        isOpen={inquiryModal}
        centered={true}
        toggle={() => toggleInquiryModal(!inquiryModal)}
      >
        <ModalHeader>
          <strong>{t("Make An Enquiry")}</strong>
        </ModalHeader>
        <ModalBody>
          <div className="category-property">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  className="form-control"
                  placeholder={t("Field Name")}
                  name="name"
                  value={inputs.name}
                  ref={nameInputRef}
                  onChange={handleNameChange}
                  valid={
                    inputsValid.name !== null && inputsValid.name.length === 0
                  }
                  invalid={
                    inputsValid.name !== null && inputsValid.name.length > 0
                  }
                />
                <FormFeedback
                  valid={
                    inputsValid.name !== null && inputsValid.name.length === 0
                  }
                  invalid={
                    inputsValid.name !== null && inputsValid.name.length > 0
                  }
                >
                  {inputsValid.name !== null && inputsValid.name}
                </FormFeedback>
              </FormGroup>

              <FormGroup className="form-group">
                <Input
                  type="email"
                  className="form-control"
                  placeholder={t("Field Email")}
                  name="email"
                  value={inputs.email}
                  ref={emailInputRef}
                  onChange={handleEmailChange}
                  valid={
                    inputsValid.email !== null && inputsValid.email.length === 0
                  }
                  invalid={
                    inputsValid.email !== null && inputsValid.email.length > 0
                  }
                />
                <FormFeedback
                  valid={
                    inputsValid.email !== null && inputsValid.email.length === 0
                  }
                  invalid={
                    inputsValid.email !== null && inputsValid.email.length > 0
                  }
                >
                  {inputsValid.email !== null && inputsValid.email}
                </FormFeedback>
              </FormGroup>
              <FormGroup className="form-group">
                <Input
                  placeholder={t("Field Phone")}
                  className="form-control"
                  name="phoneNumber"
                  value={inputs.phoneNumber || ""}
                  ref={phoneNumberInputRef}
                  onChange={handlePhoneNumberChange}
                  valid={
                    inputsValid.phoneNumber !== null &&
                    inputsValid.phoneNumber.length === 0
                  }
                  invalid={
                    inputsValid.phoneNumber !== null &&
                    inputsValid.phoneNumber.length > 0
                  }
                />
                <FormFeedback
                  valid={
                    inputsValid.phoneNumber !== null &&
                    inputsValid.phoneNumber.length === 0
                  }
                  invalid={
                    inputsValid.phoneNumber !== null &&
                    inputsValid.phoneNumber.length > 0
                  }
                >
                  {inputsValid.phoneNumber !== null && inputsValid.phoneNumber}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  placeholder={t("Field Message")}
                  className="form-control resize-none"
                  rows="3"
                  name="message"
                  value={inputs.message}
                  ref={messageInputRef}
                  onChange={handleMessageChange}
                  valid={
                    inputsValid.message !== null &&
                    inputsValid.message.length === 0
                  }
                  invalid={
                    inputsValid.message !== null &&
                    inputsValid.message.length > 0
                  }
                ></Input>
                <FormFeedback
                  valid={
                    inputsValid.message !== null &&
                    inputsValid.message.length === 0
                  }
                  invalid={
                    inputsValid.message !== null &&
                    inputsValid.message.length > 0
                  }
                >
                  {inputsValid.message !== null && inputsValid.message}
                </FormFeedback>

                <FormGroup check className="mt-3">
                  <Input
                    type="checkbox"
                    className="p-2"
                    name="allowContact"
                    onChange={allowContactHandler}
                  />
                  <Label check className="mt-1 ms-1">
                    {t("Field Allow Contact")}
                  </Label>
                </FormGroup>
              </FormGroup>
              <ModalFooter className="pb-0 pe-0">
                <Button type="submit" className="btn btn-gradient btn-pill">
                  {t("Button Submit Request")}
                </Button>
              </ModalFooter>
            </Form>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={modal} centered={true} toggle={() => setModal(!modal)}>
        {!finishRequest ? (
          <>
            <ModalHeader>
              <strong>Inquiry Request</strong>
            </ModalHeader>
            <ModalBody>
              <p className="m-1">
                {t("Field Name")} : <b>{inputs.name}</b>
              </p>
              <p className="m-1 mt-3">
                {t("Field Email")} : <b>{inputs.email}</b>
              </p>
              <p className="m-1 mt-3">
                {t("Field Phone")} <b>{inputs.phoneNumber}</b>
              </p>
              <p className="m-1 mt-3">
                {t("Field Message")} <b>{inputs.message}</b>
              </p>
              <p className="m-1 mt-3">
                {t("Field Allow Contact")}{" "}
                <b>{allowContact ? t("Yes") : t("No")}</b>
              </p>

              <p className="text-danger mt-4">{requestErrors || ""}</p>
            </ModalBody>

            <ModalFooter>
              <Button
                className="btn btn-gradient btn-pill"
                onClick={sendInquiryRequestHandler}
              >
                {t("Send")}
              </Button>
              <Button
                className="btn btn-secondary btn-pill"
                onClick={() => setModal(false)}
              >
                {t("Cancel")}
              </Button>
            </ModalFooter>
          </>
        ) : (
          <>
            <ModalBody className="text-center">
              <MdMarkEmailRead className="text-primary display-1" />
              <h2>{t("Successful Request")}</h2>
              <p>{t("Successful Message")}</p>
            </ModalBody>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Exploration;
