"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "ATS Resume Scanner",
    description:
      "AI-powered tool that scans resumes to check keyword match and ATS compatibility.",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://github.com/praphulchandra-nitdgp/ats-resume-scanner",
  },
  {
    title: "Cold Email Generator",
    description:
      "Generates professional AI-backed cold emails based on job descriptions or LinkedIn profiles.",
    image:
      "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://github.com/praphulchandra-nitdgp/cold-email-generator",
  },
  {
    title: "BlogScribe",
    description:
      "Full-stack blog platform built with Django, enabling content creation, user authentication, and comments.",
    image:
      "https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://github.com/praphulchandra-nitdgp/blogweb_django",
  },
  {
    title: "Hostel Management System",
    description:
      "A Django-based system for managing hostel rooms, tenants, complaints, and administrative tasks.",
    image:
      "https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://github.com/praphulchandra-nitdgp/hostel-management-system",
  },
  {
    title: "Q&A System",
    description:
      "Question-answering web system integrating NLP models for semantic search and automated answers.",
    image:
      "https://images.pexels.com/photos/3184643/pexels-photo-3184643.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://github.com/praphulchandra-nitdgp/qa-system",
  },
  {
    title: "Restaurant App",
    description:
      "Modern restaurant web app built in React with menu browsing, ordering, and reservation features.",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://github.com/praphulchandra-nitdgp/react-restaurant-app",
  },
  {
    title: "Recipe App",
    description:
      "A React-based recipe viewer that fetches dishes using external APIs with dynamic search.",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://github.com/praphulchandra-nitdgp/recipe-app-react",
  },
  {
    title: "Movie App",
    description:
      "React-based app using TMDB API to browse trending, upcoming, and top-rated movies.",
    image:
      "https://images.pexels.com/photos/799137/pexels-photo-799137.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://github.com/praphulchandra-nitdgp/movie-app",
  },
  {
    title: "Weather Todo",
    description:
      "Combination app for weather updates and todo tracking, built in ReactJS using OpenWeather API.",
    image:
      "https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://github.com/praphulchandra-nitdgp/react-weather-todo",
  },
];

interface ProjectsSectionProps {
  detailed?: boolean;
}

export default function ProjectsSection({ detailed = false }: ProjectsSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Function to update itemsPerPage based on window width
  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setItemsPerPage(3);  // Large screens (lg)
    } else if (width >= 640) {
      setItemsPerPage(2);  // Medium screens (sm)
    } else {
      setItemsPerPage(1);  // Small screens (mobile)
    }
  };

  // Set itemsPerPage on mount and on window resize
  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Recalculate total pages when projects or itemsPerPage changes
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // If currentPage goes out of range due to resize, fix it
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // Projects to display on current page
  const displayedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold leading-tight tracking-tight px-4">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {displayedProjects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="space-y-3">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-medium leading-normal text-white group-hover:text-accent transition-colors"
                >
                  {project.title}
                </a>
                <p className="text-sm font-normal leading-normal text-muted">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded-3xl disabled:opacity-50"
        >
          <ArrowLeft />
        </button>

        <span className="flex items-center text-white px-2">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded-3xl disabled:opacity-50"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
