import { MongoClient } from "mongodb";
import { Secrets } from '../../secrets/secrets.js';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        [username, password] = Secrets()

        const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0.jfjnc51.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();
        
        res,status(201).json({ message: 'Meetup inserted!' });
    }
    return
}

export default handler;