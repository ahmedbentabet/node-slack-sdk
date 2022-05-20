/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type GroupsCreateChildResponse = WebAPICallResult & {
  error?:             string;
  group?:             Group;
  needed?:            string;
  ok?:                boolean;
  provided?:          string;
  response_metadata?: ResponseMetadata;
  warning?:           string;
};

export interface Group {
  created?:              number;
  creator?:              string;
  id?:                   string;
  is_archived?:          boolean;
  is_group?:             boolean;
  is_mpim?:              boolean;
  is_open?:              boolean;
  last_read?:            string;
  latest?:               Latest;
  members?:              string[];
  name?:                 string;
  name_normalized?:      string;
  parent_group?:         string;
  purpose?:              Purpose;
  topic?:                Purpose;
  unread_count?:         number;
  unread_count_display?: number;
}

export interface Latest {
  subtype?: string;
  text?:    string;
  ts?:      string;
  type?:    string;
  user?:    string;
}

export interface Purpose {
  creator?:  string;
  last_set?: number;
  value?:    string;
}

export interface ResponseMetadata {
  messages?: string[];
  warnings?: string[];
}
