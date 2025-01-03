import { MongoClient, Db } from "mongodb";

export const connectToDatabase = async () => {
  const client: MongoClient = new MongoClient(process.env.MONGODB_URI || "");
  await client.connect();
  const db: Db = client.db(process.env.DB_NAME || "portfolio");

  return { db };
};
