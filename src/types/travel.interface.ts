export interface TTravel {
    _id?: string;               // MongoDB-র ইউনিক আইডি
    title: string;              // প্রফেশনাল টাইটেল
    slug: string;               // URL-এর জন্য (যেমন: /travel/sundarban-tour)
    description: string;        // ছোট বর্ণনা (কার্ডের জন্য)
    detailedDescription: string; // বিস্তারিত বর্ণনা (ডিটেইলস পেজের জন্য)
    price: number;
    category: 'Half Board' | 'All Inclusive' | 'Excursions' | 'Family'; // Filtering-এর জন্য
    location: string;           // Search ও Filtering-এর জন্য মাস্ট
    image: string;              // মেইন থাম্বনেইল ইমেজ
    gallery?: string[];         // ডিটেইলস পেজে স্লাইডারের জন্য আরও ছবি
    duration: string;           // উদাহরণ: "3 Days, 2 Nights"
    maxGroupSize: number;       // কতজন একসাথে যেতে পারবে
    rating: number;             // রিভিউ সেকশনের জন্য (ডিফল্ট ০)
    totalReviews: number;       // কতজন রিভিউ দিয়েছে
    isFeatured: boolean;        // হোম পেজে "Popular" সেকশনে দেখানোর জন্য
    status: 'available' | 'booked-out' | 'discounted'; // ড্যাশবোর্ড ম্যানেজমেন্টের জন্য
    startDate: Date;            // ট্যুর শুরুর তারিখ
    endDate: Date;              // ট্যুর শেষ হওয়ার তারিখ
    includedServices: string[]; // কী কী সুবিধা আছে (WiFi, Food, Guide)
    createdBy: string;          // কোন এডমিন এটা পোস্ট করেছে (Admin ID)
    createdAt: Date;            // Sorting-এর জন্য (Newest first)
}