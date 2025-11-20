import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/proshop';

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Mongo connected');

    const users = [
      { name: 'John Doe', email: 'john@example.com', passwordHash: 'Password@123', role: 'customer', phone: '+91-9876543210', addresses: [{ label: 'Home', street: '221B Baker Street', city: 'London', state: 'London', postalCode: 'NW16XE', country: 'UK', isDefault: true }] },
      { name: 'Jane Smith', email: 'jane@example.com', passwordHash: 'Password@123', role: 'customer', phone: '+91-9123456780', addresses: [{ label: 'Home', street: '45 Business Ave', city: 'London', state: 'London', postalCode: 'NW17TR', country: 'UK', isDefault: true }] },
      { name: 'Admin User', email: 'admin@example.com', passwordHash: 'Admin@1234', role: 'admin', phone: '+91-9000000000', addresses: [{ label: 'Office', street: '1 Admin Way', city: 'Pune', state: 'MH', postalCode: '411001', country: 'IN', isDefault: true }] },
    ];

    // Clear duplicates by email and insert (pre-save hook hashes passwordHash)
    for (const u of users) {
      const existing = await User.findOne({ email: u.email });
      if (existing) {
        console.log(`Skipping existing: ${u.email}`);
        continue;
      }
      const user = new User(u);
      await user.save();
      console.log(`Inserted user: ${u.email}`);
    }

    console.log('User seeding complete');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();


