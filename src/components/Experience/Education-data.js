export const EducationData = [
    {
        'id': 'school1',
        'name': 'Sam Houston State University',
        'year': {
            'start': '2009',
            'finish': 'Graduated: 2013'
        },
        'degree': {
            'type': 'B.S.',
            'plan': 'Computer Science',
            'focus': 'Information Assurance',
            'minor': 'Mathematics'
        },
        'location': {
            'city': 'Huntsville',
            'state': 'TX',
            'zip': '77320'
        },
        'courses': ['Software Engineering I, Databases I'],
        'projects': [
            {
                'name': 'Katlas',
                'description': 'An interactive map/planner app for Android.',
                'purpose': 'This app was created to receive a student\'s schedule and create a route(s) to their classrooms.' +
                    'The app allowed students to add events and assignments dues.',
                'responsibilities': 'Programmer/Documentation'
            }
        ],
        'color': 'bg-shsu-orange',
        'banner': {
            'url': require('../../assets/School/SHSU-Box.png').default
        }
    },
    {
        'id': 'school2',
        'name': 'Sam Houston State University',
        'year': {
            'start': '2013',
            'finish': 'Projected: 2022'
        },
        'degree': {
            'type': 'M.S.',
            'plan': 'Computing and Information Sciences'
        },
        'location': {
            'city': 'Huntsville',
            'state': 'TX',
            'zip': '77320'
        },
        'courses': ['Software Engineering II', 'Data Structures', 'Artificial Intelligence'],
        'projects': [
            {
                'name': 'Hanabi',
                'description': 'Card game app',
                'purpose': 'Hanabi is a card that requires players to play together based on deduction.' +
                    ' We attempted to recreated the game as an Android App.',
                'responsibilities': 'Planning and Design'
            }
        ],
        'color': 'bg-shsu-orange',
        'banner': {
            'url': require('../../assets/School/SHSU-Box.png').default
        }

    }
]
