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

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Controller } from "react-hook-form";

/** Selectors */
import {
  selectCheckoutResources,
  selectBillingData,
} from "store/selectors/checkout/selectors";

/** Components */
import InputMask from "react-input-mask";
import Input from "components/core/Input/TextInput/textInput";
import Select from "components/core/Select";
import Grid from "@material-ui/core/Grid";
import {
  FullWidthWrapper,
  StyledEditAddressButton,
  Wrapper,
} from "./formStyled";

/** Helpers */
import { createInputProps, createErrorsObject } from "./helpers";

const AddressForm = ({
  register,
  formData,
  control,
  getValues,
  setValue,
  errors,
  setError,
  clearError,
  updateShippingMethodsList,
  fieldsError = [],
  inputData,
}) => {
  const resources = useSelector(selectCheckoutResources);
  const billingData = useSelector(selectBillingData);

  useEffect(() => {
    const errorsObj = createErrorsObject(fieldsError);
    setError(errorsObj);
  }, [fieldsError, setError]);

  const handleInputChange = (event) => {
    const {
      currentTarget: { name },
      target: { value },
    } = event;
    return value
      ? clearError(name)
      : setError(name, "notMatch", fieldsError[name]);
  };

  const renderComponent = (
    componentName,
    additionalProps = {},
    subComponentName
  ) => {
    const data = subComponentName
      ? formData[componentName][subComponentName]
      : formData[componentName];
    const inputProps = createInputProps(data);

    return data?.options ? (
      <Controller
        as={
          <Select
            values={data.options}
            label={data?.mandatory ? `${data.label} *` : data.label}
            iconisrotated
            margin="16px 0px 0px 0px"
            register={register}
            width={240}
            handleChange={({ target }) => {
              const { name, value } = target;
              setValue(name, value);
              clearError(name);
              if (!formData.billingStage) {
                updateShippingMethodsList(target, getValues);
              }
            }}
            defaultValue={
              data.options.find((opt) => opt.selected)?.htmlValue ||
              data.options[0].htmlValue
            }
            {...(additionalProps?.defaultValue && additionalProps)}
          />
        }
        errorMsg={errors[data?.htmlName]?.message}
        error={!!errors[data?.htmlName]}
        control={control}
        name={data?.htmlName}
        defaultValue={
          data.options.find((opt) => opt.selected)?.htmlValue ||
          data.options[0].htmlValue
        }
        {...additionalProps}
      />
    ) : (
      <InputMask
        defaultValue={inputProps?.defaultValue || additionalProps.defaultValue}
        mask={additionalProps.mask || ""}
        handleChange={handleInputChange}
      >
        {(fieldProps) => (
          <Input
            {...inputProps}
            {...additionalProps}
            {...fieldProps}
            register={register}
            errors={errors}
            title={additionalProps?.title}
          />
        )}
      </InputMask>
    );
  };

  const [showAddressForm, setShowAddressForm] = useState(false);
  const label = `${inputData?.firstName} ${inputData?.lastName} ${inputData?.address1} ${inputData?.city} ${inputData?.stateCode} ${inputData?.postalCode}`;
  const values = [{ label }];
  const [isAddingAddress, setAddingAddress] = useState(values);
  const [stateInputData, setInputData] = useState(inputData);

  const renderSelectAddressComponent = () => {
    return (
      <FullWidthWrapper>
        <Select
          values={isAddingAddress}
          label="Billing Address"
          required
          iconisrotated
          margin="16px 0px 0px 0px"
          width={450}
          handleChange={({ target }) => {
            if (target.value !== resources.newAddress) {
              setAddingAddress(values.splice(0, 1));
              setInputData(inputData);
              setShowAddressForm(false);
            }
          }}
          fullWidth
          defaultValue=""
        />
      </FullWidthWrapper>
    );
  };

  const renderPhysicalAddressForm = () => (
    <>
      <Wrapper>
        {renderComponent("firstName", {
          defaultValue: stateInputData?.firstName,
        })}
        {renderComponent("lastName", {
          defaultValue: stateInputData?.lastName,
        })}
      </Wrapper>
      {renderComponent("address1", {
        width: "100%",
        defaultValue: stateInputData?.address1,
      })}
      {renderComponent("address2", {
        width: "100%",
        defaultValue: stateInputData?.address2,
      })}
      <Wrapper>
        {renderComponent("country", {
          defaultValue: stateInputData?.countryCode?.value,
        })}
        {renderComponent(
          "states",
          {
            defaultValue: stateInputData?.stateCode,
          },
          "stateCode"
        )}
      </Wrapper>
      <Wrapper>
        {renderComponent("city", {
          defaultValue: stateInputData?.city,
        })}
        {renderComponent("postalCode", {
          exampleDescription: "12345",
          defaultValue: stateInputData?.postalCode,
        })}
      </Wrapper>
    </>
  );

  const onUpdateAddress = () => setShowAddressForm(true);
  const onAddAddress = () => {
    values.unshift({ label: resources.newAddress });
    setInputData({});
    setAddingAddress(values);
    setShowAddressForm(true);
  };

  return (
    <>
      {formData.billingStage && (
        <FullWidthWrapper>
          <Wrapper>{renderSelectAddressComponent()}</Wrapper>
          {!showAddressForm && (
            <Grid container>
              <Grid item xs={6}>
                <StyledEditAddressButton plain onClick={onAddAddress}>
                  + {resources.newAddress}
                </StyledEditAddressButton>
              </Grid>
              <Grid item xs={6} align="right">
                <StyledEditAddressButton plain onClick={onUpdateAddress}>
                  Update Address
                </StyledEditAddressButton>
              </Grid>
            </Grid>
          )}
        </FullWidthWrapper>
      )}
      {(!formData.billingStage || showAddressForm) &&
        renderPhysicalAddressForm()}
      <Wrapper>
        {formData.email &&
          renderComponent("email", {
            info: "Please enter a valid email address",
            defaultValue: billingData.email,
          })}
        {formData.phone &&
          formData.billingStage &&
          renderComponent("phone", {
            mask: "999-999-9999",
            info: "The phone number associated with this credit card",
            defaultValue: billingData.phone,
          })}
        {(formData.phone || inputData?.phone) &&
          !formData.billingStage &&
          renderComponent("phone", {
            exampleDescription: "123-456-7890",
            defaultValue: inputData?.phone,
            mask: "999-999-9999",
          })}
      </Wrapper>
    </>
  );
};

AddressForm.propTypes = {
  register: PropTypes.func,
  formData: PropTypes.objectOf(PropTypes.any),
  control: PropTypes.objectOf(PropTypes.any),
  getValues: PropTypes.func,
  setValue: PropTypes.func,
  updateShippingMethodsList: PropTypes.func,
  clearError: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.any),
  setError: PropTypes.func,
  fieldsError: PropTypes.arrayOf(PropTypes.any),
  inputData: PropTypes.objectOf(PropTypes.any),
};

export default AddressForm;
