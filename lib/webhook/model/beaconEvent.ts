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

import { BeaconContent } from "./beaconContent";
import { DeliveryContext } from "./deliveryContext";
import { Event } from "./event";
import { EventMode } from "./eventMode";
import { Source } from "./source";

/**
 * Event object for when a user enters the range of a LINE Beacon. You can reply to beacon events.
 */
import { EventBase } from "./models";

export type BeaconEvent = EventBase & {
  type: "beacon";
  /**
   * Reply token used to send reply message to this event
   */
  replyToken: string /**/;
  /**
   */
  beacon: BeaconContent /**/;
};

export namespace BeaconEvent {}