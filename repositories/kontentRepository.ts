import * as KontentDelivery from '@kontent-ai/delivery-sdk';

// initialize delivery client
const deliveryClient: KontentDelivery.DeliveryClient = KontentDelivery.createDeliveryClient({
  environmentId: 'e345b878-cec5-0061-03f6-8d06aac8c381'
});

export const kontentRepository = {
  /**
   * getItems fetches all items from Kontent by default, and by type if a query is passed.
   * @param {string} query - the codename of the 'content type' to retrieve (not the individual item codename)
   * @returns {object} - the response object from Kontent
   */
  async getItems(query = '', depthParameter=1) {
    try {
      let response;
      if (query) {
        response = await deliveryClient.items()
          .type(query)
          .depthParameter(depthParameter)
          .toPromise();
      } else {
        response = await deliveryClient.items()
          .depthParameter(depthParameter)
          .toPromise();
      }
      return response.data;
    } catch (error) {
      console.error('Error retrieving content items: ', error);
      return { error: 'An error occurred while retrieving content items.' };
    }
  },

  /**
   * getItemByCodename fetches a single item from Kontent by codename.
   * @param {string} codename 
   * @returns {object} - the response object from Kontent.
   */
  async getItemByCodename(codename) {
    try {
      const response = await deliveryClient.item(codename)
        .toPromise();
      return response.data;
    } catch (error) {
      console.error('Error retrieving content item: ', error);
      return { error: 'An error occurred while retrieving content item.' };
    }
  }

}