# Challenge Chapter 5

SUPER ADMIN CREDENTIALS:  
Email: superadmin01@gmail.com  
Password: rahasia

### Run project
1. Clone this repository
2. Run `npm install`
3. Run `npm run seed` to seed the database (!important to run this command to get the super admin credentials)
4. Run `npm run start:dev` to start the server
5. Use Postman to test the API

### API Documentation
1. [POST] /api/v1/auth/login
    - Request body:
        ```
        {
            "email": "
            "password": "
        }
        ```
    - Response:
        ```
        {
            "status": "success",
            "message": "Login success",
            "data": {
                "token": "Bearer token here"
            }
        }
        ```
2. [POST] /api/v1/auth/register