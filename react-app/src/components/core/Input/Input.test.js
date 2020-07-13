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
import { shallow } from "enzyme";
import { NumericInput } from ".";
import TextInput from "./TextInput/textInput";
import {
  TextInputStyled,
  TextInputLabelStyled,
  TextInputWrapper,
} from "./TextInput/textInputStyled";

import {
  StyledNumericInput,
  StyledField,
  StyledCheckMarkIcon,
  StyledInfoIcon,
  StyledTextFieldLabel,
  StyledTextFieldInput,
  StyledTextFieldParagraph,
} from "./inputStyled";
import getMainTheme from "../../../theme";

const defaultProps = {
  labelName: "quantity",
  id: "quantity1",
  name: "quantity-cart",
  fullWidth: true,
  errors: ["quantity-cart"],
  disabled: false,
  error: "error 1",
};

const theme = getMainTheme();

describe("NumericInput", () => {
  const numericInput = shallow(<NumericInput />);
  it("should match snapshot", () => {
    expect(numericInput).toMatchSnapshot();
  });
});

describe("TextInput", () => {
  const textInput = shallow(<TextInput {...defaultProps} />);
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});

describe("TextInputStyled", () => {
  const textInput = shallow(
    <TextInputStyled theme={theme} {...defaultProps} />
  );
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});

describe("TextInputLabelStyled", () => {
  const textInput = shallow(<TextInputLabelStyled theme={theme} />);
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});

describe("TextInputWrapper", () => {
  const textInput = shallow(
    <TextInputWrapper theme={theme} {...defaultProps} />
  );
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});

describe("StyledNumericInput", () => {
  const textInput = shallow(
    <StyledNumericInput theme={theme} {...defaultProps} />
  );
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});

describe("StyledField", () => {
  const textInput = shallow(<StyledField theme={theme} {...defaultProps} />);
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});

describe("StyledCheckMarkIcon", () => {
  const textInput = shallow(<StyledCheckMarkIcon theme={theme} />);
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});

describe("StyledInfoIcon", () => {
  const textInput = shallow(<StyledInfoIcon theme={theme} />);
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});

describe("StyledTextFieldLabel", () => {
  const textInput = shallow(<StyledTextFieldLabel theme={theme} />);
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});

describe("StyledTextFieldLabel", () => {
  const textInput = shallow(<StyledTextFieldLabel theme={theme} />);
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});

describe("StyledTextFieldInput", () => {
  const textInput = shallow(
    <StyledTextFieldInput theme={theme} {...defaultProps} />
  );
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});

describe("StyledTextFieldParagraph", () => {
  const textInput = shallow(
    <StyledTextFieldParagraph theme={theme} {...defaultProps} />
  );
  it("should match snapshot", () => {
    expect(textInput).toMatchSnapshot();
  });
});
