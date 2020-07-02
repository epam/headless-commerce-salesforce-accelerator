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

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

/** Selectors */
import { selectErrors, selectUserStatus } from "store/selectors/user/selectors";

/** Actions */
import actions from "store/actions/user/actions";

/** Helpers */
import { createInputProps } from "components/Checkout/AddressForm/helpers";

/** Components */
import { Controller } from "react-hook-form";
import ErrorMessagesContainer from "components/core/ErrorMessagesContainer";
import Input from "components/core/Input/TextInput/textInput";
import Checkbox from "components/core/Checkbox";
import Button from "components/core/Button";
import { useHistory } from "react-router-dom";
import { isUserAuthenticated } from "../../helpers";
import { LoginWrapper } from "./loginStyled";

const Login = ({
  loginData,
  getValues,
  register,
  errors,
  control,
  setValue,
  resources,
  token,
  isCheckoutLogin,
}) => {
  const [rememberMe, setRememberMe] = useState(false);

  const error = useSelector(selectErrors);
  const userStatus = useSelector(selectUserStatus);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    const data = {
      ...getValues(),
      csrf_token: token,
    };

    dispatch(actions.login(data));
  };

  useEffect(() => {
    if (isUserAuthenticated(userStatus)) {
      if (isCheckoutLogin) {
        history.push("/checkout");
      } else {
        history.goBack();
      }
    }
  }, [history, userStatus, isCheckoutLogin]);

  const renderComponent = (name, inputType = "text", fieldName) => {
    const data = loginData[name];
    const inputProps = createInputProps(data);
    const { hasOwnProperty } = Object.prototype;
    if (hasOwnProperty.call(data, "checked")) {
      return (
        <Controller
          as={<Checkbox selected={rememberMe} displayValue="Remember me" />}
          name={fieldName}
          control={control}
          handleChange={() => {
            setValue(fieldName, !rememberMe);
            setRememberMe(!rememberMe);
          }}
        />
      );
    }
    return (
      <Input
        type={inputType}
        register={register}
        errors={errors}
        {...inputProps}
        name={fieldName}
        width="100%"
      />
    );
  };

  return (
    <LoginWrapper>
      {error && <ErrorMessagesContainer errorMessage={error} />}
      {renderComponent("username", "text", "loginEmail")}
      {renderComponent("password", "password", "loginPassword")}
      <Button margin="24px 0 0 0" minWidth="100%" onClick={handleSubmit}>
        {resources?.login}
      </Button>
    </LoginWrapper>
  );
};

Login.propTypes = {
  loginData: PropTypes.objectOf(PropTypes.any),
  getValues: PropTypes.func,
  register: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.any),
  control: PropTypes.objectOf(PropTypes.any),
  setValue: PropTypes.func,
  resources: PropTypes.objectOf(PropTypes.any),
  token: PropTypes.string,
  isCheckoutLogin: PropTypes.bool,
};

export default Login;
