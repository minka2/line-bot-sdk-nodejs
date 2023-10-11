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

import { ImagemapArea } from "./imagemapArea";

import { MessageImagemapAction } from "./models";
import { URIImagemapAction } from "./models";

export type ImagemapAction =
  | MessageImagemapAction // message
  | URIImagemapAction // uri
  | UnknownImagemapAction;

export type UnknownImagemapAction = ImagemapActionBase & {
  [key: string]: unknown;
};

export type ImagemapActionBase = {
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#imagemap-action-objects">type Documentation</a>
   */
  type: string /**/;
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#imagemap-action-objects">area Documentation</a>
   */
  area?: ImagemapArea /**/;
};