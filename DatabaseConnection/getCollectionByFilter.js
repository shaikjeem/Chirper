const MongoClient = require('mongodb').MongoClient;
const Constants = require('../constants');

const getCollectionByFilter = async (collectionName, query)=>{
  const client = new MongoClient(
      Constants.Database.DB_URL,
      Constants.Database.DB_SETTINGS,
  );
  let results = null;

  try {
    const connection = await client.connect();
    const database = connection.db(Constants.Database.DB_NAME);
    const collection = await database.collection(collectionName);
    const mongoResponse = await collection.find(query);
    results = await mongoResponse.toArray();
  } catch (error) {

  } finally {
    await client.close();
  }
  return results;
};

module.exports = getCollectionByFilter;
