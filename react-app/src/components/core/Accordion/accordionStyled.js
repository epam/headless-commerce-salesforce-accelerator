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

import styled from "styled-components";

/** UI Components */
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

export const AccordionWrapper = styled(ExpansionPanel)`
  box-shadow: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.iron};
`;

export const AccordionHeaderWrapper = styled(ExpansionPanelSummary)`
  height: 40px;
  min-height: 0px !important;
  padding: 0px;
`;

export const AccordionContentWrapper = styled(ExpansionPanelDetails)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: wrap;
  padding: 0px 0px 5px;
`;
