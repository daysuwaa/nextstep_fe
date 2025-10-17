"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

type JournalEntry = {
  id: string;
  title: string;
  mood: string;
  content: string;
  excerpt: string;
};

type EditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedEntry: JournalEntry) => void;
  entry: JournalEntry | null;
};

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave, entry }) => {
  const [title, setTitle] = useState("");
  const [mood, setMood] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");

  useEffect(() => {
    if (entry) {
      setTitle(entry.title);
      setMood(entry.mood);
      setContent(entry.content);
      setExcerpt(entry.excerpt);
    }
  }, [entry]);

  if (!isOpen || !entry) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // ✅ await the request
      const response = await axios.patch(
        `https://nextstep-be.onrender.com/api/v1/entries/${entry.id}`,
        { title, mood, content, excerpt }
      );
      console.log("Response:", response.data);

      // ✅ update parent state
      onSave({
        ...entry,
        title,
        mood,
        content,
        excerpt,
      });

      onClose();
    } catch (error) {
      console.error("Error updating entry:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Edit Entry</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
            <input
              type="text"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mood</label>
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 px-4 py-3"
            >
              <option value="">Select your mood</option>
              <option value="happy">😊 Happy</option>
              <option value="sad">😢 Sad</option>
              <option value="calm">😌 Calm</option>
              <option value="productive">💻 Productive</option>
              <option value="grateful">🙏 Grateful</option>
              <option value="reflective">🤔 Reflective</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 resize-none"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;