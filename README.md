


# OYO APPLICATION CLONE USING NEXTJS

Hii, I am **Bhaskar Vora** 
I am a self motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.


# Prerequisite

Must have knowledge of NextJs, TailWind CSS, MongoDB

# Tech Stack

Technical Stack
Frontend:

Framework: Next.js (React-based framework),
Styling: Tailwind CSS,
Payment Integration: Stripe,
State Management: React state hooks,
HTTP Requests: Axios
Backend:

Database: MongoDB,
Authentication: JSON Web Tokens (JWT), bcrypt for password hashing


# Features

1.User Authentication: Allows users to sign up and log in, with credentials managed securely.
2.Payment Integration: Handles payments through Stripe with a checkout flow.
3.Database Connection: Connects to MongoDB to manage user data and possibly other related data.
4.Error Handling: Includes error handling for Stripe and API-related issues.



## Install Dependencies

**For Dev** - `npm run dev`  




![Home Page](https://github.com/user-attachments/assets/3d5ee668-1bb6-4f9c-ba0a-2636cf749332)
Home 


![Screenshot 2024-08-29 160121](https://github.com/user-attachments/assets/fc44bd4d-29cd-4f68-bb4a-95d4d9d7f499)

List of Hotels are shown here

![Screenshot 2024-08-29 160133](https://github.com/user-attachments/assets/6386bc9c-7dc5-4de1-8be9-1efe945d73c6)

Filters are used in this web application

![Screenshot 2024-08-29 160210](https://github.com/user-attachments/assets/2989e3b0-0d89-4ca7-ad83-43a0de4f3ef5)

Example of Filter

![Screenshot 2024-08-29 160638](https://github.com/user-attachments/assets/b967d36f-afbd-4eab-9624-1d2fbcd079e8)

Details of Specific Hotel is shown here

![Screenshot 2024-08-29 160657](https://github.com/user-attachments/assets/ba82e568-1cb5-4057-a412-0d2a57f5b035)

Stripe Payment Integration

![Screenshot 2024-08-29 160756](https://github.com/user-attachments/assets/7fcca996-e423-435e-b922-b8241679941e)

Successful Payment 





Example:

## Environment Variables

Before running the project, you need to set up the environment variables. 

1. Create a `.env` file in the root of your project.
2. Copy the content of the `.env.example` file into the newly created `.env` file.
3. Replace the placeholder values with your actual credentials.

MONGO_URI=MONGO_URI=MONGO_URI=mongodb+srv://<username>:<password>@cluster0.dh0yzew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


JWT_SECRET=your_jwt_secret_here

BASE_URL=http://localhost:3000

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
