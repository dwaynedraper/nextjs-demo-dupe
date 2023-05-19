import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Footer Media Link
 * Id: 6aef29bc-4428-4563-a2c7-ec48e8f09214
 * Codename: footer_media_link
 */
export type FooterMediaLink = IContentItem<{
  /**
   * Social Media Outlet (multiple_choice)
   * Required: true
   * Id: 0efb6a83-4142-40d0-be23-6b9f2f85542b
   * Codename: social_media_outlet
   */
  socialMediaOutlet: Elements.MultipleChoiceElement;

  /**
   * url (text)
   * Required: true
   * Id: a7a11301-612e-4e9c-994c-3cfb1d2f214d
   * Codename: url
   *
   * The url for the social media provider you'd like to provide a link for. Please provide a full url, not just the `/brandname`.
   */
  url: Elements.TextElement;
}>;
