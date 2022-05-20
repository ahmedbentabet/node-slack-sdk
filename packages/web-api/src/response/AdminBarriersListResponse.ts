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
export type AdminBarriersListResponse = WebAPICallResult & {
  barriers?: Barrier[];
  error?:    string;
  needed?:   string;
  ok?:       boolean;
  provided?: string;
};

export interface Barrier {
  barriered_from_usergroups?: Usergroup[];
  date_update?:               number;
  enterprise_id?:             string;
  id?:                        string;
  primary_usergroup?:         Usergroup;
  restricted_subjects?:       string[];
}

export interface Usergroup {
  id?:   string;
  name?: string;
}
