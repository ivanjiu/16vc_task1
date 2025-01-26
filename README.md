Solution:


Process:


Test:
1. Run "npm run start" to start the sever on port 3000
2. Open Postman and start making GET, POST, PUT requests

Examples:

prompt 1: Add items for rent
POST localhost:3000/tools
{
    "name": "wrench",
    "description": "used to tighten or loosen nuts and bolts",
    "price": 15,
    "availability": "available"
}



prompt 2: retrieve a list filtered available items
GET localhost:3000/tools?name=hammer
GET localhost:3000/tools?min=10&max=100



prompt 3: mark item as unavailable
PUT localhost:3000/tools/rent/hammer



prompt 4: mark item as available
PUT localhost:3000/tools/return/hammer