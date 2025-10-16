"use client";
import Image from "next/image";
import React from "react";

type Entry = {
  id: string;
  title: string;
  mood: string;
  excerpt: string;
  imageUrl?: string;
};

const JournalCardComponent = ({
  entry,
  onDelete,
  onEdit,
  onView,
}: {
  entry: Entry;
  onDelete: (id: string) => void;
  onEdit: (entry: Entry) => void;
  onView: (id: string) => void;
}) => {
  // Mood style helper
  const getMoodDisplay = (mood: string) => {
    const moodMap: { [key: string]: { emoji: string; color: string; bg: string } } = {
      happy: { emoji: "😊", color: "text-emerald-600", bg: "bg-emerald-50" },
      excited: { emoji: "🤩", color: "text-amber-600", bg: "bg-amber-50" },
      calm: { emoji: "😌", color: "text-blue-600", bg: "bg-blue-50" },
      content: { emoji: "😄", color: "text-green-600", bg: "bg-green-50" },
      sad: { emoji: "😢", color: "text-indigo-600", bg: "bg-indigo-50" },
      anxious: { emoji: "😰", color: "text-purple-600", bg: "bg-purple-50" },
      grateful: { emoji: "🙏", color: "text-pink-600", bg: "bg-pink-50" },
      peaceful: { emoji: "🕊️", color: "text-teal-600", bg: "bg-teal-50" },
      energetic: { emoji: "⚡", color: "text-orange-600", bg: "bg-orange-50" },
      reflective: { emoji: "🤔", color: "text-slate-600", bg: "bg-slate-50" },
    };

    return moodMap[mood.toLowerCase()] || {
      emoji: "💭",
      color: "text-gray-600",
      bg: "bg-gray-50",
    };
  };

  const moodDisplay = getMoodDisplay(entry.mood);

  return (
    <article className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2">
      {entry.imageUrl ? (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={entry.imageUrl}
            alt={entry.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div
            className={`absolute top-4 left-4 ${moodDisplay.bg} ${moodDisplay.color} px-3 py-1.5 rounded-full backdrop-blur-sm bg-white/90 flex items-center gap-1.5 text-sm font-medium shadow-lg`}
          >
            <span className="text-base">{moodDisplay.emoji}</span>
            <span className="capitalize">{entry.mood}</span>
          </div>
        </div>
      ) : (
        <div className="relative h-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">{moodDisplay.emoji}</div>
            <div className={`${moodDisplay.color} text-sm font-medium capitalize`}>
              {entry.mood}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
          {entry.title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{entry.excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          {/* View More Button */}
          <button
            onClick={() => onView(entry.id)}
            className="inline-flex cursor-pointer items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors duration-200"
          >
            <span>Read More</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onEdit(entry)}
              className="p-2 cursor-pointer text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-all duration-200"
              title="Edit entry"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(entry.id)}
              className="p-2 cursor-pointer text-red-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
              title="Delete entry"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JournalCardComponent;