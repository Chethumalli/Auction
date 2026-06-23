# 🏷️ Online Auction Platform

A modern and responsive **Online Auction Website** built using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**. This platform enables users to create auctions, place bids on items, and manage auction listings in real time.

---

## 🚀 Features

- 🏷️ Create and manage auction listings
- 💰 Real-time bidding system
- 👤 User registration and authentication
- 📦 Item listing with images and descriptions
- ⏳ Auction countdown timer
- 🔍 Browse and search auction items
- 📱 Responsive design for all devices
- 🔒 Secure user authentication
- 📊 Auction status tracking
- ⚡ Fast and intuitive user interface

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JWT Authentication
- bcrypt.js

### Tools
- Git & GitHub
- MongoDB Atlas
- Postman

---

## 📂 Project Structure

```bash
Auction/
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── auction.ejs
│   └── profile.ejs
│
├── routes/
│   ├── auth.js
│   ├── auction.js
│   └── user.js
│
├── models/
│   ├── User.js
│   └── Auction.js
│
├── middleware/
│   └── authMiddleware.js
│
├── config/
│   └── db.js
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Chethumalli/Auction.git
cd Auction
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server will start on:

```bash
http://localhost:5000
```

---

## 👤 User Authentication

Users can:

- Register a new account
- Login securely
- Access protected routes
- Manage their auction listings
- Track bidding activity

---

## 🏷️ Auction Workflow

### Seller

1. Register/Login
2. Create auction listing
3. Upload item details
4. Set starting bid price
5. Set auction duration
6. Publish auction

### Buyer

1. Browse auction items
2. View item details
3. Place bids
4. Receive updates
5. Win auction after completion

---

## 📦 Auction Item Details

Each auction listing includes:

- Item Name
- Item Description
- Product Images
- Starting Price
- Current Highest Bid
- Auction End Time
- Seller Information

---

## 📊 Database Schema

### User Model

```javascript
{
  username: String,
  email: String,
  password: String,
  createdAt: Date
}
```

### Auction Model

```javascript
{
  title: String,
  description: String,
  startingPrice: Number,
  currentBid: Number,
  image: String,
  seller: ObjectId,
  endDate: Date,
  createdAt: Date
}
```

---

## 🔐 Security Features

- Password hashing using bcrypt.js
- JWT-based authentication
- Protected routes
- Environment variable configuration
- Input validation
- Secure database connection

---

## 🎯 Learning Outcomes

This project demonstrates:

- Full-Stack Web Development
- REST API Design
- User Authentication
- MongoDB Database Operations
- CRUD Functionality
- Auction System Logic
- Responsive UI Design
- Express.js Routing

---

## 🌟 Future Enhancements

- Real-time bidding using Socket.IO
- Payment gateway integration
- Email notifications
- Bid history tracking
- Admin dashboard
- Auction analytics
- Product categories
- Watchlist functionality
- AI-based bid recommendations

---

## 📸 Screenshots

Add project screenshots here:

```bash
screenshots/
├── homepage.png
├── login.png
├── auction-list.png
└── bidding-page.png
```

---

## 👨‍💻 Author

### Chethan C Malli

- GitHub: https://github.com/Chethumalli
- LinkedIn: https://www.linkedin.com/in/chethumalli

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to your branch
5. Create a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, consider giving it a star on GitHub!
