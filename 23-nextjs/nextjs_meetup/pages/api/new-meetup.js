// /api/new-meetup
// POST /api/new-meetup

function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const { title, image, address, description } = data;

        
    }
    return
}

export default handler;