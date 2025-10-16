import { StaticImageData } from 'next/image'
import Person1 from "../assets/person1.jpg"
import Person2 from "../assets/person2.webp"
import Person3 from "../assets/person3.jpg"
import blog1 from "../assets/blog-image.jpg"
import blog2 from "../assets/blof-image-2.jpeg"
import blog3 from "../assets/blog-image-3.webp"

export interface Author {
  id: string
}

export interface JournalEntry {
  imageUrl: any
  id: string
  title: string
  excerpt: string
  content: string
  slug: string
  featuredImage?: StaticImageData
  publishedAt: string
  mood: string  
  tags: string[]
  isPublished: boolean
  isFeatured: boolean
}



export const mockJournal: JournalEntry[] = [
  {
    id: "1",
    title: "My Day",
    excerpt: "Spent the afternoon at my favorite coffee shop with my laptop.",
    content:
      "It was a great day, i went to the little cafe down the street and worked on my Next.js project. The smell of coffee, the quiet chatter, and the playlist in the background made me super productive. Ended the day proud of what I got done.",
    slug: "cafe-study-session",
    featuredImage: blog2,
    publishedAt: "2025-09-02T14:15:00Z",
    mood: "Productive",
    tags: ["Study", "Coding", "Cafe"],
    isPublished: true,
    isFeatured: false,
  },
  {
    id: "2",
    title: "Evening Walk",
    excerpt: "Went for a short walk to clear my head.",
    content:
      "Work was intense today, so I took a walk during sunset. The sky was pink and orange — it reminded me to slow down and just breathe. I want to make this a daily habit.",
    slug: "evening-walk",
    featuredImage: blog3,
    publishedAt: "2025-09-03T19:00:00Z",
    mood: "Relaxed",
    tags: ["Walk", "Reflection", "Sunset"],
    isPublished: true,
    isFeatured: false,
  },
  {
    id: "3",
    title: "Today at school",
    excerpt: "Went for a short walk to clear my head.",
    content:
      "Work was intense today, so I took a walk during sunset. The sky was pink and orange — it reminded me to slow down and just breathe. I want to make this a daily habit.",
    slug: "evening-walk",
    featuredImage: Person1,
    publishedAt: "2025-09-03T19:00:00Z",
    mood: "Relaxed",
    tags: ["Walk", "Reflection", "Sunset"],
    isPublished: true,
    isFeatured: false,
  },
  {
    id: "4",
    title: "I went shopping today",
    excerpt: "Went for a short walk to clear my head.",
    content:
      "Work was intense today, so I took a walk during sunset. The sky was pink and orange — it reminded me to slow down and just breathe. I want to make this a daily habit.",
    slug: "evening-walk",
    featuredImage: Person2,
    publishedAt: "2025-09-03T19:00:00Z",
    mood: "Relaxed",
    tags: ["Walk", "Reflection", "Sunset"],
    isPublished: true,
    isFeatured: false,
  },
  {
    id: "5",
    title: "OMG, I got in a fight today",
    excerpt: "Went for a short walk to clear my head.",
    content:
      "Work was intense today, so I took a walk during sunset. The sky was pink and orange — it reminded me to slow down and just breathe. I want to make this a daily habit.",
    slug: "evening-walk",
    featuredImage: Person3,
    publishedAt: "2025-09-03T19:00:00Z",
    mood: "Relaxed",
    tags: ["Walk", "Reflection", "Sunset"],
    isPublished: true,
    isFeatured: false,
  },
  {
    id: "6",
    title: "Dear Diary, Im travelling tomorrow",
    excerpt: "Went for a short walk to clear my head.",
    content:
      "Work was intense today, so I took a walk during sunset. The sky was pink and orange — it reminded me to slow down and just breathe. I want to make this a daily habit.",
    slug: "evening-walk",
    featuredImage: blog1,
    publishedAt: "2025-09-03T19:00:00Z",
    mood: "Relaxed",
    tags: ["Walk", "Reflection", "Sunset"],
    isPublished: true,
    isFeatured: false,
  },
];