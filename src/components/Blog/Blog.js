import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='w-100 p-5 containers'>
            <div className='bg-dark text-light p-4 border rounded shadow'>
                <h2>Different Between javascript and node js</h2>
                <p>
                    জাভাস্কিপ্ট হচ্ছে ক্লাইনট সাইড Language ডাটাভেজ শুধু জাভাস্কিপ্ট
                    দিয়ে আমরা ডাটাবেইজ থেকে ডাটা এক্সেস করতে পারিনা আর নোড জেএস
                    একটি ইনভায়রনমেন্ট প্রোভাইড করে জাভাস্কিপ্টকে সার্ভার সাইড এ রান করানোর জন্য মূল পার্থক্য হচ্ছে নোড জেএস প্রোগরামিং Language না আর জাভাস্ক্রিপ্ট হচ্ছে একটি প্রোগরামিং Language</p>
            </div>
            <div className='bg-dark text-light p-4 border rounded shadow'>
                <h2>কখন নোড জেএস এবং মোঙ্গ ডিবি ব্যবহার করা উচিত?</h2>
                <p>নোড জেএস ব্যবহার করে event-driven, non-blocking I/O model যা নোড জেএস কে পরিণত করে লাইটওয়েট এবং খুবই শক্তিশালী! Node.js হচ্ছে একটি ওপেন সোর্স, ক্রস প্ল্যাটফর্ম, জাভাস্ক্রিপ্ট রান-টাইম এনভাইরোনমেন্ট যা ব্রাউজারের বাইরে টার্মিনালে কম্পাইল করা হয়, এটি মূলত সার্ভার সাইড স্ক্রিপ্টিং ও কমান্ড লাইন টুল এর জন্য ব্যাবহৃত হয়। এক্ষেত্রে ওয়েব সাইট লোড হওয়ার আগে স্ক্রিপ্ট সার্ভার সাইড এর কম্পিউটারে রান হয় ও ডাইনামিকভাবে ওয়েব পেজ লোড করে। এভাবে ক্লায়েন্ট ও সার্ভার উভয় সাইডেই জাভাস্ক্রিপ্ট ব্যবহার করার মাধ্যমে Node.js "সর্বত্রই জাভাস্ক্রিপ্ট" প্যারাডিজম প্রকাশ করে। এবং রিয়েল টাইম এক্টিভিটিজ সহ
                    স্কেইলেবল নেটওয়ার্ক এর উপর অনেক লোড পরে এমন সময় নোড জেএস ব্যবহার করা উচিত
                </p>
            </div>
            <div className='bg-dark text-light p-4 border rounded shadow'>
                <h2>কিভাবে Jwt ওয়েব টোকেন কিভাবে কাজ করে?</h2>
                <p>JWT Token ডিফল্ট HS256 HMAC-SHA256 Alogrithm ব্যবহার করে। HS256 Algorithm মূলত secret base cryptographic hash function, যা payload এর সাথে shared secret যোগ করে hash তৈরি করে থাকে। যখন কোন স্বাধীন সার্ভিস এই token verify করতে যাবে, তারও কাছে এই shared secret থাকতে হবে, ভ্যালিড hash তৈরি করে, verify করার জন্য।</p>
            </div>
        </div>
    );
};

export default Blog;