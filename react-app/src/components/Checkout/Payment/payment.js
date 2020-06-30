/*
 * Copyright 2020 EPAM Systems, Inc. (https://www.epam.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { connect } from "react-redux";
import InputMask from "react-input-mask";
import Input from "components/core/Input/TextInput/textInput";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import Select from "components/core/Select";
import { PaymentStyled, Wrapper, PaymentFields } from "./paymentStyled";
import PaymentMethods from "./paymentMethods";
import { defineCardType } from "../BillingForm/helpers";

import { createInputProps } from "../AddressForm/helpers";

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      securityCode: "",
      focus: "",
      cardOwner: props?.paymentInstrumentsArray[0]?.owner
        ? props?.paymentInstrumentsArray[0]?.owner
        : "",
      cardNumber: "",
      expirationMonth: props?.paymentInstrumentsArray[0]?.expirationMonth
        ? `0${props?.paymentInstrumentsArray[0]?.expirationMonth}`.slice(-2)
        : "",
      expirationYear: props?.paymentInstrumentsArray[0]?.expirationYear
        ? props?.paymentInstrumentsArray[0]?.expirationYear
        : "",
    };
  }

  handleFocus = (e) => {
    let focused;
    switch (e.target.name) {
      case "dwfrm_billing_creditCardFields_cardNumber":
        focused = "number";
        break;
      case "dwfrm_billing_creditCardFields_cardOwner":
        focused = "name";
        break;
      case "dwfrm_billing_creditCardFields_expirationMonth":
        focused = "expiry";
        break;
      case "dwfrm_billing_creditCardFields_expirationYear":
        focused = "expiry";
        break;
      case "dwfrm_billing_creditCardFields_securityCode":
        focused = "cvc";
        break;
      default:
        focused = "";
    }
    this.setState({ focus: focused });
  };

  handleInputChange = (e) => {
    const { clearError, setError, fieldsError } = this.props;
    const { value, name } = e.target;
    const formattedName = name.split("_");
    const formattedValue =
      formattedName[formattedName.length - 1] !== "cardOwner"
        ? value.replace(/ /g, "")
        : value;
    this.setState({
      [formattedName[formattedName.length - 1]]: formattedValue,
    });
    return value
      ? clearError(name)
      : setError(name, "notMatch", fieldsError[name]);
  };

  handleSelectChange = (e) => {
    const { value, name } = e.target;
    const formattedName = name.split("_");
    let formattedValue = value || "";
    if (value && value.split("").length < 2) {
      formattedValue = `0${value}`;
    }
    this.setState({
      [formattedName[formattedName.length - 1]]: formattedValue,
    });
  };

  renderComponent = (fieldKey, maskProps, additionalProps, defaultValue) => {
    const {
      register,
      errors,
      setValue,
      clearError,
      fields,
      control,
      expirationYears,
      paymentInstrumentsArray,
    } = this.props;
    const paymentInstruments =
      (paymentInstrumentsArray && paymentInstrumentsArray[0]) || {};

    const field = fields[fieldKey];
    const expirationYearsObjs = expirationYears.map((year) => ({
      id: year,
      value: year,
    }));

    const defaultValueDate =
      field?.htmlValue ||
      (paymentInstruments[defaultValue]
        ? paymentInstruments[defaultValue].toString()
        : "");

    return (
      field &&
      (field.options ? (
        <div onChange={this.handleSelectChange} onFocus={this.handleFocus}>
          <Controller
            as={
              <Select
                values={
                  field.htmlName ===
                  "dwfrm_billing_creditCardFields_expirationYear"
                    ? field.options.concat(expirationYearsObjs)
                    : field.options
                }
                label={field?.mandatory ? `${field.label} *` : field.label}
                iconisrotated
                register={register}
                width={152}
                handleChange={({ target }) => {
                  const { name, value } = target;
                  setValue(name, value);
                  clearError(name);
                }}
                errorMsg={errors[field?.htmlName]?.message}
                error={!!errors[field?.htmlName]}
                defaultValue={parseInt(
                  defaultValueDate.replace(",", ""),
                  10
                ).toString()}
                name={field?.htmlName}
                {...additionalProps}
              />
            }
            control={control}
            name={field?.htmlName}
            defaultValue={defaultValueDate.replace(",", "")}
          />
        </div>
      ) : (
        <InputMask
          defaultValue={field?.htmlValue}
          mask={maskProps.mask}
          maskChar={maskProps.maskChar || ""}
          onChange={this.handleInputChange}
          onFocus={this.handleFocus}
        >
          {(inputProps) => (
            <Input
              {...createInputProps(field)}
              {...inputProps}
              register={register}
              {...additionalProps}
              errors={errors}
              defaultValue={paymentInstruments[defaultValue]}
            />
          )}
        </InputMask>
      ))
    );
  };

  render() {
    const {
      securityCode,
      expirationMonth,
      expirationYear,
      focus,
      cardOwner,
      cardNumber,
    } = this.state;

    const { register, fields, errors, paymentInstrumentsArray } = this.props;
    const expYear = fields?.expirationYear.htmlValue.replace(",", "").substr(2);
    const expiry = `${
      expirationMonth || fields?.expirationMonth.selectedOption
    }/${expirationYear || expYear}`;
    const cardType = defineCardType(cardNumber);
    return (
      <PaymentStyled>
        <PaymentMethods />
        <Cards
          cvc={securityCode || fields?.securityCode?.htmlValue}
          expiry={expiry}
          focused={focus}
          name={cardOwner || fields?.cardOwner?.htmlValue}
          number={cardNumber || fields?.cardNumber?.htmlValue}
        />
        <PaymentFields>
          <Wrapper>
            {this.renderComponent(
              "cardNumber",
              { mask: "9999 9999 9999 9999", maskChar: "" },
              { fullWidth: true }
            )}
          </Wrapper>
          <Wrapper>
            <Input
              {...createInputProps(fields.cardOwner)}
              register={register}
              fullWidth
              errors={errors}
              onChange={this.handleInputChange}
              onFocus={this.handleFocus}
              name={fields.cardOwner?.htmlName}
              defaultValue={
                paymentInstrumentsArray && paymentInstrumentsArray[0]?.owner
              }
            />
          </Wrapper>
          <Wrapper>
            {this.renderComponent("expirationMonth", {}, {}, "expirationMonth")}

            {this.renderComponent("expirationYear", {}, {}, "expirationYear")}

            {this.renderComponent(
              "securityCode",
              {
                mask: cardType === "Amex" ? "9999" : "999",
                maskChar: "",
              },
              {
                info:
                  "Please enter the security (CVV) code on the back of your card.",
                width: "152",
              }
            )}
          </Wrapper>
        </PaymentFields>
      </PaymentStyled>
    );
  }
}

const mapStateToProps = (state) => ({
  fields: state.checkout.billingForm.creditCardFields,
  expirationYears: state.checkout.expirationYears,
  paymentInstrumentsArray:
    state.checkout.order?.billing?.payment?.selectedPaymentInstruments,
});

Payment.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.any),
  formData: PropTypes.objectOf(PropTypes.any),
  control: PropTypes.objectOf(PropTypes.any),
  getValues: PropTypes.func,
  setValue: PropTypes.func,
  setError: PropTypes.func,
  updateShippingMethodsList: PropTypes.func,
  clearError: PropTypes.func,
  fieldsError: PropTypes.arrayOf(PropTypes.any),
  expirationYears: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  fields: PropTypes.shape({
    field: PropTypes.shape({
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        })
      ),
      htmlName: PropTypes.string,
      label: PropTypes.string,
    }),
    cardOwner: PropTypes.shape({}),
  }),
  paymentInstrumentsArray: PropTypes.arrayOf(PropTypes.shape({})),
};

export default connect(mapStateToProps)(Payment);
