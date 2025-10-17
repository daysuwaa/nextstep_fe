"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  entryId: string | null;
}

interface Entry {
  id: number;
  title: string;
  content: string;
  mood: string;
  imageUrl?: string;
  publishedAt: string;
}

const ViewModal = ({ isOpen, onClose, entryId }: ViewModalProps) => {
  const [entry, setEntry] = useState<Entry | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen || !entryId) return;

    const fetchEntry = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `https://nextstep-be.onrender.com/api/v1/entries/${entryId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
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
  }, [isOpen, entryId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg p-6 relative">
        {loading ? (
          <p className="text-center text-gray-500">Loading entry...</p>
        ) : entry ? (
          <>
            <h2 className="text-2xl font-bold mb-3">{entry.title}</h2>
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              {/* <span>{new Date(entry.publishedAt).toDateString()}</span> */}
              <span className="capitalize">Mood: {entry.mood}</span>
            </div>

            {entry.imageUrl && (
              <div className="relative h-64 mb-4">
                <Image
                  src={entry.imageUrl}
                  alt={entry.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            <p className="text-gray-700 leading-relaxed mb-4">
              {entry.content}
            </p>

            <button
              onClick={onClose}
              className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all"
            >
              Close
            </button>
          </>
        ) : (
          <p className="text-center text-gray-500">Entry not found</p>
        )}
      </div>
    </div>
  );
};

export default ViewModal;