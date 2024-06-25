import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, second meetup!'
    }
]

function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        // sendhttp request
        setLoadedMeetups(DUMMY_MEETUPS);
    }, []);

    return (
        <MeetupList meetups={loadedMeetups} />
    )
} 

export default HomePage;