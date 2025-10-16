/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const NewEntry = () => {
  const [title, setTitle] = useState("");
  const [mood, setMood] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [imageSrc, setImageSrc] = useState<File | null>(null);
  const router = useRouter();

  // Upload to Cloudinary (Signed upload)
const uploadToCloudinary = async (file: File) => {
  try {
    // 1️Ask backend for a signed upload signature
    const sigRes = await axios.get("http://localhost:5068/api/v1/cloudinary-signature");
    const { signature, timestamp, apiKey, cloudName } = sigRes.data;

    // Prepare the upload form data
    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp.toString());
    formData.append("signature", signature);

    // upload directly to Cloudinary with the signed data
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );

    return response.data.secure_url;
  } catch (error) {
    console.error("Cloudinary signed upload failed:", error);
    toast.error("Failed to upload image");
    throw error;
  }
};
  // form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      toast.error("User not logged in.");
      return;
    }

    try {
      let imageUrl = "";
      if (imageSrc) {
        toast.loading("Uploading image...");
        imageUrl = await uploadToCloudinary(imageSrc);
        toast.dismiss();
        toast.success("Image uploaded successfully!");
      }

      // Send only JSON (no FormData)
      const payload = {
        title,
        mood,
        content,
        excerpt,
        imageUrl,
      };

      const response = await axios.post(
        `http://localhost:5068/api/v1/${userId}/entries`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Entry added successfully!");
      console.log("Response:", response.data);
      router.push("/dashboard");
    } catch (error: any) {
      console.error(error);
      toast.dismiss();
      toast.error(
        error.response?.data?.message || "Submission failed. Please try again."
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Create New Entry
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md border border-gray-100 space-y-6"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="e.g. A Rainy Afternoon ☔"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 px-4 py-3"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt
            </label>
            <input
              type="text"
              placeholder="A brief explanation"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 px-4 py-3"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageSrc(e.target.files?.[0] || null)}
              className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 px-4 py-3"
            />
          </div>

          {/* Mood */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mood
            </label>
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

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <textarea
              placeholder="Write about your day..."
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 px-4 py-3 resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-md"
            >
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewEntry;