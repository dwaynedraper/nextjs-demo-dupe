const KontentDelivery = require('@kontent-ai/delivery-sdk');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { query } = req.body;

    const deliveryClient = KontentDelivery.createDeliveryClient({
      environmentId: 'e345b878-cec5-0061-03f6-8d06aac8c381'
    });

    try {
      let response;
      if (query) {
        response = await deliveryClient.items()
          .type(query)
          .toPromise();
      } else {
        response = await deliveryClient.items()
          .toPromise();
      }
      res.status(200).json({ items: response.data });
    } catch (error) {
      console.log('Error retrieving content items: ', error);
      res.status(500).json({ error: 'An error occurred while retrieving content items.' });
    }
  } else {
    res.status(500).json({ error: 'This is not a valid method for this endpoint' })
  }
}
