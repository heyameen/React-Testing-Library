/* eslint-disable import/no-anonymous-default-export */

const mockResponse = {
    data: {
        results: [{
            name: {
                first: 'Labrinth',
                last: 'adele'
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/39.jpg"
            },
            login: {
                username: 'Ladele'
            }
        }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}