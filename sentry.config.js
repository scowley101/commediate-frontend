import * as Sentry from '@sentry/gatsby';

Sentry.init({
        dsn: 'https://c26704a04e0c4f87a5ff91ae7423d83e@o1149408.ingest.sentry.io/6221532',
        sampleRate: 1.0, // Adjust this value in production
        beforeSend(event) {
                // Modify the event here
                if (event.user) {
                        // Don't send user's email address
                        delete event.user.email;
                }
                return event;
        },
        // ...
});
