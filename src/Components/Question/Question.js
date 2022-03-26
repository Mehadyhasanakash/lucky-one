import React from 'react';

const Question = () => {
    return (
        <div className='container-sm'>
            <h1 className='text-center'>কীভাবে রিয়েক্ট কাজ করে?</h1>
            <p>রিয়েক্ট প্রতিক্রিয়া ঘোষণামূলক কোডে কাজ করে থাকে। এটা প্রায় বৃষ্টির মতো করে কাজ করে। যেমন: এটা উপর থেকে নিচে কাজ করতে পারে। কিন্তু নিজ থেকে উপরে কাজ করে না।</p>

            <h1 className='text-center'>useState কী?</h1>
            <p>useState হল একটি হুক যা আমাদেরকে কার্যকরী উপাদানগুলিতে স্টেট ভেরিয়েবল থাকতে দেয়। আসলে  ইউজার কোন কিছু পরিবর্তন করতে হলে তাহলে useState ব্যবাহার করে থাকি।</p>
        </div>
    );
};

export default Question;