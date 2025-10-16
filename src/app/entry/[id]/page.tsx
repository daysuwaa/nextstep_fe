"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";
import axios from "axios";

interface Entry {
  id: number;
  title: string;
  content: string;
  mood: string;
  imageUrl?: string;
  publishedAt: string;
  tags?: string[];
}

interface EntryPageProps {
  params: { id: string };
}

const EntryPage = ({ params }: EntryPageProps) => {
  const [entry, setEntry] = useState<Entry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const token = localStorage.getItem("token"); // assuming JWT stored here
        const res = await axios.get(
          `http://localhost:5068/entries/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEntry(res.data);
      } catch (error) {
        console.error("Error fetching entry:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntry();
  }, [params.id]);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500 animate-pulse">
        Loading entry...
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="p-6 text-center text-gray-500">
        Entry not found or you don’t have access.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-10 px-4">
      <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden">
        {/* Back button */}
        <div className="p-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <BiLeftArrowAlt className="w-6 h-6 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        {/* Hero Image */}
        {entry.imageUrl && (
          <div className="relative h-[500px] w-full">
            <Image
              src={entry.imageUrl}
              alt={entry.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        )}

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {entry.title}
          </h1>

          {/* Date + Mood */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-500">
              {new Date(entry.publishedAt).toDateString()}
            </span>
            <span className="px-4 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-700 capitalize">
              Mood: {entry.mood}
            </span>
          </div>

          {/* Content */}
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {entry.content}
          </p>

          {/* Optional tags */}
          {entry.tags && entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EntryPage;