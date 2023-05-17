import * as KontentDelivery from '@kontent-ai/delivery-sdk';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const deliveryClient = KontentDelivery.createDeliveryClient({
      environmentId: 'e345b878-cec5-0061-03f6-8d06aac8c381'
    });

    try {
      const { simple } = req.query;

      if (simple === 'true') {
        // If a simple tag is passed in, return only the codenames of the content types in an array
        const response = await deliveryClient.types().toPromise();
        const contentTypes = response.data.items.map(item => item.system.codename);
        res.status(200).json(contentTypes);
      } else {
        // Otherwise, return the full content types with properties
        const response = await deliveryClient.types().toPromise();
        res.status(200).json({ types: response.data });
      }
    } catch (error) {
      console.log('Error retrieving content items:', error);
      res.status(500).json({ error: 'An error occurred while retrieving content items.' });
    }
  } else {
    res.status(500).json({ error: 'This is not a valid method for this endpoint.' });
  }
}
