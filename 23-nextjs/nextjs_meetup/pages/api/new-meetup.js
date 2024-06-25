import { MongoClient } from "mongodb";
import { Secrets } from '../../secrets/secrets.js';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const credentials = Secrets();
        console.log(credentials)

        const client = await MongoClient.connect(`mongodb+srv://${credentials.username}:${credentials.password}@cluster0.jfjnc51.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        const db = client.db("meetups");

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();
        
        res,status(201).json({ message: 'Meetup inserted!' });
    }
    return
}

export default handler;