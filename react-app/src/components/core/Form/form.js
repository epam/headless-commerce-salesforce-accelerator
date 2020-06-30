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
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const Form = ({
  defaultValues,
  children,
  onSubmit,
  validationSchema,
  refProp,
}) => {
  const {
    register,
    handleSubmit,
    errors,
    control,
    getValues,
    setValue,
    formState: { isSubmitted },
    triggerValidation,
    setError,
    clearError,
  } = useForm({
    defaultValues,
    validationSchema,
  });

  return (
    <form ref={refProp} onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          register,
          errors,
          control,
          getValues,
          setValue,
          isSubmitted,
          triggerValidation,
          setError,
          clearError,
        });
      })}
    </form>
  );
};

Form.propTypes = {
  defaultValues: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  validationSchema: PropTypes.objectOf(PropTypes.any),
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Form;
