import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg"
            title='A First Meetup'
            address='Some address 5, 12345 Some City'
            description='This is a first meetup!'
        />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { 
                params: {
                    meetupid: 'm1',
                },
            },
            { 
                params: {
                    meetupid: 'm2',
                },
            },
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meeetupId = context.params.meetupid;

    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
                id: meeetupId,
                title: 'A First Meetup',
                address: 'Some address 5, 12345 Some City',
                decription: 'This is a first meetup!',
            }
        }
    }
}

export default MeetupDetails;