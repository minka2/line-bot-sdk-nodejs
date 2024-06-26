/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Action } from "./action.js";

/**
 * Column object for carousel template.
 */
export type CarouselColumn = {
  /**
   */
  thumbnailImageUrl?: string /**/;
  /**
   */
  imageBackgroundColor?: string /**/;
  /**
   */
  title?: string /**/;
  /**
   */
  text: string /**/;
  /**
   */
  defaultAction?: Action /**/;
  /**
   */
  actions: Array<Action> /**/;
};
