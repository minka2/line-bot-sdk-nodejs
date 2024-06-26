/**
 * Webhook Type Definition
 * Webhook event definition of the LINE Messaging API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LinkThingsContent } from "./models.js";
import { ScenarioResultThingsContent } from "./models.js";
import { UnlinkThingsContent } from "./models.js";

export type ThingsContent =
  | LinkThingsContent // link
  | ScenarioResultThingsContent // scenarioResult
  | UnlinkThingsContent // unlink
  | UnknownThingsContent;

export type UnknownThingsContent = ThingsContentBase & {
  [key: string]: unknown;
};

export type ThingsContentBase = {
  /**
   * Type
   */
  type: string /**/;
};
