"use client";
import React, { useEffect, useState } from "react";
import JournalCardComponent from "./BlogCardComponent";
import EditModal from "../component/EditModal";
import DeleteModal from "../component/DeleteModal";
import ViewModal from "../component/ViewModal";
import Header from "../component/Header";
import toast from "react-hot-toast";
import axios from "axios";

type Entry = {
  id: string;
  title: string;
  mood: string;
  excerpt: string;
  imageUrl?: string;
};

const Dashboard = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);
  const [viewEntryId, setViewEntryId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Fetch entries for logged-in user
  useEffect(() => {
    const fetchEntries = async () => {
      if (!token) {
        toast.error("User not authenticated");
        return;
      }
      // get all entries
      try {
        const response = await axios.get("http://localhost:5068/api/v1/entries", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setEntries(response.data);
      } catch (error: any) {
        console.error("Error fetching entries:", error);
        toast.error("Failed to load entries");
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, [token]);

  // Edit handler
  const handleEdit = (entry: Entry) => {
    setSelectedEntry(entry);
    setIsEditOpen(true);
  };

  // Delete handler
  const handleDelete = (id: string) => {
    const entry = entries.find((e) => e.id === id);
    setSelectedEntry(entry || null);
    setIsDeleteOpen(true);
  };

  // View handler
  const handleView = (id: string) => {
    setViewEntryId(id);
    setIsViewOpen(true);
  };

  // Save edited entry locally
  const handleSaveEdit = (updatedEntry: Entry) => {
    setEntries((prev) =>
      prev.map((entry) => (entry.id === updatedEntry.id ? updatedEntry : entry))
    );
    setIsEditOpen(false);
  };

  // Confirm delete locally
  const handleConfirmDelete = () => {
    if (selectedEntry) {
      setEntries((prev) => prev.filter((e) => e.id !== selectedEntry.id));
      setIsDeleteOpen(false);
      setSelectedEntry(null);
      toast.success("Entry deleted successfully");
    }
  };

  if (loading) {
    return <p className="text-center text-gray-600 mt-10">Loading your entries...</p>;
  }

  return (
    <div>
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">My Journal Entries</h1>
        {entries.length === 0 ? (
          <p className="text-gray-500">No entries yet. Start writing!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entries.map((entry) => (
              <JournalCardComponent
                key={entry.id}
                entry={entry}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onView={handleView}
              />
            ))}
          </div>
        )}
      </div>

      {/* ✅ Modals */}
      <EditModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSave={handleSaveEdit}
        entry={selectedEntry}
      />

      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
        entryId={selectedEntry?.id}
      />

      <ViewModal
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        entryId={viewEntryId}
      />
    </div>
  );
};

export default Dashboard;